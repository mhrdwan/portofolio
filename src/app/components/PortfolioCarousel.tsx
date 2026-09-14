"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: true })
  ]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative space-y-6">
      {/* Carousel Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-muted">
          <Sparkles size={13} className="text-blue-500" />
          <span>Swipe atau klik panah untuk melihat sorotan project</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-xl bg-card border border-card-border text-foreground hover:bg-card-border/40 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-xl bg-card border border-card-border text-foreground hover:bg-card-border/40 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-2xl" ref={emblaRef}>
        <div className="flex gap-6">
          {portfolioData.map((project, idx) => (
            <div 
              key={idx} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <Link
                href={`/projects/${encodeURIComponent(project.title)}`}
                className="group block bg-card border border-card-border rounded-2xl p-5 h-full flex flex-col justify-between hover:border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-background border border-card-border mb-3">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.categories.map((cat) => (
                        <span 
                          key={cat} 
                          className="text-[10px] font-mono font-medium bg-background border border-card-border px-2 py-0.5 rounded text-muted"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {project.link !== "Private" && (
                      <span className="text-muted group-hover:text-foreground transition-colors shrink-0">
                        <ExternalLink size={14} />
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors line-clamp-1">
                    {project.title}
                  </h4>

                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {project.description.id}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-card-border/60 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-muted">
                      #{tech.replace(/\s+/g, "")}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-mono text-muted/70">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="pt-4 flex justify-center">
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold text-xs hover:opacity-90 transition-all shadow-md"
        >
          <span>Eksplorasi Seluruh {portfolioData.length} Portofolio</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
