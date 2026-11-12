"use client";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { Photo, btnRed, btnGhost } from "./ui";
import { images, wa } from "@/lib/content";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <Photo {...images.hero} priority className="!absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
      <div className="absolute inset-y-0 right-0 hidden w-3/5 motion-reduce:hidden md:block">
        <HeroScene />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-24">
        <h1 className="max-w-4xl font-display text-6xl uppercase leading-[.92] sm:text-8xl lg:text-[9rem]">
          Força.<br />Disciplina.<br /><span className="text-blood">Superação.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
          Mais do que treinar. Uma evolução constante dentro e fora do tatame.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#sobre" className={btnGhost}>Conheça a Spartacus</a>
          <a href={wa()} target="_blank" rel="noopener" className={btnRed}>Quero treinar</a>
        </div>
      </div>
      <ChevronDown className="absolute bottom-6 left-1/2 animate-bounce text-white/50 motion-reduce:animate-none" aria-hidden />
    </section>
  );
}
