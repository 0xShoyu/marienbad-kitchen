import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoSection from "@/components/PhotoSection";
import Menu from "@/components/Menu";
import Souvenirs from "@/components/Souvenirs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center selection:bg-ink selection:text-white">
      <Navbar />
      <Hero />
      <PhotoSection />
      <Menu />
      <Souvenirs />
      <Footer />
    </main>
  );
}
