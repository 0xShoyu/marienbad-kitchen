import React from "react";

export default function Menu() {
  return (
    <section className="w-full max-w-4xl px-4 py-12 mx-auto">
      <div className="relative bg-white/60 p-8 md:p-12 shadow-sm">
        {/* 🌟 核心保留：红角边框 (Decorative Corners) */}
        {/* 左上角 */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-cinnabar/40"></div>
        {/* 右上角 */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-cinnabar/40"></div>
        {/* 左下角 */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-cinnabar/40"></div>
        {/* 右下角 */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-cinnabar/40"></div>

        {/* 竹叶背景淡化处理 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-bamboo-shadow rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="text-center mb-12 border-b border-dashed border-stone/20 pb-8 relative z-10">
          <h3 className="font-serif text-3xl text-ink tracking-[0.2em] mb-2">
            經典菜單
          </h3>
          <p className="text-stone text-xs tracking-wider uppercase">
            Classic Menu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
          {/* Column 1 */}
          <div className="space-y-10">
            <MenuCategory title="暖心湯品 Soup">
              <MenuItem
                name="經典蛋花湯"
                en="Egg Drop Soup"
                desc="家常風味，暖胃首選"
              />
              <MenuItem
                name="鮮蔬豆腐湯"
                en="Tofu & Vegetable Soup"
                desc="清淡鮮美，營養豐富"
              />
            </MenuCategory>

            <MenuCategory title="主廚熱炒 Signature Dishes">
              <MenuItem
                name="秘製紅燒排骨"
                en="Braised Pork Ribs"
                highlight
                desc="軟爛脫骨，濃油赤醬 (招牌)"
              />
              <MenuItem
                name="糖醋雞球"
                en="Sweet & Sour Chicken"
                desc="酸甜開胃，老少皆宜"
              />
              <MenuItem
                name="酥炸大雞腿"
                en="Crispy Fried Chicken Leg"
                desc="皮脆肉嫩，肉汁飽滿"
              />
            </MenuCategory>
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            <MenuCategory title="田園時蔬 Vegetables">
              <MenuItem
                name="蠔油生菜"
                en="Lettuce w/ Oyster Sauce"
                desc="清脆爽口"
              />
              <MenuItem
                name="清炒蝦仁黃瓜"
                en="Shrimp & Cucumber Stir-fry"
                desc="口感豐富，色澤清亮"
              />
              <MenuItem
                name="番茄炒蛋"
                en="Tomato & Eggs"
                highlight
                desc="最經典的家常味道"
              />
            </MenuCategory>

            <MenuCategory title="主食與飲品 Staples">
              <MenuItem name="香米飯" en="Jasmine Rice" desc="優質長粒香米" />
              <MenuItem
                name="特調水果茶"
                en="House Fruit Tea"
                desc="酸甜解膩"
              />
            </MenuCategory>
          </div>
        </div>

        <div className="mt-12 p-4 bg-paper/50 text-center border-t border-dashed border-stone/20 relative z-10">
          <p className="text-cinnabar text-xs tracking-wide leading-relaxed">
            * 菜單可根據您的團隊需求進行客製化調整 (口味偏好：清淡 / 加辣 /
            免蔥蒜)
            <br />
            <span className="opacity-70 font-sans">
              Menu can be customized for your group (Spicy / Non-spicy / No
              Garlic etc.)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Helper Components (Internal to Menu) ---
function MenuCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-serif text-lg text-ink font-bold border-l-4 border-cinnabar pl-3 mb-4 inline-block">
        {title}
      </h4>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function MenuItem({
  name,
  en,
  desc,
  highlight = false,
}: {
  name: string;
  en: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline relative">
        <div className="z-10 bg-white/0 pr-2">
          <h5
            className={`text-base tracking-wider ${highlight ? "text-cinnabar font-medium" : "text-ink"}`}
          >
            {name}
          </h5>
          <p className="text-xs text-stone/60 font-sans tracking-wide -mt-0.5">
            {en}
          </p>
        </div>
        <div className="absolute inset-0 top-3 border-b border-dotted border-stone/30 z-0"></div>
      </div>
      <p className="text-xs text-stone/80 mt-1.5 font-sans leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
