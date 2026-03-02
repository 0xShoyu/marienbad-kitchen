"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Bus,
  HeartPulse,
  Navigation,
  ShoppingBag,
  ArrowRight,
  History,
  CheckCircle2,
} from "lucide-react";

export default function ProposalPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#F2F0E6] selection:bg-cinnabar selection:text-white">
      {/* --- Section 1: Hero (封面) --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* 背景圖層 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dining-hero.jpg"
            alt="China Garden Interior"
            fill
            className="object-cover brightness-[0.5] sepia-[0.1] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#F2F0E6]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 backdrop-blur-md bg-white/10 rounded-full text-white/90 text-xs mb-8 tracking-[0.3em] uppercase">
            <Award size={14} className="text-[#fcd34d]" />
            Exclusive Business Proposal
          </div>
          <h1 className="text-4xl md:text-8xl font-serif font-black text-white leading-tight tracking-widest drop-shadow-lg mb-8">
            致旅行社經理：
            <br />
            <span className="text-[#fcd34d]">誠意回歸</span> 的家鄉味
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-serif max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            深耕瑪麗亞溫泉市 20 載。
            <br />
            為貴司的高端團組，呈獻最正宗且健康的中華手藝。
          </p>

          {/* 向下滾動的引導提示 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
            <span className="text-white/40 text-[10px] uppercase tracking-widest">
              Scroll to Explore
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Trust (品牌歷史) --- */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* 左侧：报纸展示区 - 占据 7 列 */}
          <div className="lg:col-span-7 relative group">
            {/* 背景装饰：模拟多层纸张叠放的效果 */}
            <div className="absolute -inset-4 bg-stone-200/60 rounded-sm rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="absolute -inset-2 bg-stone-300/40 rounded-sm -rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-lg"></div>

            {/* 报纸主体容器 - 修正为你的图片真实比例 */}
            <div className="relative aspect-[3059/2489] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[12px] border-white overflow-hidden bg-white">
              <Image
                src="/images/newspaper.jpg"
                alt="2004 Newspaper Report - Heritage of China Garden"
                fill
                className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                style={{
                  filter: "sepia(0.1) contrast(1.05)", // 保持一点点复古色调
                }}
              />
              {/* 覆盖层：模拟纸张上的反光效果 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none"></div>

              {/* 左下角小标签：强调年份 */}
              <div className="absolute bottom-4 left-4 bg-cinnabar text-white px-3 py-1 text-[10px] font-bold tracking-widest rounded-sm shadow-md">
                ARCHIVED 2004
              </div>
            </div>

            {/* 提示文字 */}
            <p className="mt-6 text-center text-stone-400 text-xs font-serif italic">
              * 截圖自 2004 年《體育報》專題報導：馬利安斯基唯一老字號中餐館
            </p>
          </div>

          {/* 右侧：文字说明 - 占据 5 列 */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-cinnabar">
                <History size={24} />
                <span className="text-sm font-bold tracking-[0.3em] uppercase">
                  The Authentic Heritage
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
                時間，是品質
                <br />
                最好的證人
              </h2>
              <div className="w-20 h-1 bg-cinnabar mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed text-justify">
              <p>
                自 1998 年創立以來，<strong>中華園</strong>{" "}
                始終守護著瑪麗亞溫泉市最正宗的中餐味道。我們接待過無數來自台灣、香港及東南亞的高端考察團組。
              </p>
              <p>
                楊老闆堅持「做給同胞吃的家鄉菜」這一初衷，拒絕為了迎合當地市場而改變配方。這份執著在
                20 多年前便獲得了主流媒體的深度認可。
              </p>
              <div className="bg-white/60 p-8 border-l-4 border-cinnabar shadow-sm relative italic font-serif text-ink group">
                <span className="absolute top-2 left-2 text-4xl text-cinnabar/20 font-serif">
                  “
                </span>
                我們不只是在做一份團餐，我們是在為遠道而來的同胞，遞上一碗溫暖的家鄉熱湯。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Group Menu Options (多樣化團餐方案) --- */}
      <section className="bg-ink py-32 px-4 text-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-1 bg-cinnabar/20 text-cinnabar text-xs font-bold rounded-full tracking-[0.2em] mb-4">
              FLEXIBLE CATERING SOLUTIONS
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-wider text-[#fcd34d]">
              多樣化團餐方案
            </h2>
            <p className="text-stone-400 tracking-[0.1em] max-w-2xl mx-auto">
              我們了解不同團組的預算需求。無論規模大小，中華園均堅持高品質食材與地道北京烹飪工藝。
            </p>
            <div className="w-24 h-1 bg-cinnabar mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 方案 A: 6 菜 1 湯 */}
            <MenuTierCard
              tier="經濟實惠"
              title="6 菜 1 湯"
              desc="適合預算有限或小規模精品團組，精選主廚招牌菜式，份量充足。"
              features={[
                "精選熱炒 x 6",
                "暖心時湯 x 1",
                "優質絲苗米飯",
                "餐後季節水果",
              ]}
            />

            {/* 方案 B: 7 菜 1 湯 (經典款) */}
            <MenuTierCard
              tier="最受歡迎"
              title="7 菜 1 湯"
              desc="標準旅遊團餐配置，涵蓋肉類、海鮮與當季蔬菜，營養均衡。"
              features={[
                "經典熱炒 x 7",
                "主廚老火湯 x 1",
                "優質絲苗米飯",
                "餐後季節水果",
                "中國名茶供應",
              ]}
              highlight={true}
            />

            {/* 方案 C: 8 菜 1 湯 (高端款) */}
            <MenuTierCard
              tier="高端貴賓"
              title="8 菜 1 湯"
              desc="符合台灣及香港高端團組標準。菜色更豐富，包含多道主廚私房特色菜。"
              features={[
                "私房特色菜 x 8",
                "精製燉湯 x 1",
                "優質絲苗米飯",
                "豪華水果拼盤",
                "中國名茶供應",
              ]}
            />
          </div>

          {/* 共同承諾 */}
          <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MenuCommitment
                icon={<HeartPulse className="text-cinnabar" />}
                text="少油、少鹽、不含味精"
              />
              <MenuCommitment
                icon={<Bus className="text-[#fcd34d]" />}
                text="司導餐食專屬招待"
              />
              <MenuCommitment
                icon={<CheckCircle2 className="text-green-500" />}
                text="當日採購新鮮食材"
              />
              <MenuCommitment
                icon={<ShoppingBag className="text-blue-400" />}
                text="團員購銼刀享買十送一"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Logistics (物流與指引) --- */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold text-ink">
                  領隊最省心的物流
                </h2>
                <p className="text-stone-500">
                  我們深知帶團領隊的辛勞，特別優化了團隊動線：
                </p>
              </div>

              <div className="space-y-8">
                <LogisticsItem
                  num="01"
                  title="步行 3 分鐘即可抵達"
                  content="餐廳緊鄰大型巴士下車站點 (City Service)，團隊下車後步行僅約 200 米，減少體力消耗。"
                />
                <LogisticsItem
                  num="02"
                  title="清晰的導覽標識"
                  content="位於 Hotel Crystal Palace 旁，左側樓梯直達。領隊可輕鬆指引，無需擔心團員迷路。"
                />
                <LogisticsItem
                  num="03"
                  title="司導專屬招待"
                  content="我們為司機與導遊朋友提供獨立且高品質的餐食招待，保證司導體力與心情，助力行程圓滿。"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-[#F2F0E6]">
                <Image
                  src="/images/route-map.png"
                  alt="Parking Guide Map"
                  width={1032}
                  height={1647}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Bonus (行程亮點 - 視覺優化版) --- */}
      <section className="py-32 px-4 bg-[#F2F0E6]">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-10 lg:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center gap-16 border border-stone-100 relative overflow-hidden">
          {/* 背景裝飾：淡淡的「藝」字或印章感 */}
          <div className="absolute -right-10 -bottom-10 text-[200px] text-stone-50 font-serif font-black select-none pointer-events-none">
            禮
          </div>

          <div className="lg:w-1/2 space-y-8 relative z-10">
            <div className="space-y-2">
              <div className="inline-block px-4 py-1 bg-cinnabar/10 text-cinnabar text-[10px] font-bold rounded-full tracking-[0.2em] uppercase mb-4">
                Value Added Benefit
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink leading-[1.2]">
                為行程增加一個
                <br />
                <span className="text-cinnabar">驚喜購物點</span>
              </h2>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-sans">
              <p>
                這不只是用餐，更是一次精緻的文化體驗。店內展示全捷克花色最精美的
                <strong>手工手繪水晶銼刀</strong>。
              </p>
              <p>
                貴賓在餐後可從容選購，並享受專屬<strong>【買十送一】</strong>
                優惠。這項安排在台灣、香港高端團的反饋中，滿意度極高，能有效提升行程的豐富度。
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/souvenirs"
                target="_blank"
                className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-3 rounded-full font-bold hover:bg-cinnabar transition-all shadow-lg group"
              >
                預覽精美產品系列
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 右側：不再放卡片，而是讓銼刀直接「跳出來」 */}
          <div className="lg:w-1/2 relative group">
            <div className="relative aspect-square w-full transform group-hover:scale-105 transition-transform duration-700">
              {/*
           建議這裡放一張「去背」的銼刀扇形合集圖。
           如果暫時沒有去背圖，可以先用 souvenir-1.png (那張最乾淨的)
        */}
              <Image
                src="/images/souvenir-share-cover.png"
                alt="Bohemian Crystal Art"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
              />
            </div>

            {/* 增加一個精緻的浮動標籤 */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 whitespace-nowrap">
              <div className="w-2 h-2 bg-cinnabar rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-ink tracking-widest uppercase">
                Hand-painted in Czech
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 6: Contact (結尾) --- */}
      <section className="py-32 px-4 text-center bg-[#F2F0E6] border-t border-stone-200">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink leading-tight">
            期待與貴司攜手
            <br />
            打造高品質奧捷行程
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-stone-200 transform transition-transform hover:scale-105">
              <Image
                src="/wechat-qr-1.jpg"
                alt="WeChat Contact"
                width={220}
                height={220}
                className="rounded-lg"
              />
              <p className="text-[10px] font-black text-stone-400 mt-6 tracking-[0.3em] uppercase">
                Scan for Booking
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-serif text-3xl font-bold text-ink">
                WeChat ID: N608287202
              </p>
              <p className="text-stone-400 text-sm">
                Mariánské Lázně, Czech Republic
              </p>
            </div>
          </div>

          <div className="pt-12">
            <Link
              href="/"
              className="text-stone-400 hover:text-ink transition-colors text-xs font-serif tracking-widest border-b border-stone-300 pb-1"
            >
              返回官方網站 / Back to Official Site
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-ink text-paper/20 text-[10px] py-8 text-center tracking-[0.2em] uppercase">
        © 2026 China Garden Chinese Kitchen. All rights reserved.
      </div>
    </main>
  );
}

// --- 小組件 ---

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-8 p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500">
      <div className="flex justify-center transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#fcd34d]">
          {title}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

function LogisticsItem({
  num,
  title,
  content,
}: {
  num: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start gap-6 group">
      <span className="text-cinnabar font-serif italic text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
        {num}
      </span>
      <div className="space-y-1">
        <h4 className="font-bold text-ink text-xl">{title}</h4>
        <p className="text-stone-500 text-base leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

// --- 新增的輔助小組件 ---

function MenuTierCard({
  tier,
  title,
  desc,
  features,
  highlight = false,
}: {
  tier: string;
  title: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative p-8 rounded-3xl border ${highlight ? "border-[#fcd34d] bg-white/10 scale-105 z-10 shadow-2xl" : "border-white/5 bg-white/5 opacity-80"} transition-all duration-500 flex flex-col`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fcd34d] text-ink text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
          Recommended
        </div>
      )}
      <div className="mb-6">
        <span
          className={`text-[10px] font-bold tracking-[0.2em] uppercase ${highlight ? "text-[#fcd34d]" : "text-stone-400"}`}
        >
          {tier}
        </span>
        <h3 className="text-3xl font-serif font-bold mt-1">{title}</h3>
      </div>
      <p className="text-sm text-stone-400 leading-relaxed mb-8 flex-grow">
        {desc}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-paper/90">
            <div
              className={`w-1.5 h-1.5 rounded-full ${highlight ? "bg-[#fcd34d]" : "bg-cinnabar"}`}
            ></div>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuCommitment({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <span className="text-sm font-medium tracking-wide text-paper/80">
        {text}
      </span>
    </div>
  );
}
