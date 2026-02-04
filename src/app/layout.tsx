import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

// Traditional Chinese Serif for Headlines/Poem (The "Soul")
const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-tc",
  display: "swap",
  preload: false,
});

// Modern Sans for Body Text (The "Function")
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "中華園餐廳 | Marienbad Chinese Kitchen",
  description:
    "Reservation-Only Private Kitchen in Mariánské Lázně. 寒夜客來茶當酒.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body
        className={`${notoSerifTC.variable} ${notoSansTC.variable} bg-paper text-ink font-sans antialiased`}
      >
        {/* Paper Grain Overlay: Adds a subtle texture over the whole site */}
        <div className="fixed inset-0 pointer-events-none opacity-40 bg-paper-texture z-50 mix-blend-multiply" />
        {children}
      </body>
      <GoogleAnalytics gaId="G-JQ0MKWC5F2" />
    </html>
  );
}
