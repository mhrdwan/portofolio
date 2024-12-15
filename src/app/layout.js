import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Mohamad Hasyim Ridwan - Full Stack Developer Portfolio",
  description:
    "Portfolio of Mohamad Hasyim Ridwan - Skilled Full Stack Developer specializing in React, Next.js, and modern web technologies",
  keywords:
    "Full Stack Developer, Web Development, React, Next.js, Node.js, Portfolio",
  author: "Mohamad Hasyim Ridwan",
  openGraph: {
    title: "Mohamad Hasyim Ridwan - Full Stack Developer",
    description:
      "Professional portfolio showcasing web development projects and skills",
    images: [{ url: "/363815310_9666831353387427_1604163039826260738_n.jpg" }],
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
