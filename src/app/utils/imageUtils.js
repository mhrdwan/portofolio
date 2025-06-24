/**
 * Image optimization utilities for portfolio website
 * Automatically uses optimized versions of images when available
 */

// Check if optimized version exists
export function getOptimizedImagePath(imagePath) {
  if (!imagePath || typeof imagePath !== "string") return imagePath;

  // If it's already an optimized path, return as is
  if (imagePath.includes("/IMG/optimized/")) return imagePath;

  // Handle both absolute paths starting with /IMG/ and relative paths
  if (imagePath.startsWith("/IMG/")) {
    // Extract the path after /IMG/
    const pathAfterIMG = imagePath.substring(5); // Remove "/IMG/"
    return `/IMG/optimized/${pathAfterIMG}`;
  }

  // If it doesn't start with /IMG/, assume it's a relative path and prepend /IMG/optimized/
  return `/IMG/optimized/${imagePath}`;
}

// Get WebP version if supported
export const getWebPImagePath = (originalPath) => {
  if (!originalPath || typeof originalPath !== "string") {
    return originalPath;
  }

  const optimizedPath = getOptimizedImagePath(originalPath);

  // Convert to WebP
  const webpPath = optimizedPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  return webpPath;
};

// Get multiple image sources for different formats
export const getImageSources = (originalPath) => {
  if (!originalPath) return { original: originalPath };

  const optimizedPath = getOptimizedImagePath(originalPath);
  const webpPath = getWebPImagePath(originalPath);

  return {
    original: originalPath,
    optimized: optimizedPath,
    webp: webpPath,
  };
};

// Generate responsive image sizes based on context
export const getResponsiveImageSizes = (context = "default") => {
  const sizeMap = {
    card: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
    modal: "(max-width: 768px) 100vw, 50vw",
    preview: "100vw",
    hero: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw",
    thumbnail: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw",
    default: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  };

  return sizeMap[context] || sizeMap.default;
};

// Get quality based on image size and context
export const getImageQuality = (context = "default", priority = false) => {
  const qualityMap = {
    thumbnail: priority ? 80 : 70,
    card: priority ? 85 : 75,
    modal: priority ? 90 : 80,
    preview: priority ? 95 : 85,
    hero: priority ? 90 : 85,
    default: priority ? 85 : 75,
  };

  return qualityMap[context] || qualityMap.default;
};

// Generate blur placeholder data URL
export const generateBlurPlaceholder = (width = 10, height = 10) => {
  // Simple base64 encoded 1x1 transparent pixel
  return `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==`;
};

// Check if browser supports WebP
export const supportsWebP = () => {
  if (typeof window === "undefined") return false;

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
};

// Preload critical images
export const preloadImage = (src, priority = false) => {
  if (typeof window === "undefined") return;

  const link = document.createElement("link");
  link.rel = priority ? "preload" : "prefetch";
  link.as = "image";
  link.href = src;

  // Add to head
  document.head.appendChild(link);

  return link;
};

// Preload multiple image formats
export const preloadImageWithFormats = (originalPath, priority = false) => {
  const sources = getImageSources(originalPath);
  const links = [];

  // Preload WebP if supported
  if (supportsWebP() && sources.webp) {
    links.push(preloadImage(sources.webp, priority));
  }

  // Preload optimized version as fallback
  if (sources.optimized) {
    links.push(preloadImage(sources.optimized, priority));
  }

  return links;
};

// Image loading error handler
export const handleImageError = (event, fallbackSrc) => {
  const img = event.target;

  if (fallbackSrc && img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  } else {
    // Show placeholder or hide image
    img.style.display = "none";

    // Dispatch custom event for error handling
    const errorEvent = new CustomEvent("imageLoadError", {
      detail: { originalSrc: img.src, element: img },
    });
    window.dispatchEvent(errorEvent);
  }
};

// Lazy loading intersection observer
export const createImageObserver = (callback, options = {}) => {
  if (typeof window === "undefined" || !window.IntersectionObserver) {
    return null;
  }

  const defaultOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Get image dimensions from path (for common portfolio images)
export const getImageDimensions = (imagePath) => {
  // Common dimensions for portfolio images
  const dimensionMap = {
    // Mobile screenshots
    siplahapp: { width: 739, height: 1600 },
    screen_cuaca_android: { width: 652, height: 1412 },

    // Web screenshots (typical)
    masterdiskon_web: { width: 1920, height: 1080 },
    jaja_auto_web: { width: 1920, height: 1080 },
    batugin: { width: 1920, height: 1080 },
    eureka_logistik: { width: 1920, height: 1080 },

    // Default dimensions
    default: { width: 1200, height: 800 },
  };

  // Extract filename from path
  const filename = imagePath?.split("/").pop()?.split(".")[0];

  // Find matching dimension
  for (const [key, dimensions] of Object.entries(dimensionMap)) {
    if (filename?.includes(key)) {
      return dimensions;
    }
  }

  return dimensionMap.default;
};

export default {
  getOptimizedImagePath,
  getWebPImagePath,
  getImageSources,
  getResponsiveImageSizes,
  getImageQuality,
  generateBlurPlaceholder,
  supportsWebP,
  preloadImage,
  preloadImageWithFormats,
  handleImageError,
  createImageObserver,
  getImageDimensions,
};
