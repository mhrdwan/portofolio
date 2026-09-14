"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Portofolio", href: "/projects" },
    { label: "Tentang", href: "/#about" },
    { label: "Kontak", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-card-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-mono font-black text-sm tracking-tight group-hover:scale-105 transition-transform">
            MR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground flex items-center gap-1.5">
              M. Hasyim Ridwan
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-muted">Full Stack Engineer</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "text-foreground bg-card-border/40 font-semibold"
                    : "text-muted hover:text-foreground hover:bg-card-border/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switcher Button */}
          <ThemeToggle />

          {/* Quick Contact CTA */}
          <a
            href="mailto:mh.ridwan7b@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-card-border bg-card text-foreground"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-card-border bg-background px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-foreground hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:mh.ridwan7b@gmail.com"
            className="block mt-4 py-2.5 px-4 text-center rounded-xl bg-foreground text-background text-sm font-semibold"
          >
            Hubungi: mh.ridwan7b@gmail.com
          </a>
        </div>
      )}
    </header>
  );
}
