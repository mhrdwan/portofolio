import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M. Hasyim Ridwan — Full Stack & Mobile Engineer",
  description: "Portofolio karya M. Hasyim Ridwan — Full Stack Developer (React Native, Next.js, NestJS, Web3)",
};

const themeInlineScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      var isLight = saved ? (saved === 'light') : prefLight;
      var t = isLight ? 'light' : 'dark';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(t);
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInlineScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
