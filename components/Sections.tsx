import { Camera as Instagram, MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { Photo, Reveal, Tilt, Title, btnRed, btnGhost } from "./ui";
import { images, modalities, structure, team, gallery, site, wa, mapsQuery } from "@/lib/content";

const sec = "mx-auto max-w-7xl px-5 py-24 md:py-32";

export function About() {
  return (
    <section id="sobre" className={`${sec} grid items-center gap-12 md:grid-cols-2`}>
      <Reveal>
        <Title kicker="Sobre">Mais que uma academia. <span className="text-blood">Uma filosofia.</span></Title>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/75">
          A Spartacus é um espaço dedicado ao desenvolvimento físico, técnico e pessoal por meio do treinamento. Aqui, disciplina, respeito e determinação fazem parte de cada treino.
        </p>
      </Reveal>
      <Reveal delay={150} className="relative">
        <Photo {...images.about1} className="aspect-[4/5] w-4/5" />
        <Photo {...images.about2} className="!absolute -bottom-10 right-0 aspect-square w-1/2 border-8 border-ink" />
      </Reveal>
    </section>
  );
}

export function Modalities() {
  return (
    <section id="modalidades" className="bg-graphite">
      <div className={sec}>
        <Reveal><Title kicker="Modalidades">Escolha sua arte</Title></Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <Tilt>
                <article className="group relative aspect-[3/4] overflow-hidden">
                  <Photo src={m.src} alt={m.alt} className="!absolute inset-0 transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition group-hover:from-blood/80" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-4xl uppercase">{m.name}</h3>
                    <p className="mt-2 translate-y-2 text-white/80 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{m.text}</p>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Structure() {
  return (
    <section id="estrutura" className={sec}>
      <Reveal><Title kicker="Estrutura">Preparado para <span className="text-blood">evoluir?</span></Title></Reveal>
      <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">
        {structure.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className={`group relative overflow-hidden ${s.span ?? ""}`}>
            <Photo src={s.src} alt={s.alt} className="h-full w-full transition duration-700 group-hover:scale-105" />
            <span className="absolute bottom-0 left-0 bg-ink px-4 py-2 font-display text-xl uppercase">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="equipe" className="bg-graphite">
      <div className={sec}>
        <Reveal><Title kicker="Equipe">Quem guia o treino</Title></Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <Photo src={t.src} alt={t.alt} className="aspect-[3/4] grayscale transition hover:grayscale-0" />
              <h3 className="mt-4 font-display text-3xl uppercase">{t.name}</h3>
              <p className="text-sm uppercase tracking-widest text-blood">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className={sec}>
      <Reveal><Title kicker="Galeria">Direto do tatame</Title></Reveal>
      <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {gallery.map((g, i) => (
          <Reveal key={i} delay={(i % 4) * 80} className={`overflow-hidden ${g.span}`}>
            <Photo src={g.src} alt={g.alt} className="h-full w-full transition duration-700 hover:scale-110" />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href={site.instagram} target="_blank" rel="noopener" className={btnGhost}><Instagram size={20} /> Acompanhe nosso Instagram</a>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32 text-center">
      <Photo {...images.cta} className="!absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-ink/70" />
      <Reveal className="relative mx-auto max-w-4xl px-5">
        <h2 className="font-display text-5xl uppercase leading-[.95] md:text-8xl">Seu próximo nível <span className="text-blood">começa aqui.</span></h2>
        <p className="mt-6 text-xl text-white/80">Não espere o momento perfeito. Comece sua evolução hoje.</p>
        <a href={wa("Olá! Quero fazer parte da Spartacus.")} target="_blank" rel="noopener" className={`${btnRed} mt-10`}>Quero fazer parte da Spartacus</a>
      </Reveal>
    </section>
  );
}

export function Location() {
  return (
    <section id="contato" className={`${sec} grid gap-12 md:grid-cols-2`}>
      <Reveal>
        <Title kicker="Contato">Venha treinar</Title>
        <ul className="mt-8 space-y-4 text-lg text-white/80">
          <li className="flex gap-3"><MapPin className="shrink-0 text-blood" /> {site.address}</li>
          <li className="flex gap-3"><Phone className="shrink-0 text-blood" /> <a href={`tel:+${site.whatsapp}`}>{site.phone}</a></li>
          <li className="flex gap-3"><Instagram className="shrink-0 text-blood" /> <a href={site.instagram} target="_blank" rel="noopener">@spartacus_cascavel</a></li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`} target="_blank" rel="noopener" className={btnGhost}><Navigation size={20} /> Abrir rota</a>
          <a href={wa()} target="_blank" rel="noopener" className={btnRed}><MessageCircle size={20} /> WhatsApp</a>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <iframe title="Mapa da Spartacus Fight Gym" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
          className="h-96 w-full border-0 grayscale invert-[.9] contrast-90 md:h-full md:min-h-96" />
      </Reveal>
    </section>
  );
}
