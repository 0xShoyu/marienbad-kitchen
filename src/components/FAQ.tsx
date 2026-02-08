"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  MessageSquareQuote,
  MapPin,
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
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
      >
        <div className="text-stone-600 leading-relaxed font-sans text-sm md:text-base whitespace-pre-line">
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
        <div className="space-y-4">
          <p>餐廳位於 Lidická 街。根據您的交通工具，建議如下：</p>
          <div className="bg-stone-100 p-4 rounded-lg space-y-3">
            <p>
              <strong>🚗 私家車：</strong>
              <br />
              鄰近的大街 Hlavní tř. 路邊設有市政收費停車位，停妥後步行即可抵達。
            </p>
            <p>
              <strong>🚌 大型巴士團隊：</strong>
              <br />
              1. 請先於{" "}
              <a
                href="https://maps.app.goo.gl/xVFYrwbt71y6Ezef8"
                target="_blank"
                className="text-cinnabar underline font-bold"
              >
                City Service 站點
              </a>{" "}
              讓團隊下車。
              <br />
              2. 隨後請司機將巴士停放至 <strong>Central Parking</strong>{" "}
              (Kollárova 94/26, 353 01 Mariánské Lázně)。
            </p>
            <p>
              <strong>🚶 步行指引：</strong>
              <br />
              團隊下車後，請沿著 Hlavní tř. 大街向{" "}
              <strong>Hotel Crystal Palace</strong>{" "}
              方向前進。在酒店左側有一段樓梯，從樓梯走上來即抵達中華園餐館。
            </p>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink">
            常見問題
          </h2>
          <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mt-2">
            Frequently Asked Questions
          </p>
          <div className="w-12 h-[1px] bg-stone-300 mt-6"></div>
        </div>

        {/* FAQ 列表 */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-sm border border-stone-100">
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
        <div className="mt-12 text-center p-8 border-2 border-dashed border-stone-200 rounded-2xl">
          <MessageSquareQuote
            className="text-stone-300 mx-auto mb-4"
            size={32}
          />
          <p className="text-stone-500 text-sm leading-relaxed">
            還有其他疑問？歡迎隨時掃描頁面下方的
            <span className="text-cinnabar font-bold"> 微信二維碼 </span>
            與我們聯繫。
            <br />
            <span className="text-xs opacity-60">
              We are happy to assist you with any further questions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
