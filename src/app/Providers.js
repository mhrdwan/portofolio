"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import ClientWrapper from "./components/ClientWrapper";

export default function Providers({ children }) {
  const [mountee, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark mode on load
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  if (!mountee) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      <ClientWrapper>{children}</ClientWrapper>
    </ThemeProvider>
  );
}
