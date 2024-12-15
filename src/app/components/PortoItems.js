
import Image from "next/image";
import { useState } from "react";

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
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
  
  // Arrow icons
  const ChevronLeftIcon = () => (
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
      <polyline points="15 18 9 12 15 6"></polyline>
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
  
  const  PortfolioItem = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
      setCurrentImageIndex(0); // Reset image index when closing
    };
  
    return (
      <>
        <div
          onClick={() => setShowModal(true)}
          className="p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          {/* Your existing portfolio item content */}
          <div className="rounded-lg shadow-md">
            <Image
              className="rounded-lg shadow-md h-44"
              height={150}
              width={500}
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="p-2">
            <h1 className="text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600">
              {project.title}
            </h1>
            {project.link ? (
              <a
                className="flex mt-5 items-center gap-1 text-xs hover:text-teal-300 text-white"
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
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
                {project.linkText}
              </a>
            ) : (
              <div className="flex mt-5 items-center gap-1 text-xs hover:cursor-not-allowed text-white">
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
                Private
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
        </div>
  
        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={handleModalClose}
          >
            <div
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleModalClose}
                className="absolute right-4 top-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <CloseIcon />
              </button>
  
              {/* Image slider */}
              <div className="relative h-96">
                <Image
                  src={project.images?.[currentImageIndex] || project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
  
                {project.images?.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 disabled:opacity-50"
                      disabled={currentImageIndex === 0}
                    >
                      <ChevronLeftIcon />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 disabled:opacity-50"
                      disabled={
                        currentImageIndex === (project.images?.length ?? 1) - 1
                      }
                    >
                      <ChevronRightIcon />
                    </button>
                  </>
                )}
              </div>
  
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  {project.title}
                </h2>
  
                <div className="space-y-4">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
                      Deskripsi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description || "Tidak ada deskripsi tersedia"}
                    </p>
                  </div>
  
                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
                      Teknologi
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
  
                  {/* Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
                        Fitur
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
  
                  {/* Link */}
                  {project.link && (
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                      >
                        Kunjungi Project
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
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  export default PortfolioItem