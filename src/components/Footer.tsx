import React from "react";
import Image from "next/image";
import { MapPin, Clock, MessageCircle, Phone, Mail } from "lucide-react"; // 新增 Mail 圖標
import LocationMap from "./LocationMap";

export default function Footer() {
  return (
    <section
      id="contact"
      className="w-full bg-ink text-paper pt-16 pb-8 px-4 lg:px-8 mt-12 border-t-4 border-cinnabar"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
        {/* --- 第一列：文字信息 (左側) --- */}
        <div className="space-y-8 text-center lg:text-left">
          <div>
            <h4 className="font-serif text-2xl tracking-[0.2em] text-[#fcd34d] mb-6 inline-block border-b border-white/10 pb-2">
              聯絡我們
            </h4>

            <div className="space-y-5 text-sm font-light opacity-90">
              {/* 地址鏈接 */}
              <a
                href="https://g.page/r/CRzths9uJyiJEBE/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cinnabar group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <div className="text-stone-300 group-hover:text-white transition-colors text-left">
                  <span className="font-bold text-base text-white block">
                    Lidická 125/10
                  </span>
                  <span className="block mt-1">353 01 Mariánské Lázně, Czechia</span>
                </div>
              </a>

              {/* 電話 */}
              <a
                href="tel:+420602610422"
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div className="text-stone-300 group-hover:text-white transition-colors text-left">
                  <span className="font-bold text-lg tracking-widest">
                    +420 602 610 422
                  </span>
                  <span className="text-xs opacity-60 block mt-1">
                    點擊撥打 (Click to Call)
                  </span>
                </div>
              </a>

              {/* 新增 Email */}
              <a
                href="mailto:business@chinagarden-ml.com"
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div className="text-stone-300 group-hover:text-white transition-colors text-left">
                  <span className="font-bold text-base tracking-wide">
                    business@chinagarden-ml.com
                  </span>
                  <span className="text-xs opacity-60 block mt-1">
                    商務/團餐諮詢 (Business Inquiry)
                  </span>
                </div>
              </a>

              <div className="w-20 h-[1px] bg-white/10 mx-auto lg:mx-0 my-4"></div>

              {/* 營業提示 */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-cinnabar">
                    Reservation Only
                  </span>
                  <span className="text-xs text-stone-400 block mt-1">
                    只接待預約客人
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 第二列：地圖 (中間) --- */}
        <div className="w-full flex flex-col items-center">
          <h4 className="lg:hidden font-serif text-xl tracking-widest text-[#fcd34d] mb-4">
            地圖導航
          </h4>

          <div className="w-full h-[300px] lg:h-[350px] bg-stone-800 rounded-sm shadow-2xl border border-stone-700 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
            <LocationMap />
          </div>

          <a
            href="https://g.page/r/CRzths9uJyiJEBE/"
            target="_blank"
            className="mt-4 text-xs text-stone-400 hover:text-white underline underline-offset-4 decoration-stone-600 hover:decoration-white transition-all"
          >
            在 Google Maps 中查看大圖
          </a>
        </div>

        {/* --- 第三列：微信預訂 (右側) --- */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="bg-[#F2F0E6] text-ink p-6 rounded-sm w-full max-w-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-stone-600 relative">
            {/* 裝飾釘子 */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-stone-400 opacity-50 shadow-inner"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-stone-400 opacity-50 shadow-inner"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-stone-400 opacity-50 shadow-inner"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-stone-400 opacity-50 shadow-inner"></div>

            <div className="flex flex-col items-center gap-5">
              {/* 標題 */}
              <div className="flex items-center gap-2 border-b border-stone/10 pb-3 w-full justify-center">
                <div className="w-6 h-6 bg-[#07C160] rounded-full flex items-center justify-center text-white shadow-sm">
                  <MessageCircle size={14} />
                </div>
                <span className="font-serif tracking-widest text-lg font-bold text-stone-800">
                  微信預訂
                </span>
              </div>

              {/* 雙二維碼容器 */}
              <div className="flex justify-center gap-4 w-full px-2">
                <div className="flex flex-col items-center flex-1">
                  <div className="aspect-square w-full bg-white border border-stone-200 p-1.5 shadow-inner mb-2">
                    <Image
                      src="/wechat-qr-1.jpg"
                      alt="WeChat A"
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                    預訂客服 A
                  </span>
                </div>
                <div className="w-[1px] bg-stone-200 h-24 self-center"></div>
                <div className="flex flex-col items-center flex-1">
                  <div className="aspect-square w-full bg-white border border-stone-200 p-1.5 shadow-inner mb-2">
                    <Image
                      src="/wechat-qr-2.jpg"
                      alt="WeChat B"
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                    預訂客服 B
                  </span>
                </div>
              </div>

              {/* 新增：WeChat ID 按鈕 */}
              <div className="w-full pt-2">
                <a 
                  href="weixin://dl/chat?N608287202" 
                  className="flex flex-col items-center justify-center gap-1 bg-[#07C160] hover:bg-[#06ad56] text-white py-2.5 rounded-md transition-all shadow-md group"
                >
                  <span className="text-[10px] opacity-80 uppercase tracking-tighter">Click to Add WeChat ID</span>
                  <span className="font-mono font-bold tracking-wider">N608287202</span>
                </a>
              </div>
            </div>
          </div>

          <p className="text-stone-500 text-xs mt-4 text-center lg:text-right max-w-[300px] leading-relaxed">
            掃碼或搜尋 ID 添加微信，隨時諮詢訂餐<br />
            <span className="opacity-60 italic text-[10px]">Scan or search ID to contact via WeChat</span>
          </p>
        </div>
      </div>

      {/* 底部版權 */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center text-xs text-stone-500 gap-4">
        <p>© 2026 Mariánské Lázně Chinese Kitchen. All rights reserved.</p>
        <p className="font-serif italic opacity-40">
          Designed for authentic taste & heritage.
        </p>
      </div>
    </section>
  );
}
