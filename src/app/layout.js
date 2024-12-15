import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Head from "next/head";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Mohamad Hasyim Ridwan - Portofolio Pengembang Full Stack",
  description:
    "Portofolio Mohamad Hasyim Ridwan - Pengembang Full Stack yang terampil dengan keahlian di React, Next.js, dan teknologi web modern",
  keywords:
    "Pengembang Full Stack, Pengembangan Web, React, Next.js, Node.js, Portofolio",
  author: "Mohamad Hasyim Ridwan",
  openGraph: {
    title: "Mohamad Hasyim Ridwan - Pengembang Full Stack",
    description:
      "Portofolio profesional menampilkan proyek pengembangan web dan keterampilan",
    url: "https://www.mhridwan.com/", 
    siteName: "Portofolio Mohamad Hasyim Ridwan",
    images: [
      {
        url: "/363815310_9666831353387427_1604163039826260738_n.jpg",
        width: 1440,
        height: 530,
        alt: "Mohamad Hasyim Ridwan - Portofolio Pengembang Full Stack",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
