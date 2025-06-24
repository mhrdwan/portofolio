"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from "./hooks/useTranslation";

const NotFoundPage = () => {
  const router = useRouter();
  const { t, mounted } = useTranslation();

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            404
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("404.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t("404.description")}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="inline-block w-full px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-colors duration-200"
          >
            {t("404.backToHome")}
          </Link>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-4 py-2 text-teal-500 border border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg font-medium transition-colors duration-200"
            >
              {t("404.aboutPage")}
            </Link>
            <Link
              href="/portofolio"
              className="px-4 py-2 text-teal-500 border border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg font-medium transition-colors duration-200"
            >
              {t("404.portfolioPage")}
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12"
        >
          <div className="flex justify-center space-x-4 text-gray-400">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-teal-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Back Button Alternative */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => router.back()}
          className="mt-6 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
        >
          ← {t("404.backToHome")}
        </motion.button>
      </div>
    </div>
  );
};

export default NotFoundPage;
