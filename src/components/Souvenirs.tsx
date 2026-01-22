import React from "react";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function Souvenirs() {
  return (
    <section className="w-full max-w-4xl px-4 py-8 mx-auto mb-8">
      <div className="border-t border-ink/5 pt-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ShoppingBag className="text-stone w-4 h-4" />
          <h3 className="font-serif text-xl text-ink tracking-widest">
            精選伴手禮
          </h3>
          <span className="text-stone/40 text-sm font-light uppercase tracking-wide">
            Souvenirs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-paper p-6 border border-stone/10 rounded-sm flex items-center gap-6 group hover:border-cinnabar/30 transition-colors">
            <div className="w-16 h-16 bg-stone/10 rounded-full flex items-center justify-center shrink-0">
              <div className="text-2xl">☕</div>
            </div>
            <div>
              <h4 className="font-serif text-lg text-ink">溫泉杯</h4>
              <p className="text-xs text-stone uppercase tracking-wide mb-1">
                Spa Porcelain Cup
              </p>
              <p className="text-xs text-stone/70">
                馬利安傳統飲泉專用杯，造型優雅。
              </p>
            </div>
          </div>
          <div className="bg-paper p-6 border border-stone/10 rounded-sm flex items-center gap-6 group hover:border-cinnabar/30 transition-colors">
            <div className="w-16 h-16 bg-stone/10 rounded-full flex items-center justify-center shrink-0">
              <Sparkles className="text-stone/40 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-ink">水晶銼刀</h4>
              <p className="text-xs text-stone uppercase tracking-wide mb-1">
                Bohemian Crystal File
              </p>
              <p className="text-xs text-stone/70">
                捷克特產，耐用且精美的指甲護理工具。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
