"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import TerminalHero from "../components/TerminalHero";
import { useTranslation } from "../hooks/useTranslation";
import { portfolioData } from "./portofolio/dataporto";

export default function Home({ params }) {
  const { mounted } = useTranslation();

  if (!mounted) {
    return (
      <PageLayout>
        <div className="w-full min-h-screen flex items-center justify-center bg-black">
          <div className="animate-pulse bg-zinc-900 rounded-lg w-11/12 max-w-4xl h-64 border border-zinc-800" />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-black pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Terminal Section - Takes 7 cols */}
          <div className="lg:col-span-7 w-full">
            <TerminalHero />
          </div>

          {/* Projects Section - Takes 5 cols */}
          <div className="lg:col-span-5 w-full space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Latest Projects
              </h2>
              <Link
                href={`/${params.locale}/portofolio`}
                className="text-zinc-400 hover:text-green-400 text-xs font-mono transition-colors"
              >
                View All_
              </Link>
            </div>

            <div className="space-y-4">
              {portfolioData.slice(0, 3).map((project, index) => (
                <Link
                  href={project.link !== "Private" ? project.link : "#"}
                  key={index}
                  target={project.link !== "Private" ? "_blank" : "_self"}
                  className="block group bg-[#1e1e1e] border border-zinc-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-900/10"
                >
                  <div className="flex gap-4 p-3">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-zinc-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white text-sm font-semibold truncate group-hover:text-green-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-[10px] mt-1 line-clamp-2 leading-relaxed">
                          {project.description[params.locale] ||
                            project.description.en}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[9px] px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-4 mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-zinc-400 text-xs font-mono">
                  System Status
                </h3>
                <span className="text-[10px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                  ONLINE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-2 rounded border border-zinc-800/50">
                  <div className="text-[10px] text-zinc-500 mb-1">
                    Availability
                  </div>
                  <div className="text-green-400 text-xs font-bold">
                    Open for Work
                  </div>
                </div>
                <div className="bg-black/20 p-2 rounded border border-zinc-800/50">
                  <div className="text-[10px] text-zinc-500 mb-1">Location</div>
                  <div className="text-white text-xs">Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
