import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Head from "next/head";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL('https://www.mhridwan.com/'),
  title: "Mohamad Hasyim Ridwan - Portofolio Pengembang Full Stack",
  description:
    "Portofolio Mohamad Hasyim Ridwan - Pengembang Full Stack yang terampil dengan keahlian di React, Next.js, dan teknologi web modern",
  keywords:
    "Pengembang Full Stack, Pengembangan Web, React, Next.js, Node.js, Portofolio, Web Developer, Indonesia, Teknologi Informasi",
  author: "Mohamad Hasyim Ridwan",
  generator: "Next.js",
  applicationName: "Portofolio Mohamad Hasyim Ridwan",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-site-verification-code', // Optional
  //   yandex: 'your-yandex-verification-code', // Optional
  // },
  openGraph: {
    title: "Mohamad Hasyim Ridwan - Pengembang Full Stack",
    description:
      "Portofolio profesional menampilkan proyek pengembangan web dan keterampilan",
    url: "https://www.mhridwan.com/", 
    siteName: "Portofolio Mohamad Hasyim Ridwan",
    images: [
      {
        url: "https://www.mhridwan.com/IMG/292363140_7641600222577227_6588402848332977786_n.jpg",
        width: 1440,
        height: 530,
        alt: "Mohamad Hasyim Ridwan - Portofolio Pengembang Full Stack",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mohamad Hasyim Ridwan - Portofolio Pengembang Full Stack",
    description: "Portofolio profesional menampilkan proyek pengembangan web dan keterampilan",
    images: ["https://www.mhridwan.com/IMG/292363140_7641600222577227_6588402848332977786_n.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: 'https://www.mhridwan.com/',
    languages: {
      'en-US': 'https://www.mhridwan.com/en',
      'id-ID': 'https://www.mhridwan.com/',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}