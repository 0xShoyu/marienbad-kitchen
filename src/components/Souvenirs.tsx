"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ShoppingBag } from "lucide-react";

// 定义图片数据
const PRODUCT_IMAGES = [
  {
    id: 1,
    src: "/images/souvenir-1.png",
    alt: "經典手繪系列 - 紅粉佳人",
    label: "熱銷款式",
  },
  {
    id: 2,
    src: "/images/souvenir-2.png",
    alt: "施華洛世奇水鑽系列 - 繽紛漸變",
    label: "新款推薦",
  },
  {
    id: 3,
    src: "/images/souvenir-3.png",
    alt: "波西米亞水晶系列 - 經典長款",
    label: "經典長款",
  },
];

export default function Souvenirs() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className="w-full max-w-6xl px-4 py-16 mx-auto">
      {/* 顶部标题 */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="text-cinnabar w-5 h-5" />
          <span className="text-sm font-serif tracking-[0.2em] text-stone-500 uppercase">
            Special Gift from Czech
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-4">
          捷克國寶 · 水晶銼刀
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cinnabar to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white/50 p-6 md:p-10 rounded-sm border border-stone-200 shadow-xl">
        {/* 左侧：交互式图片画廊 */}
        <div className="space-y-4">
          {/* 大图展示区 */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-white border border-stone-100 rounded-sm overflow-hidden shadow-inner group">
            <Image
              src={PRODUCT_IMAGES[activeImageIndex].src}
              alt={PRODUCT_IMAGES[activeImageIndex].alt}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            {/* 标签 */}
            <div className="absolute top-4 left-4 bg-cinnabar text-white text-xs px-3 py-1 rounded-full shadow-md tracking-wider">
              {PRODUCT_IMAGES[activeImageIndex].label}
            </div>
          </div>

          {/* 缩略图列表 */}
          <div className="grid grid-cols-3 gap-4">
            {PRODUCT_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-square border-2 rounded-sm overflow-hidden transition-all duration-300 ${
                  activeImageIndex === idx
                    ? "border-cinnabar ring-2 ring-cinnabar/20 scale-95"
                    : "border-transparent hover:border-stone-300 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 右侧：产品介绍 */}
        <div className="space-y-8 flex flex-col justify-center h-full">
          <div>
            <h3 className="text-2xl font-serif text-ink font-bold mb-2">
              波西米亞玻璃工藝
            </h3>
            <p className="text-stone-500 text-sm uppercase tracking-wider mb-4">
              Bohemian Crystal Glass File
            </p>
            <p className="text-stone-600 leading-relaxed font-sans text-justify">
              捷克玻璃工藝聞名世界，這款水晶銼刀採用
              <strong>獨家強化玻璃技術</strong>製成。
              表面細膩均勻，修甲時不會像傳統金屬銼刀那樣傷害指甲邊緣，能有效防止指甲分層與斷裂。
              每支銼刀皆由當地工匠手工繪製與鑲嵌，是您來到瑪麗亞溫泉市不可錯過的伴手禮。
            </p>
          </div>

          {/* 卖点列表 */}
          <ul className="space-y-4">
            <FeatureItem
              title="永久耐用 (Durable)"
              desc="強化玻璃材質，磨砂面永不磨損，一支可用一輩子。"
            />
            <FeatureItem
              title="衛生抗菌 (Hygienic)"
              desc="無孔玻璃表面，不藏污納垢，水洗即淨，防止細菌滋生。"
            />
            <FeatureItem
              title="送禮首選 (Perfect Gift)"
              desc="精美手繪花紋配以水鑽裝飾，優雅實用，送給女性親友的最佳禮物。"
            />
          </ul>

          {/* 购买提示 */}
          <div className="mt-4 pt-6 border-t border-dashed border-stone-300 flex items-center gap-4">
            <div className="w-12 h-12 bg-cinnabar/10 rounded-full flex items-center justify-center text-cinnabar">
              <ShoppingBag size={24} />
            </div>
            <div>
              <p className="text-ink font-bold font-serif text-lg">
                店內現貨供應 · 歡迎選購
              </p>
              <p className="text-xs text-stone-500">
                Available for purchase at the counter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 内部小组件：卖点列表项
function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="mt-1 shrink-0">
        <CheckCircle2 className="text-green-700 w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-ink text-sm md:text-base">{title}</h4>
        <p className="text-xs md:text-sm text-stone-600 mt-1 opacity-90">
          {desc}
        </p>
      </div>
    </li>
  );
}
