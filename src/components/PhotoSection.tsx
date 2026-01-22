"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    src: "/images/photo-1.png",
    title: "大堂雅座",
    desc: "宽敞明亮，在这裏感受热闹温暖的烟火气。",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    title: "大堂雅座",
    desc: "宽敞明亮，在这裏感受热闹温暖的烟火气。",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1563245372-f21720e32601?q=80&w=1974&auto=format&fit=crop",
    title: "匠心後廚",
    desc: "每日新鲜採购食材，坚持传统工艺烹饪。",
  },
];

export default function PhotoSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 自动播放逻辑
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, [current, isAutoPlaying]);

  const prevSlide = () => {
    setCurrent((curr) => (curr === 0 ? SLIDES.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrent((curr) => (curr === SLIDES.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="w-full max-w-5xl px-4 py-12 mx-auto">
      {/* 标题区域 */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-ink mb-2">
          环境一览
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent mx-auto"></div>
      </div>

      {/* 轮播图主容器 */}
      <div
        className="relative group w-full aspect-[16/9] md:aspect-[21/9] bg-stone-100 rounded-sm shadow-xl overflow-hidden border-4 border-stone-200 outline outline-1 outline-stone-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* 图片层 (使用淡入淡出效果) */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* 图片本身 */}
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* 遮罩层：为了让文字更清晰，底部加黑渐变，整体加一点复古滤镜 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply opacity-60" />

            {/* 文字内容 */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-paper z-20 flex flex-col items-start drop-shadow-md">
              <div className="flex items-start gap-3">
                <Quote className="text-cinnabar w-6 h-6 rotate-180 opacity-80 hidden md:block" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-widest mb-2 text-[#fcd34d]">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-stone-200 font-light tracking-wider max-w-lg">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 左右控制按钮 (仅在鼠标悬停时显示) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-ink text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-ink text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* 底部指示器 */}
        <div className="absolute bottom-4 right-6 z-30 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-[#fcd34d]"
                  : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 装饰性边缘文字 (可选) */}
      <div className="flex justify-between mt-2 text-[10px] text-stone/40 uppercase tracking-[0.2em] font-sans">
        <span>Marienbad Chinese Kitchen</span>
        <span>Gallery Collection</span>
      </div>
    </section>
  );
}
