import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { CursorSparkleTrail } from "@/components/CursorSparkleTrail";
import "./globals.css";

const panelSans = localFont({
  src: [
    {
      path: "../public/fonts/PanelSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PanelSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-panel-sans",
});

const editorial = localFont({
  src: [
    {
      path: "../public/fonts/AstoriaEditorial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AstoriaEditorial-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  title: "Kammy Nguyen — Lead Product Designer",
  description:
    "I design products and interactive experiences shaped by systems, storytelling, and culture.",
};

/* Light by default; only an explicit saved "dark" preference enables dark mode. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark")}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${panelSans.variable} ${editorial.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {children}
        <CursorSparkleTrail />
      </body>
    </html>
  );
}
