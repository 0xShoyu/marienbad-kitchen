"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  zoomLevel?: number;
}

export default function ImageMagnifier({ src, alt, zoomLevel = 2 }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [offset, setOffset] = useState({ x: 50, y: 50 }); // 默认居中 50% 50%

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    // 计算鼠标在容器内的百分比位置
    const x = ((e.pageX - left - window.pageXOffset) / width) * 100;
    const y = ((e.pageY - top - window.pageYOffset) / height) * 100;
    
    setOffset({ x, y });
  };

  return (
    <div
      className="relative w-full h-full cursor-zoom-in overflow-hidden bg-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovering(false);
        setOffset({ x: 50, y: 50 }); // 鼠标离开后重置回中心
      }}
    >
      {/* 基础图片层 */}
      <div 
        className="relative w-full h-full transition-all duration-700 ease-out"
        style={{
          transform: isHovering ? `scale(${zoomLevel})` : "scale(1)",
          transformOrigin: `${offset.x}% ${offset.y}%`, // 核心：根据鼠标位置改变缩放原点
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-8 md:p-12"
          priority
        />
      </div>

      {/* 装饰性提示 */}
      <div className={`absolute bottom-6 right-8 transition-opacity duration-500 pointer-events-none ${isHovering ? 'opacity-0' : 'opacity-40'}`}>
        <div className="flex flex-col items-end gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-500">
                Detail View
            </span>
            <div className="w-8 h-[1px] bg-stone-300"></div>
        </div>
      </div>
    </div>
  );
}
