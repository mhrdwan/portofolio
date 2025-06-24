"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Translation data
const translations = {
  id: {
    nav: {
      about: "Tentang",
      portfolio: "Portofolio",
      blog: "Blog",
      menu: "Menu",
      navigation: "Navigasi",
    },
    profile: {
      greeting: "Hi! Saya",
      name: "Mohamad Hasyim Ridwan",
      role: "Full Stack Developer",
      email: "mh.ridwan7b@gmail.com",
      phone: "+62 (812) 21871961",
      hireMe: "Rekrut Saya!",
      downloadCV: "Unduh CV",
    },
    home: {
      title:
        "Berbagai hal yang telah saya buat untuk meninggalkan jejak di dunia programming.",
      subtitle:
        "Saya telah belajar dan bekerja pada beberapa proyek selama {months} bulan terhitung sampai portofolio ini di update tanggal {date}, daftar-daftar ini yang ingin saya tampilkan.",
      buildWith: "Dibuat dengan ❤️ oleh Mohamad Hasyim Ridwan",
    },
    portfolio: {
      title:
        "Berbagai hal yang telah saya buat untuk meninggalkan jejak di dunia programming.",
      subtitle:
        "Saya telah belajar dan bekerja pada beberapa proyek selama {months} bulan terhitung sampai portofolio ini di update tanggal {date}, daftar-daftar ini yang ingin saya tampilkan.",
      categories: {
        all: "Semua",
      },
      visitProject: "Kunjungi Project",
      private: "Private",
      video: "VIDEO",
      description: "Deskripsi",
      technology: "Teknologi",
      features: "Fitur",
      noDescription: "Tidak ada deskripsi tersedia",
    },
    blog: {
      title: "Blog",
      subtitle: "Artikel dan tulisan tentang pengalaman development",
      comingSoon: "Segera hadir...",
      description:
        "Halaman blog sedang dalam pengembangan. Akan segera diisi dengan artikel-artikel menarik tentang pengalaman pengembangan software, tips & tricks, dan insight teknologi terbaru.",
    },
    theme: {
      light: "Terang",
      dark: "Gelap",
    },
    language: {
      switchTo: "Ganti ke",
      indonesian: "Bahasa Indonesia",
      english: "English",
    },
    404: {
      title: "404 - Halaman Tidak Ditemukan",
      subtitle: "Oops! Halaman yang Anda cari tidak ditemukan.",
      description:
        "Halaman yang Anda coba akses mungkin telah dipindahkan, dihapus, atau tidak pernah ada. Silakan periksa URL atau kembali ke halaman utama.",
      backToHome: "Kembali ke Beranda",
      orVisit: "Atau kunjungi:",
      aboutPage: "Halaman Tentang",
      portfolioPage: "Halaman Portofolio",
    },
  },
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      blog: "Blog",
      menu: "Menu",
      navigation: "Navigation",
    },
    profile: {
      greeting: "Hi! I'm",
      name: "Mohamad Hasyim Ridwan",
      role: "Full Stack Developer",
      email: "mh.ridwan7b@gmail.com",
      phone: "+62 (812) 21871961",
      hireMe: "Hire Me!",
      downloadCV: "Download CV",
    },
    home: {
      title:
        "Various things I have created to leave a mark in the programming world.",
      subtitle:
        "I have been learning and working on several projects for {months} months as of this portfolio update on {date}, these are the lists I want to showcase.",
      buildWith: "Built with ❤️ by Mohamad Hasyim Ridwan",
    },
    portfolio: {
      title:
        "Various things I have created to leave a mark in the programming world.",
      subtitle:
        "I have been learning and working on several projects for {months} months as of this portfolio update on {date}, these are the lists I want to showcase.",
      categories: {
        all: "All",
      },
      visitProject: "Visit Project",
      private: "Private",
      video: "VIDEO",
      description: "Description",
      technology: "Technology",
      features: "Features",
      noDescription: "No description available",
    },
    blog: {
      title: "Blog",
      subtitle: "Articles and writings about development experience",
      comingSoon: "Coming soon...",
      description:
        "The blog page is currently under development. Will be filled with interesting articles about software development experience, tips & tricks, and latest technology insights.",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    language: {
      switchTo: "Switch to",
      indonesian: "Bahasa Indonesia",
      english: "English",
    },
    404: {
      title: "404 - Page Not Found",
      subtitle: "Oops! The page you're looking for doesn't exist.",
      description:
        "The page you're trying to access may have been moved, deleted, or never existed. Please check the URL or return to the homepage.",
      backToHome: "Back to Home",
      orVisit: "Or visit:",
      aboutPage: "About Page",
      portfolioPage: "Portfolio Page",
    },
  },
};

// Helper function to get nested object values
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((current, key) => current && current[key], obj);
};

// Helper function to interpolate values
const interpolate = (text, values = {}) => {
  if (!text || typeof text !== "string") return text;

  return text.replace(/\{([^}]+)\}/g, (match, key) => {
    return values[key] !== undefined ? values[key] : match;
  });
};

export const useTranslation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Extract locale from pathname
  const locale = pathname.startsWith("/en") ? "en" : "id";

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = (key, values = {}) => {
    if (!mounted) return key; // Return key if not mounted yet

    const translation = getNestedValue(translations[locale], key);
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in locale: ${locale}`);
      return key;
    }

    return interpolate(translation, values);
  };

  const changeLanguage = (newLocale) => {
    // Extract current path without locale
    const currentPath = pathname.replace(/^\/(id|en)/, "") || "";

    // Navigate to new locale path
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  return {
    t,
    locale,
    changeLanguage,
    mounted,
  };
};
