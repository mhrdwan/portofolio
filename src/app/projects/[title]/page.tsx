"use client";

import React, { useEffect, useState, useMemo } from "react";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Share2,
  X
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const title = decodeURIComponent(params.title as string);
  
  const [project, setProject] = useState<PortfolioItem | null>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const currentIndex = useMemo(() => {
    return portfolioData.findIndex((p) => p.title === title);
  }, [title]);

  const prevProject = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioData.length - 1 ? portfolioData[currentIndex + 1] : null;

  useEffect(() => {
    const found = portfolioData.find((p) => p.title === title);
    if (found) {
      setProject(found);
      setSelectedImgIndex(0);
    }
  }, [title]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
        <Navbar />
        <div className="text-center space-y-3 pt-20">
          <p className="text-muted font-mono">Project tidak ditemukan.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-xs font-semibold"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Daftar Project</span>
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = project.images && project.images.length > 0 ? project.images : (project.image ? [project.image] : []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background relative font-sans">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Navbar />

      <main className="pt-28 pb-24 px-6 max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Actions */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-card-border bg-card"
          >
            <ArrowLeft size={14} />
            <span>Semua Project</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground px-3 py-1.5 rounded-lg border border-card-border bg-card transition-colors cursor-pointer"
            >
              <Share2 size={13} />
              <span>{copied ? "Tersalin!" : "Bagikan"}</span>
            </button>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-mono font-semibold bg-card border border-card-border text-foreground rounded-lg"
              >
                {cat}
              </span>
            ))}
            {project.link !== "Private" && (
              <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Live Production
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            {project.title}
          </h1>
        </div>

        {/* Main Content: Gallery & Deep-dive details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Interactive Media Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Active Highlight Image */}
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative aspect-video w-full rounded-2xl bg-card border border-card-border overflow-hidden cursor-zoom-in group shadow-lg"
            >
              <img
                src={galleryImages[selectedImgIndex] || project.image}
                alt={project.title}
                className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-md text-[11px] font-mono text-muted border border-card-border">
                Klik untuk memperbesar
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="space-y-2">
                <span className="text-xs font-mono text-muted">Screenshot Galeri ({galleryImages.length} Foto):</span>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        selectedImgIndex === idx
                          ? "border-blue-500 scale-105 shadow-md"
                          : "border-card-border opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Project Information & Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Overview Card */}
            <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                <Sparkles size={14} className="text-blue-500" />
                <span>Ringkasan & Arsitektur</span>
              </div>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed whitespace-pre-wrap">
                {project.description.id}
              </p>
            </div>

            {/* Features List Card */}
            {project.features && project.features.id && project.features.id.length > 0 && (
              <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Fitur Utama yang Dibangun</span>
                </div>
                <div className="space-y-2.5">
                  {project.features.id.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Card */}
            <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                <Layers size={14} className="text-purple-500" />
                <span>Teknologi & Tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-background border border-card-border text-foreground text-xs font-mono font-medium rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2">
              {project.link !== "Private" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Globe size={18} />
                  <span>Kunjungi Live Project</span>
                  <ExternalLink size={15} />
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-card border border-card-border text-muted font-mono text-xs">
                  <Lock size={15} />
                  <span>Akses Terbatas / Internal Enterprise System</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next & Previous Project Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-card-border grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${encodeURIComponent(prevProject.title)}`}
              className="group p-5 bg-card border border-card-border rounded-2xl hover:border-muted transition-all flex flex-col gap-1"
            >
              <span className="text-xs font-mono text-muted flex items-center gap-1">
                <ChevronLeft size={14} /> Project Sebelumnya
              </span>
              <span className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors line-clamp-1">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${encodeURIComponent(nextProject.title)}`}
              className="group p-5 bg-card border border-card-border rounded-2xl hover:border-muted transition-all flex flex-col items-end gap-1 text-right"
            >
              <span className="text-xs font-mono text-muted flex items-center gap-1">
                Project Selanjutnya <ChevronRight size={14} />
              </span>
              <span className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors line-clamp-1">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative max-w-6xl w-full h-[85vh] flex flex-col items-center justify-center">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-2 right-2 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 z-10 cursor-pointer"
              >
                <X size={20} />
              </button>
              <img
                src={galleryImages[selectedImgIndex]}
                alt={project.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              {galleryImages.length > 1 && (
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() =>
                      setSelectedImgIndex(
                        (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                      )
                    }
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-xs font-mono text-zinc-300">
                    {selectedImgIndex + 1} / {galleryImages.length}
                  </span>
                  <button
                    onClick={() =>
                      setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length)
                    }
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
