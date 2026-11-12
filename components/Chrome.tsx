"use client";
import { useState } from "react";
import { Menu, X, MessageCircle, Camera as Instagram, MapPin } from "lucide-react";
import { Logo, btnRed } from "./ui";
import { nav, site, wa } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" aria-label="Spartacus Fight Gym – início"><Logo className="text-2xl" /></a>
        <nav aria-label="Principal" className="hidden gap-8 text-sm font-semibold uppercase tracking-widest lg:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="transition hover:text-blood">{l}</a>)}
        </nav>
        <a href={wa()} target="_blank" rel="noopener" className={`${btnRed} hidden !py-2 !text-base lg:inline-flex`}>Quero treinar</a>
        <button className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-white/10 bg-ink px-5 pb-6 lg:hidden">
          {nav.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 font-display text-3xl uppercase">{l}</a>
          ))}
          <a href={wa()} target="_blank" rel="noopener" className={`${btnRed} mt-3`}>Quero treinar</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div><Logo className="text-4xl" /></div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-2 text-sm uppercase tracking-widest text-white/70">
          {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-blood">{l}</a>)}
        </nav>
        <div className="space-y-3 text-white/70">
          <a href={site.instagram} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blood"><Instagram size={18} /> @spartacus_cascavel</a>
          <a href={wa()} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blood"><MessageCircle size={18} /> {site.phone}</a>
          <p className="flex items-start gap-2"><MapPin size={18} className="mt-1 shrink-0" /> {site.address}</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-xs text-white/40">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a href={wa()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110">
      <MessageCircle size={28} />
    </a>
  );
}
