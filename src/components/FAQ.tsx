"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HelpCircle,
  ChevronDown,
  MessageSquareQuote,
  MapPin,
  Bus,
  Car,
  Navigation,
  ZoomIn,
  Info,
} from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-stone-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={onClick}
      >
        <span className="font-serif text-lg md:text-xl text-ink group-hover:text-cinnabar transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-cinnabar" : ""}`}
          size={20}
        />
      </button>
      {/* 核心修改：將 max-h 提高到 2500px 確保 1647px 高度的圖片完全顯示 */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[2500px] pb-6" : "max-h-0"}`}
      >
        <div className="text-stone-600 leading-relaxed font-sans text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "需要提前多久預約？",
      answer:
        "為了保證食材的新鮮與口味，我們僅接待預約客人。建議您至少提前 48 小時通過微信或電話聯繫我們。如果您有當天的臨時需求，也可以嘗試聯繫，我們會視當日食材儲備情況告知能否接待。",
    },
    {
      question: "餐廳附近方便停車嗎？",
      answer: (
        <div className="space-y-6">
          <p>餐廳位於 Lidická 街。根據您的交通工具，建議如下：</p>

          <div className="bg-stone-100 p-4 md:p-6 rounded-xl space-y-6 shadow-inner">
            {/* 私家車 */}
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600">
                <Car size={20} />
              </div>
              <div>
                <p className="font-bold text-ink text-base">
                  私家車 (Private Cars)
                </p>
                <p className="text-sm mt-1 text-stone-600 leading-relaxed">
                  鄰近的大街 <strong>Hlavní tř.</strong>{" "}
                  路邊設有市政收費停車位，停妥後步行約 2 分鐘即可抵達。
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-stone-200 w-full" />

            {/* 大巴團隊 */}
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm text-cinnabar">
                <Bus size={20} />
              </div>
              <div className="space-y-4 flex-1">
                <p className="font-bold text-ink text-base">
                  大型巴士團隊 (Tour Bus)
                </p>

                {/* 路線地圖展示區 - 針對 1032x1647 優化 */}
                <div className="space-y-2">
                  <div className="relative w-full rounded-xl overflow-hidden border-4 border-white shadow-xl group">
                    <a
                      href="/images/route-map.png"
                      target="_blank"
                      className="block relative cursor-zoom-in"
                    >
                      <Image
                        src="/images/route-map.png"
                        alt="中華園大巴下車與步行路線圖"
                        width={1032}
                        height={1647}
                        className="w-full h-auto"
                        priority
                      />
                      {/* 懸浮提示 */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                          <ZoomIn size={16} className="text-cinnabar" />
                          <span className="text-xs font-bold text-ink">
                            點擊查看全圖 / View Full Map
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <p className="text-[10px] text-stone-400 text-center italic">
                    * 標註點：右上藍色圖標為下車點，左下餐具圖標為餐館入口
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="https://maps.app.goo.gl/xVFYrwbt71y6Ezef8"
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-white border border-stone-200 py-3 rounded-lg text-xs font-bold hover:border-cinnabar hover:text-cinnabar transition-all shadow-sm"
                    >
                      <Navigation size={14} />
                      1. 團隊下車站點導航
                    </a>
                    <a
                      href="https://maps.app.goo.gl/uXvLqE71GnyXvMbeA"
                      target="_blank"
                      className="flex items-center justify-center gap-2 bg-white border border-stone-200 py-3 rounded-lg text-xs font-bold hover:border-cinnabar hover:text-cinnabar transition-all shadow-sm"
                    >
                      <MapPin size={14} />
                      2. 巴士停車場導航
                    </a>
                  </div>

                  <div className="bg-white p-5 rounded-xl border-l-4 border-cinnabar shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-cinnabar">
                      <Info size={16} />
                      <span className="font-bold text-sm">
                        導遊步行指引 (Walking Guide)
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
                      請在 <strong>City Service</strong>{" "}
                      站點讓團隊下車，隨後巴士可停放至停車場。團隊下車後請沿{" "}
                      <strong>Hlavní tř.</strong> 大街向南行進，看到{" "}
                      <strong>Hotel Crystal Palace</strong>{" "}
                      後，從其左側的樓梯走上來即可抵達餐館。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "口味可以根據個人喜好調整嗎？",
      answer:
        "可以的。中華園堅持「少油、少鹽、無味精」的健康理念。如果您對口味有特殊要求（如：免辣、免蔥蒜、無麩質），請在預約時提前告知主廚。",
    },
    {
      question: "接受什麼樣的支付方式？",
      answer:
        "【重要提示】我們目前僅接受現金支付。支持 捷克克朗 (CZK) 以及 歐元 (EUR)。暫不接受信用卡結算，敬請見諒。",
    },
    {
      question: "關於水晶銼刀的購買？",
      answer:
        "水晶銼刀款式眾多，現場展示僅為部分。如果您需要大量訂購或定制特殊圖案，建議提前聯繫。我們為用餐客人提供「買十送一」的特別優惠。",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#F2F0E6] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 標題 */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-cinnabar/10 p-3 rounded-full mb-4">
            <HelpCircle className="text-cinnabar" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink text-center">
            常見問題
          </h2>
          <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mt-2 text-center">
            Frequently Asked Questions
          </p>
          <div className="w-12 h-[1px] bg-stone-300 mt-6"></div>
        </div>

        {/* FAQ 列表 */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl px-4 md:px-8 py-4 shadow-sm border border-stone-100">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* 底部聯繫提示 */}
        <div className="mt-12 text-center p-8 border-2 border-dashed border-stone-200 rounded-3xl">
          <MessageSquareQuote
            className="text-stone-300 mx-auto mb-4"
            size={32}
          />
          <p className="text-stone-500 text-sm leading-relaxed font-medium">
            還有其他疑問？歡迎隨時掃描頁面下方的
            <span className="text-cinnabar font-bold"> 微信二維碼 </span>
            與我們聯繫。
            <br />
            <span className="text-[10px] opacity-60 uppercase tracking-widest mt-1 block">
              We are happy to assist you with any further questions
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
