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
    src: "/images/photo-2.png",
    title: "經典蛋花湯",
    desc: "汤清味鲜，云朵般的蛋花入口即化，温暖脾胃的经典滋味。",
  },
  {
    id: 3,
    src: "/images/photo-3.png",
    title: "秘製紅燒排骨",
    desc: "独家秘方慢火炖煮，色泽红亮油润，肉质酥烂入味，咸鲜微甜。",
  },
  {
    id: 4,
    src: "/images/photo-4.png",
    title: "清炒花椰菜",
    desc: "严选时令鲜蔬，猛火快炒锁住水分，保留食材原本的清甜脆嫩。",
  },
  {
    id: 5,
    src: "/images/photo-5.png",
    title: "脆皮雞腿",
    desc: "金黄外皮酥脆作响，内裏鲜嫩多汁，一口咬下满嘴留香。",
  },
  {
    id: 6,
    src: "/images/photo-6.png",
    title: "清炒蝦仁黃瓜",
    desc: "晶莹虾仁Q弹爽滑，搭配黄瓜的清脆口感，清新不腻的健康之选。",
  },
  {
    id: 7,
    src: "/images/photo-7.png",
    title: "糖醋雞塊",
    desc: "酸甜黄金配比，酱汁浓郁裹满每一块鸡肉，大人小孩都喜爱的开胃佳肴。",
  },
];

export default function PhotoSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current, isAutoPlaying]);

  const prevSlide = () => {
    setCurrent((curr) => (curr === 0 ? SLIDES.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrent((curr) => (curr === SLIDES.length - 1 ? 0 : curr + 1));
  };

  return (
    <section id="story" className="w-full max-w-5xl px-4 py-12 mx-auto">
      {/* 标题区域 */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-ink mb-2">
          餐廳風採
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent mx-auto"></div>
      </div>

      {/* 轮播图主容器 */}
      <div
        className="relative group w-full aspect-[16/9] md:aspect-[21/9] bg-stone-100 rounded-sm shadow-xl overflow-hidden border-4 border-stone-200 outline outline-1 outline-stone-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* 图片层 */}
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

            {/* 遮罩层 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70" />

            {/* 文字内容 */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-paper z-20 flex flex-col items-start drop-shadow-md">
              <div className="flex items-start gap-3">
                <Quote className="text-cinnabar w-6 h-6 rotate-180 opacity-80 hidden md:block shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-widest mb-2 text-[#fcd34d]">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-stone-200 font-light tracking-wider max-w-lg leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 左右控制按钮 */}
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
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                idx === current
                  ? "w-8 bg-[#fcd34d]"
                  : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 底部装饰文字 */}
      <div className="flex justify-between mt-2 text-[10px] text-stone-400 uppercase tracking-[0.2em] font-sans">
        <span>Marianske Lazne Chinese Kitchen</span>
        <span>Signature Collection</span>
      </div>
    </section>
  );
}
