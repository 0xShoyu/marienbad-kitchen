import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Souvenirs from "@/components/Souvenirs";
import Footer from "@/components/Footer";
import { PRODUCT_IMAGES } from "@/data/souvenirs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "捷克國寶級手工水晶銼刀 | 中華園專選 Bohemian Crystal",
  description:
    "來自捷克的純手工藝。鑲嵌施華洛世奇水晶，永久磨砂表面，精美手繪。店內現貨，買十送一優惠中。",
  openGraph: {
    title: "Mariánské Lázně 必買伴手禮 - 手工水晶銼刀",
    description: "捷克職人手繪，優雅工藝送禮首選。點擊查看完整系列及店內優惠。",
    url: "https://www.chinagarden-ml.com/souvenirs",
    images: [
      {
        url: "https://www.chinagarden-ml.com/images/souvenir-share-cover.png",
        width: 1200,
        height: 630,
        alt: "捷克手工水晶銼刀系列",
      },
    ],
    type: "website",
  },
};

export default function SouvenirsPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="pt-32 w-full max-w-7xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-cinnabar transition-colors text-sm font-serif"
        >
          <ArrowLeft size={16} />
          返回主頁 / Back to Home
        </Link>
      </div>
      <div className="w-full">
        <Souvenirs />
      </div>
      <Footer />
    </main>
  );
}
