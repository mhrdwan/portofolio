"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

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

// Helper function to check if the content is a video
const isVideo = (src) => {
  if (typeof src === "string") {
    return src.match(/\.(mp4|webm|ogg|mov|avi|wmv)$/i);
  }
  return false;
};

const PortfolioItem = ({ project }) => {
  const { t, mounted, locale } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

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
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentImageIndex(0);
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
    }
  };

  // Get current media (video or image)
  const currentMedia = project.images?.[currentImageIndex] || project.image;
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <>
      <motion.div
        className="p-4 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800"
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
            <Image
              className="rounded-lg shadow-md object-cover w-full h-full"
              height={400}
              width={600}
              src={project.image}
              alt={project.title}
              quality={90}
            />
          )}
        </div>
        <div className="p-2">
          <h1 className="text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600">
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
                className="px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {showImagePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
            onClick={() => setShowImagePreview(false)}
          >
            {/* Close button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setShowImagePreview(false)}
              className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
            >
              <CloseIcon />
            </motion.div>

            {/* Full size media */}
            <div className="relative w-full h-full p-4">
              {isCurrentVideo ? (
                <video
                  className="w-full h-full object-contain"
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
                  quality={100}
                />
              )}
            </div>

            {/* Navigation buttons */}
            {project.images?.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                  disabled={currentImageIndex === 0}
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                  disabled={
                    currentImageIndex === (project.images?.length ?? 1) - 1
                  }
                >
                  <ChevronRightIcon />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleModalClose}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.3,
                },
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className="relative w-[95%] sm:w-[85%] lg:max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleModalClose}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              >
                <CloseIcon />
              </motion.div>

              {/* Media slider - fixed height */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative h-[40%] bg-black/10 flex-shrink-0"
              >
                <div
                  className="relative w-full h-full cursor-zoom-in"
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
                    <Image
                      src={currentMedia}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>

                {project.images?.length > 1 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                      disabled={currentImageIndex === 0}
                    >
                      <ChevronLeftIcon />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                      disabled={
                        currentImageIndex === (project.images?.length ?? 1) - 1
                      }
                    >
                      <ChevronRightIcon />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {currentImageIndex + 1} / {project.images.length}
                    </motion.div>
                  </>
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex-1 overflow-y-auto p-6 relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl font-bold mb-4 dark:text-white"
                >
                  {project.title}
                </motion.div>

                <div className="space-y-4">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
                      {mounted ? t("portfolio.description") : "Deskripsi"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
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
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
                      {mounted ? t("portfolio.technology") : "Teknologi"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Features */}
                  {project.features && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
                        {mounted ? t("portfolio.features") : "Fitur"}
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {getLocalizedFeatures(project.features).map(
                          (feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                            >
                              {feature}
                            </motion.div>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )}

                  {/* Link */}
                  {project.link && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="sticky bottom-6 right-6 flex justify-end"
                    >
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 whitespace-nowrap"
                      >
                        {mounted
                          ? t("portfolio.visitProject")
                          : "Kunjungi Project"}
                        <svg
                          className="h-4 w-4"
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
                      </motion.a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioItem;
