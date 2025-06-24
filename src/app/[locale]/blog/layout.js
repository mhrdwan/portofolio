import { notFound } from "next/navigation";

// Define locales
const locales = ["id", "en"];

export async function generateMetadata({ params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  // Get current URL path for canonical
  const baseUrl = "https://mhridwan.com";
  const currentPath =
    locale === "id" ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;

  // Metadata based on locale
  const metadata = {
    id: {
      title:
        "Blog - Mohamad Hasyim Ridwan | Artikel Teknologi & Pengembangan Web",
      description:
        "Blog tentang teknologi, pengembangan web, programming tips, dan pengalaman sebagai Full Stack Developer oleh Mohamad Hasyim Ridwan.",
      keywords:
        "Blog, Teknologi, Web Development, Programming, React.js, Next.js, Tips Developer, Mohamad Hasyim Ridwan",
      ogTitle: "Blog - Mohamad Hasyim Ridwan",
      ogDescription:
        "Baca artikel tentang teknologi dan pengembangan web terbaru",
    },
    en: {
      title:
        "Blog - Mohamad Hasyim Ridwan | Technology & Web Development Articles",
      description:
        "Blog about technology, web development, programming tips, and experiences as a Full Stack Developer by Mohamad Hasyim Ridwan.",
      keywords:
        "Blog, Technology, Web Development, Programming, React.js, Next.js, Developer Tips, Mohamad Hasyim Ridwan",
      ogTitle: "Blog - Mohamad Hasyim Ridwan",
      ogDescription:
        "Read articles about latest technology and web development",
    },
  };

  const currentMeta = metadata[locale];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
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
    alternates: {
      canonical: currentPath,
      languages: {
        "en-US": `${baseUrl}/en/blog`,
        "id-ID": `${baseUrl}/blog`,
        "x-default": `${baseUrl}/blog`,
      },
    },
  };
}

export default function BlogLayout({ children }) {
  return children;
}
