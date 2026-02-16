"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  MessageCircle,
  Menu,
  X,
  MapPin,
  UtensilsCrossed,
  ScrollText,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "美味菜單", href: "/menu", icon: <UtensilsCrossed size={14} /> },
    { name: "水晶銼刀", href: "/souvenirs", icon: <Sparkles size={14} /> },
    { name: "常見問題", href: "/#faq", icon: <HelpCircle size={14} /> },
    { name: "品牌故事", href: "/#story", icon: <ScrollText size={14} /> },
    { name: "餐廳位置", href: "/#contact", icon: <MapPin size={14} /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled || !isHomePage
            ? "bg-[#F2F0E6]/95 backdrop-blur-md border-emerald-900/10 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* --- Logo 區 --- */}
          <div className="flex items-center gap-4">
            <div
              className="relative group cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="bg-[#1a1a1a] px-5 py-2 rounded-sm shadow-lg border border-[#B45309] relative z-10 transition-transform duration-300 group-active:scale-95">
                <div className="flex items-center gap-2">
                  <h1 className="font-serif text-2xl font-black tracking-[0.2em] text-[#FCD34D] select-none">
                    中華園
                  </h1>
                  <div className="w-5 h-5 bg-[#B93A32] rounded-xs flex items-center justify-center shadow-inner">
                    <span className="text-[10px] text-white font-serif writing-vertical leading-none opacity-90 select-none">
                      食
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border border-[#B93A32] translate-x-1 translate-y-1 rounded-sm -z-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300"></div>
            </div>

            <div
              className={`hidden lg:block transition-opacity duration-300 ${isScrolled || !isHomePage ? "opacity-0 w-0" : "opacity-100"}`}
            >
              <span className="text-emerald-900/60 text-xs font-serif tracking-[0.15em] border-l border-emerald-900/20 pl-4 uppercase">
                Marianske Lazne Chinese Kitchen
              </span>
            </div>
          </div>

          {/* --- 桌面端導航 --- */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-2 font-serif transition-colors text-sm tracking-widest relative ${
                  // 👈 增加「當前頁面」的高亮效果
                  pathname === link.href
                    ? "text-[#B93A32]"
                    : "text-emerald-900/80 hover:text-[#B93A32]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-1/2 w-1 h-1 bg-[#B93A32] rounded-full transition-opacity transform -translate-x-1/2 ${pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* --- 右側按鈕 --- */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="bg-[#B93A32] text-[#F2F0E6] px-4 py-2 rounded-sm text-xs tracking-wider flex items-center gap-2 hover:bg-[#991B1B] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline font-bold">微信預訂</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-emerald-900 hover:bg-emerald-900/5 rounded-sm transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- 移動端菜單 --- */}
      <div
        className={`fixed inset-0 z-40 bg-[#F2F0E6]/98 backdrop-blur-xl transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center gap-8 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          onClick={handleLogoClick}
          className="cursor-pointer mb-8 scale-110"
        >
          <div className="bg-[#1a1a1a] px-5 py-2 rounded-sm shadow-lg border border-[#B45309]">
            <h1 className="font-serif text-2xl font-black tracking-[0.2em] text-[#FCD34D]">
              中華園
            </h1>
          </div>
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 font-serif text-2xl text-emerald-950 hover:text-[#B93A32] transition-colors"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}

        <div className="w-12 h-[1px] bg-emerald-900/20 my-4"></div>
        <p className="text-emerald-900/60 text-xs tracking-widest uppercase">
          Marianske Lazne Chinese Kitchen
        </p>
      </div>
    </>
  );
}
