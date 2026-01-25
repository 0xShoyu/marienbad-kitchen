import React from "react";

interface LionDancerProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function LionDancer({ className, style }: LionDancerProps) {
  return (
    <div
      // animate-lion-dance 让它保持上下律动
      className={`absolute z-20 animate-lion-dance ${className}`}
      style={style}
    >
      <img
        src="/images/lion-paper-cut.png"
        alt="Lion Dance"
        className="w-full h-auto drop-shadow-xl select-none"
        draggable="false"
      />
    </div>
  );
}
