"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let initial: "light" | "dark" = "dark";
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        initial = saved;
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        initial = "light";
      }
    } catch (e) {}

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(initial);
    root.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  const handleToggle = () => {
    const root = document.documentElement;
    const isLight = root.classList.contains("light") || root.getAttribute("data-theme") === "light";
    const nextTheme: "light" | "dark" = isLight ? "dark" : "light";

    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    root.setAttribute("data-theme", nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (err) {}

    setTheme(nextTheme);
  };

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={handleToggle}
      className="p-2 rounded-xl border border-card-border bg-card text-foreground hover:bg-card-border/40 transition-all cursor-pointer relative group"
      aria-label="Toggle light/dark theme"
      title={mounted && theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {mounted && theme === "dark" ? (
        <Sun size={17} className="text-amber-400 group-hover:rotate-45 transition-transform pointer-events-none" />
      ) : (
        <Moon size={17} className="text-blue-600 group-hover:-rotate-12 transition-transform pointer-events-none" />
      )}
    </button>
  );
}
