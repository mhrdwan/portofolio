"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGoogle,
  FaDigitalOcean,
  FaGithub,
  FaUsers,
  FaStar,
  FaCodeBranch,
  FaCalendarAlt,
  FaTools,
  FaProjectDiagram,
  FaEye,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaMobile,
  FaCode,
  FaCloud,
  FaPlug,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiMicrosoftazure,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiDart,
  SiCheerio,
  SiWhatsapp,
  SiReact,
} from "react-icons/si";
import { useTranslation } from "../hooks/useTranslation";
import PageTransition from "./PageTransition";
import { portfolioData } from "../[locale]/portofolio/dataporto";

// Translations
const aboutTranslations = {
  id: {
    about: "Tentang Saya",
    intro:
      "Full Stack Developer dengan keahlian teknis dan kreativitas inovatif. Berpengalaman dalam pengembangan web dan mobile dengan fokus pada solusi teknologi yang efisien dan modern.",
    githubStats: "GitHub Stats",
    mySkills: "Keahlian Saya",
    experience: "Tahun Pengalaman",
    tools: "Tools & Framework",
    projects: "Project Selesai",
    visitors: "Website Visitors",
  },
  en: {
    about: "About Me",
    intro:
      "Full Stack Developer with technical expertise and innovative creativity. Experienced in web and mobile development with focus on efficient and modern technology solutions.",
    githubStats: "GitHub Stats",
    mySkills: "My Skills",
    experience: "Years Experience",
    tools: "Tools & Frameworks",
    projects: "Projects Delivered",
    visitors: "Website Visitors",
  },
};

// Icon mapping for technologies
const techIconMap = {
  "React JS": { icon: FaReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  TailWind: { icon: SiTailwindcss, color: "#06B6D4" },
  Dart: { icon: SiDart, color: "#0175C2" },
  "WhatsApp API": { icon: SiWhatsapp, color: "#25D366" },
  "Weather API": { icon: FaCloud, color: "#87CEEB" },
  "TikTok API": { icon: FaPlug, color: "#FF0050" },
  "Web Scraping": { icon: FaCode, color: "#FFA500" },
  Cheerio: { icon: SiCheerio, color: "#F7931E" },
  API: { icon: FaPlug, color: "#FF6B6B" },
  CLI: { icon: FaServer, color: "#4CAF50" },
  Animation: { icon: FaMobile, color: "#9C27B0" },
  "Video Demo": { icon: FaMobile, color: "#E91E63" },
};

// Extract unique technologies from portfolio data
const extractTechnologies = () => {
  const allTechs = portfolioData.flatMap(
    (project) => project.technologies || []
  );
  const uniqueTechs = [...new Set(allTechs)];

  return uniqueTechs
    .filter((tech) => tech !== "Video Demo") // Filter out non-technical items
    .map((tech) => ({
      name: tech,
      icon: techIconMap[tech]?.icon || FaCode,
      color: techIconMap[tech]?.color || "#64748B",
    }));
};

// Get skills data from portfolio
const skillsData = extractTechnologies();

function IsiAbout() {
  const { locale } = useTranslation();

  const aboutT = (key) => {
    return aboutTranslations[locale]?.[key] || key;
  };

  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#14b8a6]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8">
        {/* About Me Section */}
        <div className="mb-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#14b8a6] to-white bg-clip-text text-transparent">
                {aboutT("about")}
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#14b8a6] to-white rounded-full mx-auto" />
          </div>

          {/* About Text */}
          <p className="text-zinc-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
            {aboutT("intro")}
          </p>

          {/* Simple Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <FaCalendarAlt className="w-6 h-6 mx-auto mb-2 text-[#14b8a6]" />
              <div className="text-xl font-bold text-white mb-1">3+</div>
              <div className="text-xs text-zinc-300 font-medium">
                {aboutT("experience")}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <FaTools className="w-6 h-6 mx-auto mb-2 text-[#14b8a6]" />
              <div className="text-xl font-bold text-white mb-1">
                {skillsData.length}+
              </div>
              <div className="text-xs text-zinc-300 font-medium">
                {aboutT("tools")}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <FaProjectDiagram className="w-6 h-6 mx-auto mb-2 text-[#14b8a6]" />
              <div className="text-xl font-bold text-white mb-1">
                {portfolioData.length}+
              </div>
              <div className="text-xs text-zinc-300 font-medium">
                {aboutT("projects")}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <FaEye className="w-6 h-6 mx-auto mb-2 text-[#14b8a6]" />
              <div className="text-xl font-bold text-white mb-1">1200+</div>
              <div className="text-xs text-zinc-300 font-medium">
                {aboutT("visitors")}
              </div>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#14b8a6] to-white bg-clip-text text-transparent">
                {aboutT("githubStats")}
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <FaGithub className="text-2xl text-[#14b8a6] mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1 text-white">75</div>
                <div className="text-sm text-gray-400">Repositories</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <FaUsers className="text-2xl text-[#14b8a6] mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1 text-white">109</div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <FaStar className="text-2xl text-[#14b8a6] mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1 text-white">50</div>
                <div className="text-sm text-gray-400">Stars</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6 pb-8">
          {/* Skills Header */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#14b8a6] to-white bg-clip-text text-transparent">
                {aboutT("mySkills")}
              </span>
            </h2>
          </div>

          {/* Infinite Running Text Skills */}
          <div className="relative overflow-hidden py-4">
            {/* First Row - Moving Right to Left */}
            <motion.div
              className="flex gap-4 mb-6 whitespace-nowrap"
              animate={{
                x: [0, -100 * skillsData.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: skillsData.length * 2,
                  ease: "linear",
                },
              }}
            >
              {/* Triple the skills for seamless infinite scroll */}
              {[...skillsData, ...skillsData, ...skillsData].map(
                (skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={`row1-${skill.name}-${index}`}
                      className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 lg:p-4 flex items-center gap-2 lg:gap-3 min-w-[140px] lg:min-w-[180px] group hover:bg-white/20 transition-all duration-300"
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-4 h-4 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                          style={{ color: skill.color }}
                        />
                      )}
                      <span className="text-zinc-300 font-medium whitespace-nowrap text-sm lg:text-base">
                        {skill.name}
                      </span>
                    </div>
                  );
                }
              )}
            </motion.div>

            {/* Second Row - Moving Left to Right
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{
                x: [-100 * skillsData.length, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: skillsData.length * 2.5,
                  ease: "linear",
                },
              }}
            >
              {/* Triple the skills in reverse order for seamless infinite scroll */}
            {/* {[...skillsData, ...skillsData, ...skillsData]
                .reverse()
                .map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={`row2-${skill.name}-${index}`}
                      className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 lg:p-4 flex items-center gap-2 lg:gap-3 min-w-[140px] lg:min-w-[180px] group hover:bg-white/15 transition-all duration-300"
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-4 h-4 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                          style={{ color: skill.color }}
                        />
                      )}
                      <span className="text-zinc-300 font-medium whitespace-nowrap text-sm lg:text-base">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
            </motion.div> */}

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-20 bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-20 bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsiAbout;
