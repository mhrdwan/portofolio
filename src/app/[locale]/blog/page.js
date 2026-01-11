"use client";
import React, { use } from "react";
import Navbar from "../../components/Navbar";
import SisiKiri from "../../components/SisiKiri";
import PageLayout from "../../components/PageLayout";
import { useTranslation } from "../../hooks/useTranslation";

function Blog({ params }) {
  const resolvedParams = use(params);
  const { t, mounted } = useTranslation();

  if (!mounted) {
    return (
      <PageLayout>
        <div className="px-6 pt-10 lg:pt-0 lg:px-32">
          <div className="lg:w-5/7 w-full">
            <div className="lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800">
              <div className="flex flex-col justify-center gap-2 lg:flex-row items-center">
                <div className="w-full px-4 py-4 lg:py-12 lg:w-1/2 font-poppins">
                  <p className="text-center">Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="px-6 pt-10 lg:pt-0 lg:px-32">
        <div className="lg:w-5/7 w-full">
          <div className="lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800">
            <div className="flex flex-col justify-center gap-2 lg:flex-row items-center">
              <div className="w-full px-4 py-4 lg:py-12 font-poppins text-center">
                <h1 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
                  {t("blog.title")}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t("blog.subtitle")}
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">
                    {t("blog.comingSoon")}
                  </h2>
                  <p className="text-teal-600 dark:text-teal-400 text-sm">
                    {t("blog.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Blog;
