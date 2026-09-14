"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Terminal as TermIcon, 
  Sparkles, 
  ArrowRight, 
  Globe, 
  Code2, 
  Smartphone, 
  Layers, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowUpRight,
  FileCode,
  Zap,
  Play
} from "lucide-react";
import confetti from "canvas-confetti";
import Link from "next/link";
import Navbar from "./components/Navbar";
import PortfolioCarousel from "./components/PortfolioCarousel";
import { portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Terminal & Code Inspector state
  const [activeTab, setActiveTab] = useState<"cli" | "profile" | "skills">("cli");
  const [terminalInput, setTerminalInput] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "mhridwan@engineer:~$ init system --verbose",
    "Loading developer profile... [OK]",
    "Connecting stack: React Native, NestJS, Next.js, Web3... [OK]",
    "Ketik 'help' untuk daftar perintah interaktif."
  ]);

  // Terminal command handler
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    let response = "";

    switch (cmd) {
      case "help":
        response = "Perintah: about, projects, skills, contact, secret, clear";
        break;
      case "about":
        response = "Mohamad Hasyim Ridwan — Full Stack & Mobile Engineer. Spesialisasi: React Native, NestJS, Next.js, Web3 & Automation.";
        break;
      case "projects":
        response = `Total ${portfolioData.length} project. Top: Campos Law Firm (React Native/NestJS), Web3 Donation, JajaPay.`;
        break;
      case "skills":
        response = "Core: TypeScript, React Native, Next.js, NestJS, PostgreSQL, Web3/Solidity, Docker.";
        break;
      case "contact":
        response = "Email: mh.ridwan7b@gmail.com | WhatsApp: +62 812-2187-1961";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      case "secret":
        response = "🎉 Easter Egg activated! Menuju 17 Agustus 2026! 💍✨";
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        break;
      default:
        response = `Perintah '${cmd}' tidak ditemukan. Ketik 'help' untuk panduan.`;
    }

    setTerminalLogs((prev) => [...prev, `mhridwan@engineer:~$ ${terminalInput}`, response]);
    setTerminalInput("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mh.ridwan7b@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const triggerCelebrate = () => {
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  // GSAP animations with native smooth scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.from(".tech-badge", {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const topProjects = portfolioData.slice(0, 3);

  const skillGroups = [
    {
      title: "Mobile & Frontend",
      icon: Smartphone,
      skills: ["React Native (Expo / CLI)", "Next.js (App Router)", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Flutter"]
    },
    {
      title: "Backend & Systems",
      icon: Cpu,
      skills: ["NestJS", "Express.js", "Node.js", "RESTful API", "GraphQL", "Microservices", "WebSockets / Socket.io", "Authentication (JWT/OAuth)"]
    },
    {
      title: "Database & Cloud DevOps",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "Docker & Compose", "Linux Server (Ubuntu)", "CI/CD & Nginx"]
    },
    {
      title: "Web3 & Automation",
      icon: ShieldCheck,
      skills: ["Solidity & Smart Contracts", "Ethers.js / Web3.js", "WhatsApp Bot (Baileys)", "Puppeteer Web Scraping", "Python Scripting", "IoT & DVR RTSP"]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background relative font-sans">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Navbar />

      <main className="pt-28 pb-24 px-6 max-w-7xl mx-auto relative z-10 space-y-28 md:space-y-36">
        {/* HERO SECTION */}
        <section className="pt-6 md:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tersedia untuk Proyek Baru & Kolaborasi</span>
            </div>

            <div className="space-y-3 hero-fade">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                Membangun Ekosistem Digital <span className="text-blue-600 dark:text-blue-400">Cepat &amp; Terukur.</span>
              </h1>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
                Halo, saya <span className="font-semibold text-foreground">Mohamad Hasyim Ridwan</span>. Software engineer berpengalaman dalam merekayasa aplikasi mobile (React Native), web platform full-stack modern (Next.js & NestJS), serta solusi Web3 & automasi.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="hero-fade flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="px-5 py-3 rounded-xl bg-foreground text-background text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg"
              >
                <span>Jelajahi Semua Portofolio ({portfolioData.length})</span>
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={copyEmail}
                className="px-5 py-3 rounded-xl border border-card-border bg-card text-foreground text-sm font-medium flex items-center gap-2 hover:bg-card-border/30 transition-all cursor-pointer"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Email Berhasil Disalin!" : "Salin Email"}</span>
              </button>
            </div>

            {/* Stats Counter Row */}
            <div className="hero-fade grid grid-cols-3 gap-4 pt-6 border-t border-card-border/60">
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">{portfolioData.length}+</p>
                <p className="text-xs text-muted font-mono mt-0.5">Project Selesai</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">5+ Tahun</p>
                <p className="text-xs text-muted font-mono mt-0.5">Pengalaman Coding</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">100%</p>
                <p className="text-xs text-muted font-mono mt-0.5">Komitmen Kualitas</p>
              </div>
            </div>
          </div>

          {/* Interactive Terminal / Code Inspector Box */}
          <div className="lg:col-span-5 hero-fade">
            <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl transition-all">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-card-border/30 border-b border-card-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-muted font-medium">terminal@mhridwan ~ zsh</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("cli")}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "cli" ? "bg-background text-foreground font-semibold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    bash
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "profile" ? "bg-background text-foreground font-semibold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("skills")}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === "skills" ? "bg-background text-foreground font-semibold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    stack.json
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 h-[320px] overflow-y-auto font-mono text-xs leading-relaxed">
                {activeTab === "cli" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="space-y-1.5 overflow-y-auto">
                      {terminalLogs.map((log, index) => (
                        <div key={index} className={log.startsWith("mhridwan") ? "text-blue-500 font-semibold" : "text-muted"}>
                          {log}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-card-border/50">
                      <span className="text-emerald-500 font-bold">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Ketik 'about', 'skills', 'projects', 'help'..."
                        className="flex-1 bg-transparent text-foreground placeholder:text-muted/60 focus:outline-none text-xs"
                      />
                    </form>
                  </div>
                )}

                {activeTab === "profile" && (
                  <pre className="text-muted">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;{"\n"}
                    {"  "}name: <span className="text-emerald-400">&apos;M. Hasyim Ridwan&apos;</span>,{"\n"}
                    {"  "}role: <span className="text-emerald-400">&apos;Full Stack & Mobile Engineer&apos;</span>,{"\n"}
                    {"  "}location: <span className="text-emerald-400">&apos;Indonesia (WIB)&apos;</span>,{"\n"}
                    {"  "}coreFocus: [&#39;React Native&#39;, &#39;NestJS&#39;, &#39;Next.js&#39;, &#39;Web3&#39;],{"\n"}
                    {"  "}status: <span className="text-emerald-400">&apos;Ready for new challenges&apos;</span>,{"\n"}
                    {"  "}motto: <span className="text-amber-400">&apos;Clean code, robust architecture, impactful results.&apos;</span>{"\n"}
                    &#125;;
                  </pre>
                )}

                {activeTab === "skills" && (
                  <pre className="text-muted">
                    &#123;{"\n"}
                    {"  "}&quot;mobile&quot;: [&quot;React Native&quot;, &quot;Expo&quot;, &quot;Flutter&quot;],{"\n"}
                    {"  "}&quot;frontend&quot;: [&quot;Next.js 15+&quot;, &quot;React 19&quot;, &quot;Tailwind CSS v4&quot;],{"\n"}
                    {"  "}&quot;backend&quot;: [&quot;NestJS&quot;, &quot;Node.js&quot;, &quot;Express&quot;, &quot;Prisma&quot;],{"\n"}
                    {"  "}&quot;database&quot;: [&quot;PostgreSQL&quot;, &quot;MySQL&quot;, &quot;MongoDB&quot;, &quot;Redis&quot;],{"\n"}
                    {"  "}&quot;web3&quot;: [&quot;Solidity&quot;, &quot;Ethers.js&quot;, &quot;Hardhat&quot;]{"\n"}
                    &#125;
                  </pre>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED CAROUSEL SECTION */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-card-border bg-card text-xs font-mono text-muted mb-2">
                <Sparkles size={13} className="text-amber-400" />
                <span>Showcase Unggulan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Proyek &amp; Karya Terpilih</h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors self-start sm:self-auto"
            >
              <span>Lihat semua {portfolioData.length} project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <PortfolioCarousel />
        </section>

        {/* TOP PROJECTS CARDS GRID */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Highlight Studi Kasus</h2>
            <p className="text-muted text-sm max-w-xl">
              Beberapa rekayasa sistem yang menonjol dari segi arsitektur, kompleksitas, dan dampak bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProjects.map((p, idx) => (
              <div
                key={idx}
                className="group bg-card border border-card-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-muted hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-background border-b border-card-border overflow-hidden">
                  <img
                    src={p.images[0] || "/placeholder.png"}
                    alt={p.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {p.categories.map((c, i) => (
                      <span key={i} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-background/90 text-foreground border border-card-border">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-foreground group-hover:text-blue-500 transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3">
                      {p.description.id}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-card-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background border border-card-border text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${encodeURIComponent(p.title)}`}
                      className="text-xs font-semibold text-foreground hover:text-blue-500 flex items-center justify-between pt-1 group/btn"
                    >
                      <span>Pelajari Studi Kasus</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & ARCHITECTURE SECTION */}
        <section id="skills" className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-card-border bg-card text-xs font-mono text-muted mb-1">
              <Layers size={13} className="text-blue-500" />
              <span>Kompetensi Teknis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Stack Teknologi &amp; Arsitektur</h2>
            <p className="text-muted text-sm max-w-xl">
              Alat dan bahasa yang saya gunakan sehari-hari untuk merancang solusi software yang cepat, scalable, dan maintainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((grp, i) => {
              const IconComp = grp.icon;
              return (
                <div key={i} className="bg-card border border-card-border rounded-2xl p-6 space-y-4 hover:border-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-background border border-card-border text-blue-500">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{grp.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {grp.skills.map((s, j) => (
                      <span
                        key={j}
                        className="tech-badge px-3 py-1.5 rounded-lg bg-background border border-card-border text-xs font-mono text-foreground hover:border-blue-500/60 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT & CONTACT SECTION */}
        <section id="contact" className="bg-card border border-card-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="text-xs font-mono text-blue-500 font-semibold uppercase tracking-wider">Ayo Berdiskusi</span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              Punya Ide Project atau Ingin Berkolaborasi?
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan peluang proyek baru, arsitektur software, atau kerja sama jangka panjang. Mari hubungi saya langsung.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:mh.ridwan7b@gmail.com"
                className="px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-md"
              >
                <Mail size={16} />
                <span>Kirim Email</span>
              </a>

              <a
                href="https://wa.me/6281221871961"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-card-border bg-background text-foreground text-sm font-semibold flex items-center gap-2 hover:bg-card-border/30 transition-all"
              >
                <Phone size={16} />
                <span>WhatsApp Langsung</span>
              </a>

              <button
                onClick={triggerCelebrate}
                className="px-4 py-3 rounded-xl border border-card-border bg-background text-muted hover:text-foreground text-sm flex items-center gap-2 hover:bg-card-border/30 transition-all cursor-pointer"
                title="Rayakan!"
              >
                <Sparkles size={16} className="text-amber-400" />
                <span>Rayakan</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border py-8 px-6 text-center text-xs font-mono text-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} M. Hasyim Ridwan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js &amp; Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
