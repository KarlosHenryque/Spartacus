"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.15 });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${on ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

// Foto real quando `src` existe; senão, um slot escuro identificado.
export function Photo({ src, alt, className = "", priority = false }: { src?: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-steel ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width:768px) 50vw, 100vw" priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,#1a1a1a_0_14px,#141414_14px_28px)] text-xs uppercase tracking-[.3em] text-white/25">
          {alt}
        </div>
      )}
    </div>
  );
}

// Inclinação 3D que segue o mouse.
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current!, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const leave = () => ref.current && (ref.current.style.transform = "");
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  // TODO: trocar pelo logotipo oficial (public/logo.svg) quando fornecido.
  return (
    <span className={`font-display uppercase leading-none tracking-wider ${className}`}>
      Spartacus<span className="text-blood">.</span>
      <span className="block text-[.4em] tracking-[.5em] text-white/60">Fight Gym</span>
    </span>
  );
}

export const btn = "inline-flex items-center justify-center gap-2 px-7 py-4 font-display text-lg uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
export const btnRed = `${btn} bg-blood text-white hover:bg-white hover:text-ink`;
export const btnGhost = `${btn} border border-white/40 hover:border-blood hover:text-blood`;

export function Title({ kicker, children, className = "" }: { kicker?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      {kicker && <p className="mb-3 text-sm font-semibold uppercase tracking-[.4em] text-blood">{kicker}</p>}
      <h2 className="font-display text-5xl uppercase leading-[.95] md:text-7xl">{children}</h2>
    </div>
  );
}
