"use client";

import React, { useState } from "react";
import { PRODUCT_IMAGES } from "@/data/souvenirs";
import ImageMagnifier from "./ImageMagnifier";
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag, CheckCircle2 } from "lucide-react";

export default function Souvenirs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? PRODUCT_IMAGES.length - 1 : prev - 1));

  return (
    <section id="souvenirs" className="w-full max-w-7xl px-4 py-12 md:py-24 mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* --- 介紹區 (Desktop Order 2) --- */}
        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cinnabar">
              <Sparkles size={18} />
              <span className="text-xs font-serif tracking-[0.3em] uppercase font-bold">
                Bohemian Glass Art
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
              捷克國寶級<br />
              <span className="text-cinnabar">水晶玻璃銼刀</span>
            </h2>
            <p className="text-stone-500 text-lg font-sans">
              手工精製 · 永久耐用 · 極致衛生
            </p>
          </div>

          <p className="text-stone-600 leading-relaxed text-base md:text-lg border-l-2 border-stone-200 pl-6">
            捷克瑪麗亞溫泉小鎮的代表性伴手禮。採用強化玻璃技術，每一件銼刀都經過手工磨製與精美彩繪。不傷指甲、防止分層，是送給親友最貼心的精品。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureItem title="永久磨砂表面" />
            <FeatureItem title="水洗即淨，不生細菌" />
            <FeatureItem title="強化玻璃，防摔耐用" />
            <FeatureItem title="施華洛世奇水鑽鑲嵌" />
          </div>

          {/* 購買提示卡片 */}
          <div className="bg-[#f5f5f7] p-6 rounded-2xl flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cinnabar shadow-sm">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h4 className="font-bold text-ink tracking-wide text-sm md:text-base">店內現貨選購</h4>
                <p className="text-[10px] md:text-xs text-stone-500">Available at the restaurant counter</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-ink text-paper text-xs font-bold rounded-full hover:bg-cinnabar transition-all shadow-md"
            >
              查看位置
            </a>
          </div>
        </div>

        {/* --- 圖片展示區 (Desktop Order 1) --- */}
        <div className="relative order-2 lg:order-1 w-full space-y-6">
          <div className="bg-[#f5f5f7] rounded-[2.5rem] overflow-hidden aspect-square flex items-center justify-center relative shadow-sm border border-stone-100">
            {/* 核心改進：平滑縮放放大鏡 */}
            <ImageMagnifier 
              src={PRODUCT_IMAGES[currentIndex].src} 
              alt={PRODUCT_IMAGES[currentIndex].title} 
              zoomLevel={2.2}
            />

            {/* 切換按鈕 */}
            <button
              onClick={prevSlide}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/60 backdrop-blur-md hover:bg-white flex items-center justify-center text-stone-600 transition-all z-20 shadow-sm"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/60 backdrop-blur-md hover:bg-white flex items-center justify-center text-stone-600 transition-all z-20 shadow-sm"
            >
              <ChevronRight size={28} />
            </button>

            {/* 指示圓點 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {PRODUCT_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-stone-800 w-4" : "bg-stone-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 小型化詳細介紹 - 設計更簡潔 */}
          <div className="px-8 py-5 bg-[#f5f5f7]/50 rounded-[1.5rem] border border-stone-100 flex items-start gap-5">
            <div className="text-cinnabar font-serif italic text-xl opacity-30 select-none pt-1">
              {PRODUCT_IMAGES[currentIndex].id.toString().padStart(2, '0')}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h4 className="text-base font-bold text-ink">
                  {PRODUCT_IMAGES[currentIndex].title}
                </h4>
                <span className="text-[9px] font-bold tracking-tighter bg-cinnabar text-white px-1.5 py-0.5 rounded-sm uppercase">
                  {PRODUCT_IMAGES[currentIndex].label}
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-500 leading-relaxed italic">
                {PRODUCT_IMAGES[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 text-stone-700">
      <div className="bg-green-100 rounded-full p-1">
        <CheckCircle2 size={14} className="text-green-700" />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
