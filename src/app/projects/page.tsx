"use client";

import React, { useState, useEffect, useMemo } from "react";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { 
  Search, 
  LayoutGrid, 
  List, 
  ExternalLink, 
  ArrowUpRight, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Terminal
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [previewProject, setPreviewProject] = useState<PortfolioItem | null>(null);
  const [previewImageIndex, setPreviewImageIndex] = useState<number>(0);

  // Handle escape & arrow keys for preview modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewProject(null);
      if (e.key === "ArrowRight" && previewProject?.images?.length) {
        setPreviewImageIndex((prev) => (prev + 1) % previewProject.images.length);
      }
      if (e.key === "ArrowLeft" && previewProject?.images?.length) {
        setPreviewImageIndex((prev) => (prev - 1 + previewProject.images.length) % previewProject.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewProject]);

  // Categories with counts
  const categories = useMemo(() => {
    const allCategories = portfolioData.flatMap((p) => p.categories);
    const unique = Array.from(new Set(allCategories));
    return ["All", ...unique];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return portfolioData.filter((project) => {
      const matchCategory =
        selectedCategory === "All" || project.categories.includes(selectedCategory);
      
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        project.description.id.toLowerCase().includes(query) ||
        project.description.en.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openPreview = (project: PortfolioItem) => {
    setPreviewProject(project);
    setPreviewImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background relative font-sans">
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Navbar />

      <main className="pt-28 pb-24 px-6 max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card text-xs font-mono text-muted">
            <Layers size={13} className="text-blue-500" />
            <span>Koleksi Karya & Rekayasa Perangkat Lunak ({portfolioData.length} Total)</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Arsip & Portofolio Project
              </h1>
              <p className="text-muted mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                Kumpulan aplikasi mobile, sistem web full stack, Web3 dApp, dan automasi yang pernah saya rancang dan kembangkan.
              </p>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 p-1 bg-card border border-card-border rounded-xl self-start md:self-auto">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <LayoutGrid size={14} />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <List size={14} />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Controls: Search + Categories */}
        <div className="space-y-4 mb-8 bg-card border border-card-border rounded-2xl p-4 md:p-5 shadow-sm">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Cari project berdasarkan nama, teknologi (e.g. React Native, NestJS, Web3)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-background border border-card-border rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground text-xs cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-card-border/60">
            <span className="text-xs font-mono text-muted mr-1.5">Kategori:</span>
            {categories.map((cat) => {
              const count = cat === "All" 
                ? portfolioData.length 
                : portfolioData.filter((p) => p.categories.includes(cat)).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-foreground text-background font-semibold"
                      : "bg-background border border-card-border text-muted hover:text-foreground hover:border-muted"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-background/20 text-background" : "bg-card-border/40 text-muted"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-muted mb-6">
          <span>Menampilkan {filteredProjects.length} dari {portfolioData.length} project</span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Reset semua filter
            </button>
          )}
        </div>

        {/* Project Grid View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-card border border-card-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-muted hover:shadow-xl transition-all duration-300"
              >
                {/* Card Media Preview */}
                <div className="relative aspect-video w-full bg-background border-b border-card-border overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted font-mono text-xs">
                      <Terminal size={24} className="mb-2 opacity-50" />
                    </div>
                  )}

                  {/* Image count badge & quick preview button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                    {project.images && project.images.length > 0 && (
                      <button
                        type="button"
                        onClick={() => openPreview(project)}
                        className="px-3 py-1.5 rounded-lg bg-background text-foreground text-xs font-semibold flex items-center gap-1.5 hover:scale-105 transition-transform shadow-lg cursor-pointer"
                      >
                        <Eye size={14} />
                        <span>Lihat Galeri ({project.images.length})</span>
                      </button>
                    )}
                    <Link
                      href={`/projects/${encodeURIComponent(project.title)}`}
                      className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold flex items-center gap-1.5 hover:scale-105 transition-transform shadow-lg"
                    >
                      <span>Detail</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* Category pill on media */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1 pointer-events-none">
                    {project.categories.map((c) => (
                      <span key={c} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-background/85 backdrop-blur-md text-foreground border border-card-border">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <Link 
                      href={`/projects/${encodeURIComponent(project.title)}`}
                      className="block group/title"
                    >
                      <h3 className="text-base font-bold text-foreground group-hover/title:text-blue-500 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-muted leading-relaxed line-clamp-3">
                      {project.description.id}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="space-y-3 pt-3 border-t border-card-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background border border-card-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-background border border-card-border text-muted">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="flex items-center justify-between pt-1">
                      <Link
                        href={`/projects/${encodeURIComponent(project.title)}`}
                        className="text-xs font-semibold text-foreground hover:text-blue-500 flex items-center gap-1 transition-colors"
                      >
                        <span>Studi Kasus</span>
                        <ArrowUpRight size={13} />
                      </Link>

                      {project.link !== "Private" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-muted hover:text-foreground flex items-center gap-1 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-muted/70">
                          Enterprise / Private
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Project List View */
          <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm">
            <div className="divide-y divide-card-border">
              {filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-card-border/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {project.image && (
                      <div className="w-16 h-12 rounded-lg bg-background border border-card-border overflow-hidden shrink-0 hidden sm:block">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link
                          href={`/projects/${encodeURIComponent(project.title)}`}
                          className="text-sm font-bold text-foreground hover:text-blue-500 transition-colors"
                        >
                          {project.title}
                        </Link>
                        {project.categories.map((c) => (
                          <span key={c} className="text-[10px] font-mono px-2 py-0.2 rounded bg-background border border-card-border text-muted">
                            {c}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted line-clamp-1 max-w-2xl">
                        {project.description.id}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                    <div className="hidden lg:flex flex-wrap gap-1 max-w-xs justify-end">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono text-muted">
                          #{t}
                        </span>
                      ))}
                    </div>
                    {project.images && project.images.length > 0 && (
                      <button
                        type="button"
                        onClick={() => openPreview(project)}
                        className="p-2 rounded-lg border border-card-border bg-background text-muted hover:text-foreground text-xs cursor-pointer"
                        title="Lihat Galeri"
                      >
                        <Eye size={14} />
                      </button>
                    )}
                    <Link
                      href={`/projects/${encodeURIComponent(project.title)}`}
                      className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 flex items-center gap-1"
                    >
                      <span>Lihat</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-card border border-card-border rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-card-border/40 text-muted mx-auto flex items-center justify-center">
              <Search size={20} />
            </div>
            <h3 className="text-base font-bold text-foreground">Tidak ada project yang cocok</h3>
            <p className="text-xs text-muted max-w-sm mx-auto">
              Coba gunakan kata kunci pencarian yang berbeda atau pilih kategori lain.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 cursor-pointer"
            >
              Tampilkan Semua Project
            </button>
          </div>
        )}
      </main>

      {/* Quick Image Gallery Lightbox Modal */}
      {previewProject && previewProject.images && previewProject.images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="relative max-w-5xl w-full bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-card-border flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-foreground">{previewProject.title}</h3>
                <span className="text-[11px] font-mono text-muted">
                  Gambar {previewImageIndex + 1} dari {previewProject.images.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/projects/${encodeURIComponent(previewProject.title)}`}
                  className="text-xs font-semibold text-blue-500 hover:underline flex items-center gap-1 mr-2"
                >
                  Buka Halaman Detail <ArrowUpRight size={13} />
                </Link>
                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="p-1.5 rounded-lg border border-card-border bg-background text-foreground hover:bg-card-border cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 bg-black/40 min-h-[320px] max-h-[60vh] flex items-center justify-center p-4 overflow-hidden">
              <img
                src={previewProject.images[previewImageIndex]}
                alt={`${previewProject.title} preview`}
                className="max-w-full max-h-[58vh] object-contain rounded-lg shadow-lg"
              />

              {/* Navigation arrows */}
              {previewProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setPreviewImageIndex(
                        (prev) => (prev - 1 + previewProject.images.length) % previewProject.images.length
                      )
                    }
                    className="absolute left-3 p-2 rounded-full bg-background/80 text-foreground border border-card-border hover:bg-background cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setPreviewImageIndex((prev) => (prev + 1) % previewProject.images.length)
                    }
                    className="absolute right-3 p-2 rounded-full bg-background/80 text-foreground border border-card-border hover:bg-background cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails Row */}
            {previewProject.images.length > 1 && (
              <div className="p-3 border-t border-card-border bg-background flex items-center gap-2 overflow-x-auto">
                {previewProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPreviewImageIndex(idx)}
                    className={`relative w-16 h-11 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      previewImageIndex === idx
                        ? "border-blue-500 scale-105"
                        : "border-card-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
