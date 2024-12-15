"use client";
import React, { useMemo, useState } from "react";
import PageLayout from "../components/PageLayout";
import { portfolioData } from "./dataporto";
import PortfolioItem from "../components/PortoItems";



export default function Portfolio() {
  const ITEMS_PER_PAGE = 6;
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <PageLayout>
      <div className="title sm:w-8/12 w-full">
        <p className="font-bold text-xl md:text-3xl">
          Berbagai hal yang telah saya buat untuk meninggalkan jejak di dunia
          programming.
        </p>
        <p className="text-zinc-400 mt-5 text-xs">
          Saya telah belajar dan bekerja pada beberapa proyek selama 7 bulan
          terhitung sampai portofolio ini di update tanggal{" "}
          <span className="font-bold text-white">10/29/2023,</span>{" "}
          daftar-daftar ini yang ingin saya tampilkan.
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
            {category}
          </button>
        ))}
      </div>

      <div className="content grid md:grid-cols-3 gap-5 mt-6">
        {filteredAndPaginatedData.map((project, index) => (
          <PortfolioItem key={index} project={project} />
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
