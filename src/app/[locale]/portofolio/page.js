"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageLayout from "../../components/PageLayout";
import { portfolioData } from "./dataporto";
import PortfolioItem from "../../components/PortoItems";
import { useTranslation } from "../../hooks/useTranslation";

export default function Portfolio({ params }) {
  const { t, mounted } = useTranslation();
  const ITEMS_PER_PAGE = 15;
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const calculateMonths = () => {
    const startDate = new Date("2023-04-01");
    const currentDate = new Date();

    let months =
      currentDate.getMonth() -
      startDate.getMonth() +
      12 * (currentDate.getFullYear() - startDate.getFullYear());

    return months + 1;
  };

  const categories = useMemo(() => {
    const allCategories = new Set(
      portfolioData.flatMap((item) => item?.categories)
    );
    return ["All", ...Array.from(allCategories)].sort();
  }, []);

  const filteredAndPaginatedData = useMemo(() => {
    let filtered = portfolioData;
    if (currentCategory !== "All") {
      filtered = portfolioData.filter((item) =>
        item?.categories?.includes(currentCategory)
      );
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filtered.slice(startIndex, endIndex);
  }, [currentCategory, currentPage]);

  const totalItems =
    currentCategory === "All"
      ? portfolioData.length
      : portfolioData.filter((item) =>
          item?.categories?.includes(currentCategory)
        ).length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  // Show loading state if translations aren't ready
  if (!mounted) {
    return (
      <PageLayout>
        <div className="title sm:w-8/12 w-full">
          <p className="font-bold text-xl md:text-3xl">Loading...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="title sm:w-8/12 w-full">
        <p className="font-bold text-xl md:text-3xl">{t("portfolio.title")}</p>
        <p className="text-zinc-400 mt-5 text-xs">
          {t("portfolio.subtitle", {
            months: calculateMonths(),
            date: new Date().toLocaleDateString("id-ID"),
          })}
        </p>
      </div>

      <div className="Menu text-sm flex flex-wrap gap-4 mt-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              currentCategory === category
                ? "bg-teal-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === "All" ? t("portfolio.categories.all") : category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredAndPaginatedData?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <PortfolioItem project={project} index={index} />
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8 mb-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === page
                  ? "bg-teal-500 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
