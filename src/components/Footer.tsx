import React from "react";
import Image from "next/image";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="contact"
      className="w-full bg-ink text-paper py-16 px-6 mt-8"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div className="space-y-6">
          <h4 className="font-serif text-2xl tracking-widest border-b border-paper/20 pb-4 inline-block md:block">
            預訂資訊
          </h4>
          <div className="space-y-4 text-sm font-light opacity-90">
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin size={18} className="text-cinnabar" />
              <span>
                Lidická 125/10, Mariánské Lázně
                <br />
                <span className="text-xs opacity-60 ml-8">
                  緊鄰 Hotel Crystal Palace
                </span>
              </span>
            </p>
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <Clock size={18} className="text-cinnabar" />
              <span>只接待預約客人 (Reservation Only)</span>
            </p>
          </div>
        </div>

        {/* WeChat QR Card */}
        <div className="bg-paper text-ink p-8 rounded-sm max-w-sm w-full shadow-2xl transform md:scale-110">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#07C160] rounded-full flex items-center justify-center text-white">
                <MessageCircle size={14} />
              </div>
              <span className="font-serif tracking-widest text-lg">
                微信預訂
              </span>
            </div>

            {/* QR Code Image Box */}
            <div className="w-48 h-48 bg-white border border-stone/10 p-2 shadow-inner">
              <Image
                src="/wechat-qr.jpg"
                alt="WeChat QR Code"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs text-stone/60 mt-2 tracking-wide">
              請掃描上方二維碼聯繫我們
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
