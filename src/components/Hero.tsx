import React from "react";
import { Users, QrCode } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[50vh] flex flex-col justify-center items-center relative px-4 text-center mt-12 mb-12">
      <div className="space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center justify-center gap-2 text-cinnabar border-b border-cinnabar/20 pb-1 mb-2">
          <Users size={14} />
          <span className="font-serif tracking-[0.2em] text-sm">
            20年匠心傳承 · 10-50人團購專家
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-6xl text-ink tracking-widest leading-tight">
          閱遍萬水千山
          <br />
          <span className="text-3xl md:text-5xl opacity-90 mt-4 block">
            最憶此間清鮮
          </span>
        </h2>

        <p className="font-sans text-stone/80 text-sm md:text-base max-w-md mx-auto leading-loose pt-4">
          專注服務中、台、泰、日多國旅行團，堅持當日採購與健康烹飪。
          拒絕重油重鹽，我們以二十年專業經驗，確保每一份餐盤都恰到好處。
          無論是午間小憩還是晚間家宴，以誠摯匠心，待四海歸客。
        </p>
      </div>

      <div className="mt-12">
        <a
          href="#contact"
          className="group relative px-10 py-4 bg-ink overflow-hidden rounded-sm transition-all hover:bg-ink/90 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-3"
        >
          <QrCode className="text-paper w-5 h-5" />
          <span className="relative z-10 text-paper font-serif tracking-[0.1em] text-lg transition-colors duration-300">
            掃碼預訂 (微信)
          </span>
        </a>
      </div>
    </section>
  );
}
