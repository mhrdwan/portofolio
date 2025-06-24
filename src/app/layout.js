import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { headers } from "next/headers";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Mohamad Hasyim Ridwan - Full Stack Developer",
  description:
    "Portfolio website of Mohamad Hasyim Ridwan, Full Stack Developer specializing in React.js, Next.js, React Native and API design.",
  keywords:
    "Full Stack Developer, React, Next.js, React Native, Portfolio, Web Developer, Mohamad Hasyim Ridwan, Indonesia Developer",
  authors: [{ name: "Mohamad Hasyim Ridwan" }],
  creator: "Mohamad Hasyim Ridwan",
  publisher: "Mohamad Hasyim Ridwan",
  metadataBase: new URL("https://mhridwan.com"),
  alternates: {
    canonical: "https://mhridwan.com",
    languages: {
      "id-ID": "https://mhridwan.com",
      "en-US": "https://mhridwan.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mhridwan.com",
    siteName: "Mohamad Hasyim Ridwan Portfolio",
    title: "Mohamad Hasyim Ridwan - Full Stack Developer",
    description:
      "Portfolio website of Mohamad Hasyim Ridwan, Full Stack Developer specializing in React.js, Next.js, React Native and API design.",
    images: [
      {
        url: "https://mhridwan.com/IMG/363815310_9666831353387427_1604163039826260738_n.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamad Hasyim Ridwan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Hasyim Ridwan - Full Stack Developer",
    description:
      "Portfolio website of Mohamad Hasyim Ridwan, Full Stack Developer specializing in React.js, Next.js, React Native and API design.",
    images: [
      "https://mhridwan.com/IMG/363815310_9666831353387427_1604163039826260738_n.jpg",
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  // Get locale from URL pathname
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const locale = pathname.startsWith("/en") ? "en" : "id";

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Enhanced SEO Meta Tags */}
        <meta name="author" content="Mohamad Hasyim Ridwan" />
        <meta
          name="language"
          content={locale === "en" ? "English" : "Indonesian"}
        />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/IMG/363815310_9666831353387427_1604163039826260738_n.jpg"
          as="image"
          type="image/jpeg"
        />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://instagram.com" />

        {/* Icons and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Performance hints */}
        <meta name="theme-color" content="#14b8a6" />
        <meta name="color-scheme" content="light dark" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamad Hasyim Ridwan",
              jobTitle: "Full Stack Developer",
              url: "https://mhridwan.com",
              sameAs: [
                "https://github.com/mhrdwan",
                "https://instagram.com/mhridwan14",
                "https://wa.me/6281221871961",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "React Native",
                "Node.js",
                "Full Stack Development",
                "API Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
