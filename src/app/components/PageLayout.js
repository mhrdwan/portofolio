"use client";
import React, { useEffect, Suspense } from "react";
import Navbar from "./Navbar";
import SisiKiri from "./SisiKiri";
import { motion } from "framer-motion";

const PageLayout = ({ children, showSideBar = true }) => {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <main className="px-6 pt-10 lg:pt-0 lg:px-32">
      <Navbar />
      <div className="text-white flex justify-center gap-4 mt-4">
        {showSideBar && (
          <Suspense
            fallback={
              <div className="w-2/12 hidden md:block">
                <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96"></div>
              </div>
            }
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-2/12 hidden md:block"
            >
              <SisiKiri />
            </motion.div>
          </Suspense>
        )}
        <Suspense
          fallback={
            <div className="lg:w-5/7 w-full">
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96"></div>
            </div>
          }
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:w-5/7 w-full"
          >
            {children}
          </motion.div>
        </Suspense>
      </div>
    </main>
  );
};

export default PageLayout;
