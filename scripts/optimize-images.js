const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const INPUT_DIR = path.join(process.cwd(), "public", "IMG");
const OUTPUT_DIR = path.join(process.cwd(), "public", "IMG", "optimized");

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
  // For large images (>2MB), compress more aggressively
  large: {
    quality: 65,
    maxWidth: 1920,
    maxHeight: 1080,
  },
  // For medium images (500KB-2MB), moderate compression
  medium: {
    quality: 75,
    maxWidth: 1600,
    maxHeight: 900,
  },
  // For small images (<500KB), light compression
  small: {
    quality: 85,
    maxWidth: 1200,
    maxHeight: 800,
  },
};

// File size thresholds in bytes
const LARGE_THRESHOLD = 2 * 1024 * 1024; // 2MB
const MEDIUM_THRESHOLD = 500 * 1024; // 500KB

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size;
}

function getOptimizationLevel(fileSize) {
  if (fileSize > LARGE_THRESHOLD) return "large";
  if (fileSize > MEDIUM_THRESHOLD) return "medium";
  return "small";
}

async function optimizeImage(inputPath, outputPath, settings) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Optimizing: ${path.relative(INPUT_DIR, inputPath)}`);
    console.log(
      `  Original: ${metadata.width}x${metadata.height}, ${Math.round(
        metadata.size / 1024
      )}KB`
    );

    let pipeline = image;

    // Resize if image is larger than max dimensions
    if (
      metadata.width > settings.maxWidth ||
      metadata.height > settings.maxHeight
    ) {
      pipeline = pipeline.resize(settings.maxWidth, settings.maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Apply format-specific optimization
    if (metadata.format === "jpeg" || metadata.format === "jpg") {
      pipeline = pipeline.jpeg({
        quality: settings.quality,
        progressive: true,
        mozjpeg: true,
      });
    } else if (metadata.format === "png") {
      pipeline = pipeline.png({
        quality: settings.quality,
        progressive: true,
        compressionLevel: 9,
      });
    } else if (metadata.format === "webp") {
      pipeline = pipeline.webp({
        quality: settings.quality,
      });
    }

    await pipeline.toFile(outputPath);

    const optimizedSize = await getFileSize(outputPath);
    const originalSize = await getFileSize(inputPath);
    const savings = (
      ((originalSize - optimizedSize) / originalSize) *
      100
    ).toFixed(1);

    console.log(
      `  Optimized: ${Math.round(
        optimizedSize / 1024
      )}KB (${savings}% reduction)`
    );

    return {
      original: originalSize,
      optimized: optimizedSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function createWebPVersion(inputPath, outputPath) {
  try {
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    await sharp(inputPath).webp({ quality: 80 }).toFile(webpPath);
    console.log(
      `  Created WebP version: ${path.relative(OUTPUT_DIR, webpPath)}`
    );
    return webpPath;
  } catch (error) {
    console.error(
      `Error creating WebP version for ${inputPath}:`,
      error.message
    );
    return null;
  }
}

async function getAllImageFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip the optimized directory to avoid infinite loops
      if (entry.name === "optimized") continue;

      // Recursively get files from subdirectories
      const subFiles = await getAllImageFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else if (entry.isFile()) {
      // Check if it's an image file
      if (
        /\.(jpg|jpeg|png|webp)$/i.test(entry.name) &&
        !entry.name.startsWith(".")
      ) {
        const relativePath = path.relative(baseDir, fullPath);
        files.push({
          fullPath,
          relativePath,
          filename: entry.name,
          directory: path.dirname(relativePath),
        });
      }
    }
  }

  return files;
}

async function optimizeImagesInDirectory() {
  try {
    console.log(`🔍 Scanning for images in ${INPUT_DIR}...\n`);

    // Get all image files recursively
    const imageFiles = await getAllImageFiles(INPUT_DIR);

    console.log(`Found ${imageFiles.length} images to optimize...\n`);

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let processedCount = 0;

    for (const imageFile of imageFiles) {
      const { fullPath, relativePath, filename, directory } = imageFile;

      // Create output directory structure
      const outputSubDir = path.join(OUTPUT_DIR, directory);
      await fs.mkdir(outputSubDir, { recursive: true });

      const outputPath = path.join(OUTPUT_DIR, relativePath);

      // Skip if already optimized and newer than original
      try {
        const outputStats = await fs.stat(outputPath);
        const inputStats = await fs.stat(fullPath);
        if (outputStats.mtime > inputStats.mtime) {
          console.log(`Skipping ${relativePath} (already optimized)`);
          continue;
        }
      } catch (error) {
        // File doesn't exist, continue with optimization
      }

      const fileSize = await getFileSize(fullPath);
      const optimizationLevel = getOptimizationLevel(fileSize);
      const settings = OPTIMIZATION_SETTINGS[optimizationLevel];

      console.log(
        `\n[${optimizationLevel.toUpperCase()}] Processing: ${relativePath}`
      );

      const result = await optimizeImage(fullPath, outputPath, settings);

      if (result) {
        totalOriginalSize += result.original;
        totalOptimizedSize += result.optimized;
        processedCount++;

        // Create WebP version for better browser support
        await createWebPVersion(fullPath, outputPath);
      }
    }

    // Generate summary
    console.log("\n" + "=".repeat(60));
    console.log("OPTIMIZATION SUMMARY");
    console.log("=".repeat(60));
    console.log(`Files processed: ${processedCount}`);
    console.log(
      `Original total size: ${(totalOriginalSize / (1024 * 1024)).toFixed(
        2
      )} MB`
    );
    console.log(
      `Optimized total size: ${(totalOptimizedSize / (1024 * 1024)).toFixed(
        2
      )} MB`
    );
    console.log(
      `Total savings: ${(
        ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
        100
      ).toFixed(1)}%`
    );
    console.log(
      `Space saved: ${(
        (totalOriginalSize - totalOptimizedSize) /
        (1024 * 1024)
      ).toFixed(2)} MB`
    );

    // Generate usage instructions
    console.log("\n" + "=".repeat(60));
    console.log("FOLDER STRUCTURE MAINTAINED");
    console.log("=".repeat(60));
    console.log("✅ All subfolder structures have been preserved");
    console.log("✅ Images are now available at:");
    console.log("   Original: /IMG/subfolder/image.jpg");
    console.log("   Optimized: /IMG/optimized/subfolder/image.jpg");
    console.log("   WebP: /IMG/optimized/subfolder/image.webp");

    console.log("\n📋 NEXT STEPS:");
    console.log("1. Your app will automatically use optimized images");
    console.log("2. Start dev server: npm run dev");
    console.log("3. Check browser DevTools for smaller image sizes");
  } catch (error) {
    console.error("Error during optimization:", error);
  }
}

// Run the optimization
if (require.main === module) {
  console.log("🖼️  Enhanced Image Optimization Tool");
  console.log("====================================");
  console.log("📁 Processing all subfolders recursively...\n");
  optimizeImagesInDirectory();
}

module.exports = { optimizeImagesInDirectory };
