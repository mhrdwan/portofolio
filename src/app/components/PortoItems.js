"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import {
  getOptimizedImagePath,
  getWebPImagePath,
  getResponsiveImageSizes,
  getImageQuality,
} from "../utils/imageUtils";

// Optimized close icon component
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// Optimized chevron icons
const ChevronLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

// Enhanced loading spinner component
const LoadingSpinner = ({ size = "large", text = "" }) => (
  <div
    className={`flex flex-col items-center justify-center ${
      size === "large" ? "h-64" : "h-32"
    } space-y-3`}
  >
    <div className="relative">
      <div
        className={`${
          size === "large" ? "w-16 h-16" : "w-8 h-8"
        } border-4 border-gray-600 border-t-teal-500 rounded-full animate-spin`}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`${
            size === "large" ? "w-8 h-8" : "w-4 h-4"
          } border-2 border-gray-500 border-t-teal-400 rounded-full animate-spin`}
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
    </div>
    {text && <p className="text-gray-400 text-sm animate-pulse">{text}</p>}
  </div>
);

// Progressive image loading component
const ProgressiveImage = ({
  src,
  alt,
  className,
  width,
  height,
  quality = 75,
  priority = false,
  sizes,
  onLoad,
  onError,
  placeholder = "blur",
  blurDataURL,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Use optimized image path automatically
  const optimizedSrc = getOptimizedImagePath(src);

  const handleLoad = () => {
    setImageLoading(false);
    onLoad && onLoad();
  };

  const handleError = () => {
    // If optimized image fails, try original
    if (optimizedSrc !== src) {
      setImageError(false);
      // The Image component will automatically retry with fallback
    } else {
      setImageLoading(false);
      setImageError(true);
      onError && onError();
    }
  };

  // Generate a simple blur data URL if not provided
  const defaultBlurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  if (imageError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-800 text-gray-400`}
      >
        <div className="text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs">Failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {imageLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg z-10`}
        >
          <LoadingSpinner size="small" text="Loading image..." />
        </div>
      )}
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        quality={quality}
        priority={priority}
        sizes={sizes || getResponsiveImageSizes("default")}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          transition: "opacity 0.3s ease-in-out",
          opacity: imageLoading ? 0 : 1,
        }}
      />
    </div>
  );
};

// Skeleton loader for content
const ContentSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-8 bg-gray-700 rounded-lg w-3/4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700 rounded w-4/6"></div>
    </div>
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-6 bg-gray-700 rounded-full w-16"></div>
      ))}
    </div>
  </div>
);

// Helper function to check if the content is a video
const isVideo = (src) => {
  if (typeof src === "string") {
    return src.match(/\.(mp4|webm|ogg|mov|avi|wmv)$/i);
  }
  return false;
};

const PortfolioItem = ({ project, index = 0 }) => {
  const { t, mounted, locale } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [modalImageLoading, setModalImageLoading] = useState(true);
  const [previewImageLoading, setPreviewImageLoading] = useState(true);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Prioritize loading for first few items
  const shouldPrioritize = index < 3;

  // Helper function to get content based on current language
  const getLocalizedContent = (content, fallback = "") => {
    if (!mounted) return fallback;

    if (typeof content === "object" && content !== null) {
      return content[locale] || content.id || fallback;
    }

    return content || fallback;
  };

  // Helper function to get features array based on current language
  const getLocalizedFeatures = (features) => {
    if (!mounted) return [];

    if (Array.isArray(features)) {
      // Old format - array of strings
      return features;
    } else if (typeof features === "object" && features !== null) {
      // New format - object with language keys
      return features[locale] || features.id || [];
    }

    return [];
  };

  const handleNextImage = () => {
    if (project.images && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
      setModalImageLoading(true);
      setPreviewImageLoading(true);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
      setModalImageLoading(true);
      setPreviewImageLoading(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentImageIndex(0);
    setModalImageLoading(true);
    // Pause video when modal closes
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current && isVideo(project.image)) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Autoplay was prevented");
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current && isVideo(project.image)) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleContentClick = () => {
    if (isVideo(project.image)) {
      // If it's a video, toggle play/pause
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    } else {
      // If it's an image, open modal
      setShowModal(true);
      setModalImageLoading(true);
    }
  };

  // Get current media (video or image)
  const currentMedia = project.images?.[currentImageIndex] || project.image;
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <>
      <motion.div
        className="p-4 rounded-lg shadow-lg cursor-pointer lg:p-2 shadow-none hover:bg-zinc-200 hover:bg-zinc-800"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-48 sm:h-52 md:h-56 relative group"
          onClick={handleContentClick}
        >
          {isVideo(project.image) ? (
            <>
              <video
                ref={videoRef}
                className="rounded-lg shadow-md object-cover w-full h-full"
                muted
                loop
                playsInline
                poster={project.thumbnail || undefined}
              >
                <source src={project.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Play button overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}
              >
                <PlayIcon />
              </div>
              {/* Video indicator */}
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                {mounted ? t("portfolio.video") : "VIDEO"}
              </div>
            </>
          ) : (
            <ProgressiveImage
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-full"
              quality={getImageQuality("card", shouldPrioritize)}
              priority={shouldPrioritize}
              sizes={getResponsiveImageSizes("card")}
            />
          )}
        </div>
        <div className="p-2">
          <h1 className="text-sm font-semibold line-clamp-2 text-white text-zinc-600">
            {project.title}
          </h1>
          {project.link ? (
            <a
              className="flex mt-5 items-center gap-1 text-xs hover:text-teal-300 text-white group w-full"
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-1 px-4 py-2 bg-teal-500 group-hover:bg-teal-400 transition-colors rounded-full">
                {mounted ? t("portfolio.visitProject") : "Kunjungi Project"}
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
            </a>
          ) : (
            <div className="flex mt-5 items-center gap-1 text-xs text-white w-full">
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              {mounted ? t("portfolio.private") : "Private"}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {project?.technologies?.map((tech, index) => (
              <button
                key={index}
                className="px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 bg-zinc-800 text-zinc-600 text-zinc-400"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full Screen Image Preview */}
      <AnimatePresence>
        {showImagePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setShowImagePreview(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setShowImagePreview(false)}
              className="absolute right-4 top-4 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10"
            >
              <CloseIcon />
            </motion.button>

            {/* Full size media container */}
            <div className="relative w-full h-full p-8 flex items-center justify-center">
              {previewImageLoading && !isCurrentVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LoadingSpinner
                    size="large"
                    text="Loading high quality image..."
                  />
                </div>
              )}

              {isCurrentVideo ? (
                <video
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={currentMedia} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={currentMedia}
                  alt={project.title}
                  fill
                  className="object-contain"
                  quality={getImageQuality("preview", true)}
                  sizes={getResponsiveImageSizes("preview")}
                  onLoad={() => setPreviewImageLoading(false)}
                  onError={() => setPreviewImageLoading(false)}
                />
              )}
            </div>

            {/* Navigation buttons */}
            {project.images?.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentImageIndex === 0}
                >
                  <ChevronLeftIcon />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={
                    currentImageIndex === (project.images?.length ?? 1) - 1
                  }
                >
                  <ChevronRightIcon />
                </motion.button>

                {/* Image counter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10"
                >
                  {currentImageIndex + 1} / {project.images.length}
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleModalClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.1,
                },
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 20,
                transition: {
                  duration: 0.3,
                },
              }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleModalClose}
                className="absolute right-4 top-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10"
              >
                <CloseIcon />
              </motion.button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Media Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative lg:w-1/2 h-64 lg:h-auto bg-zinc-950 flex-shrink-0"
                >
                  {/* Loading overlay */}
                  {modalImageLoading && !isCurrentVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 z-10">
                      <LoadingSpinner
                        size="large"
                        text="Loading modal image..."
                      />
                    </div>
                  )}

                  <div
                    className="relative w-full h-full cursor-zoom-in group"
                    onClick={() => setShowImagePreview(true)}
                  >
                    {isCurrentVideo ? (
                      <video
                        ref={modalVideoRef}
                        className="w-full h-full object-contain"
                        controls
                        loop
                        muted
                        playsInline
                      >
                        <source src={currentMedia} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <Image
                          src={currentMedia}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          quality={getImageQuality("modal", true)}
                          sizes={getResponsiveImageSizes("modal")}
                          onLoad={() => setModalImageLoading(false)}
                          onError={() => setModalImageLoading(false)}
                        />
                        {/* Zoom indicator */}
                        <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to zoom
                        </div>
                      </>
                    )}
                  </div>

                  {/* Navigation buttons */}
                  {project.images?.length > 1 && (
                    <>
                      <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={currentImageIndex === 0}
                      >
                        <ChevronLeftIcon />
                      </motion.button>

                      <motion.button
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={
                          currentImageIndex ===
                          (project.images?.length ?? 1) - 1
                        }
                      >
                        <ChevronRightIcon />
                      </motion.button>

                      {/* Image counter */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-white/10"
                      >
                        {currentImageIndex + 1} / {project.images.length}
                      </motion.div>
                    </>
                  )}
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 p-6 lg:p-8 overflow-y-auto"
                >
                  <div className="space-y-6">
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h1>
                      <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3"
                    >
                      <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-teal-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        {mounted ? t("portfolio.description") : "Deskripsi"}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {getLocalizedContent(
                          project.description,
                          mounted
                            ? t("portfolio.noDescription")
                            : "Tidak ada deskripsi tersedia"
                        )}
                      </p>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3"
                    >
                      <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-teal-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {mounted ? t("portfolio.technology") : "Teknologi"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium hover:from-teal-500/30 hover:to-blue-500/30 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Features */}
                    {project.features && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-3"
                      >
                        <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-teal-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {mounted ? t("portfolio.features") : "Fitur"}
                        </h3>
                        <ul className="space-y-2">
                          {getLocalizedFeatures(project.features).map(
                            (feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="flex items-start gap-3 text-gray-400"
                              >
                                <svg
                                  className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{feature}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </motion.div>
                    )}

                    {/* Project Link */}
                    {project.link && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="pt-4"
                      >
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {mounted
                            ? t("portfolio.visitProject")
                            : "Kunjungi Project"}
                        </motion.a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioItem;
