import React from "react";
import Image from "next/image";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="w-full bg-ink text-paper py-16 px-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* 左側：地址與資訊 */}
        <div className="space-y-6 md:max-w-xs">
          <h4 className="font-serif text-2xl tracking-widest border-b border-paper/20 pb-4 inline-block md:block">
            預訂資訊
          </h4>
          <div className="space-y-4 text-sm font-light opacity-90">
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin size={18} className="text-cinnabar shrink-0" />
              <span>
                Lidická 125/10, 353 01 Mariánské Lázně, Czechia
                <br />
                <span className="text-xs opacity-60 ml-0 md:ml-8 block md:inline mt-1 md:mt-0">
                  緊鄰 Hotel Crystal Palace
                </span>
              </span>
            </p>
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <Clock size={18} className="text-cinnabar shrink-0" />
              <span>只接待預約客人 (Reservation Only)</span>
            </p>
          </div>
        </div>

        {/* 右側：WeChat QR Card (雙二維碼版) */}
        {/* max-w-md 讓卡片變寬以容納兩個二維碼 */}
        <div className="bg-paper text-ink p-6 md:p-8 rounded-sm max-w-md w-full shadow-2xl transform md:scale-105">
          <div className="flex flex-col items-center gap-5">
            {/* 標題 */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-[#07C160] rounded-full flex items-center justify-center text-white">
                <MessageCircle size={14} />
              </div>
              <span className="font-serif tracking-widest text-lg">
                微信預訂
              </span>
            </div>

            {/* 雙二維碼容器 */}
            <div className="flex justify-center gap-4 md:gap-6">
              {/* 二維碼 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-white border border-stone/10 p-2 shadow-inner">
                  <Image
                    src="/wechat-qr-1.jpg" // ⚠️ 請確認圖片路徑 1
                    alt="WeChat QR 1"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-sans text-stone/60 uppercase tracking-wider">
                  預訂客服 A
                </span>
              </div>

              {/* 分隔線 (裝飾用，可選) */}
              <div className="w-[1px] bg-stone/10 h-24 self-center hidden sm:block"></div>

              {/* 二維碼 2 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-white border border-stone/10 p-2 shadow-inner">
                  <Image
                    src="/wechat-qr-2.jpg" // ⚠️ 請確認圖片路徑 2
                    alt="WeChat QR 2"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-sans text-stone/60 uppercase tracking-wider">
                  預訂客服 B
                </span>
              </div>
            </div>

            <p className="text-xs text-stone/60 mt-1 tracking-wide text-center">
              請掃描任一二維碼聯繫我們
              <br />
              <span className="text-[10px] opacity-80">
                (Scan either code to contact us)
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-paper/10 text-xs opacity-40">
        © 2026 Marienbad Chinese Kitchen.
      </div>
    </section>
  );
}
