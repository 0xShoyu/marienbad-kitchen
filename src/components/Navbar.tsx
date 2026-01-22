import React from "react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full px-6 py-4 flex justify-between items-center border-b border-ink/10 bg-paper/85 backdrop-blur-md z-50 transition-all shadow-sm">
      <div className="flex items-center">
        <div className="bg-sign-black px-4 py-2 rounded-sm shadow-md border border-stone/30">
          <h1 className="font-serif text-2xl font-black tracking-widest bg-gradient-to-b from-sign-gold-light to-sign-gold-dark bg-clip-text text-transparent drop-shadow-sm">
            中華園
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-stone text-[10px] tracking-widest uppercase">
            Marienbad Chinese Kitchen
          </p>
        </div>
        <a
          href="#contact"
          className="bg-ink text-paper px-3 py-1.5 rounded-sm text-xs tracking-wider flex items-center gap-2 hover:bg-ink/80 transition-colors"
        >
          <MessageCircle size={14} />
          <span className="hidden sm:inline">微信預訂</span>
        </a>
      </div>
    </nav>
  );
}
