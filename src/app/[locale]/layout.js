import { notFound } from "next/navigation";

// Define locales
const locales = ["id", "en"];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  // Get current URL path for canonical
  const baseUrl = "https://mhridwan.com";
  const currentPath = locale === "id" ? baseUrl : `${baseUrl}/${locale}`;

  // Metadata based on locale
  const metadata = {
    id: {
      title: "Mohamad Hasyim Ridwan - Portofolio Pengembang Full Stack",
      description:
        "Portofolio Mohamad Hasyim Ridwan - Pengembang Full Stack yang terampil dengan keahlian di React, Next.js, dan teknologi web modern",
      keywords:
        "Pengembang Full Stack, Pengembangan Web, React, Next.js, Node.js, Portofolio, Web Developer, Indonesia, Teknologi Informasi, Mohamad Hasyim Ridwan",
      ogTitle: "Mohamad Hasyim Ridwan - Pengembang Full Stack",
      ogDescription:
        "Portofolio profesional menampilkan proyek pengembangan web dan keterampilan teknologi modern",
    },
    en: {
      title: "Mohamad Hasyim Ridwan - Full Stack Developer Portfolio",
      description:
        "Portfolio of Mohamad Hasyim Ridwan - Skilled Full Stack Developer with expertise in React, Next.js, and modern web technologies",
      keywords:
        "Full Stack Developer, Web Development, React, Next.js, Node.js, Portfolio, Web Developer, Indonesia, Information Technology, Mohamad Hasyim Ridwan",
      ogTitle: "Mohamad Hasyim Ridwan - Full Stack Developer",
      ogDescription:
        "Professional portfolio showcasing web development projects and modern technology skills",
    },
  };

  const currentMeta = metadata[locale];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    applicationName: "Portofolio Mohamad Hasyim Ridwan",
    generator: "Next.js",
    keywords: currentMeta.keywords,
    referrer: "origin-when-cross-origin",
    robots: "index, follow",
    googlebot:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
    alternates: {
      canonical: currentPath,
      languages: {
        "en-US": `${baseUrl}/en`,
        "id-ID": baseUrl,
        "x-default": baseUrl,
      },
    },
    openGraph: {
      title: currentMeta.ogTitle,
      description: currentMeta.ogDescription,
      url: currentPath,
      siteName: "Portofolio Mohamad Hasyim Ridwan",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: {
        url: `${baseUrl}/IMG/363815310_9666831353387427_1604163039826260738_n.jpg`,
        width: 1200,
        height: 630,
        alt: currentMeta.ogTitle,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: currentMeta.ogTitle,
      description: currentMeta.ogDescription,
      images: `${baseUrl}/IMG/363815310_9666831353387427_1604163039826260738_n.jpg`,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return children;
}
