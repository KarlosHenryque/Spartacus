// Fonte única de conteúdo. Troque os `src` por fotos reais em /public/images (ex.: "/images/hero.jpg").
// TODO(cliente): confirmar modalidades, professores e telefone com a academia antes de publicar.
export const site = {
  name: "Spartacus Fight Gym",
  url: "https://spartacus-cascavel.com.br", // TODO: domínio real
  phone: "(45) 99990-6046",
  whatsapp: "5545999906046",
  instagram: "https://www.instagram.com/spartacus_cascavel/",
  address: "Rua Paraná, 3400, Centro, Cascavel – PR",
};
export const wa = (msg = "Olá! Quero conhecer a Spartacus e começar a treinar.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const mapsQuery = encodeURIComponent(site.address);

export const nav = [
  ["Sobre", "#sobre"], ["Modalidades", "#modalidades"], ["Estrutura", "#estrutura"],
  ["Equipe", "#equipe"], ["Galeria", "#galeria"], ["Contato", "#contato"],
] as const;

type Item = { src?: string; alt: string };
export const images: Record<string, Item> = {
  hero: { src: "/images/boxing-training.jpg", alt: "Treino de luta na Spartacus" },
  about1: { src: "/images/gym-racks.jpg", alt: "Ambiente da Spartacus" },
  about2: { src: "/images/sparring.jpg", alt: "Alunos treinando" },
  cta: { src: "/images/boxing-ring.jpg", alt: "Luta na Spartacus" },
};

// PROVISÓRIO: lista a validar no Instagram da academia. Remova o que não for oferecido.
export const modalities: (Item & { name: string; text: string })[] = [
  { name: "Muay Thai", src: "/images/boxing-training.jpg", text: "A arte das oito armas.", alt: "Aula de Muay Thai" },
  { name: "Jiu-Jitsu", src: "/images/bjj.jpg", text: "Técnica, controle e estratégia no tatame.", alt: "Aula de Jiu-Jitsu" },
  { name: "Boxe", src: "/images/punching-bag.jpg", text: "Base, ritmo e precisão.", alt: "Aula de Boxe" },
  { name: "MMA", src: "/images/boxing-ring.jpg", text: "Todas as distâncias do combate.", alt: "Treino de MMA" },
];

export const structure: (Item & { label: string; span?: string })[] = [
  { label: "Ambiente de treino", src: "/images/gym-racks.jpg", alt: "Ambiente de treino", span: "md:col-span-2 md:row-span-2" },
  { label: "Equipamentos", src: "/images/punching-bag.jpg", alt: "Equipamentos" },
  { label: "Espaço de lutas", src: "/images/sparring.jpg", alt: "Espaço de lutas" },
  { label: "Tatame", src: "/images/bjj.jpg", alt: "Tatame", span: "md:col-span-2" },
];

// Fotos de banco (Unsplash License) são provisórias; troque pelas reais. Equipe: fotos e nomes provisórios, trocar pelos oficiais.
export const team: (Item & { name: string; role: string })[] = [
  { src: "/images/boxing-ring.jpg", name: "A confirmar", role: "Professor", alt: "Professor" },
  { src: "/images/boxing-training.jpg", name: "A confirmar", role: "Professor", alt: "Professor" },
  { src: "/images/punching-bag.jpg", name: "A confirmar", role: "Professor", alt: "Professor" },
];

export const gallery: (Item & { span: string })[] = [
  { src: "/images/sparring.jpg", alt: "Treino", span: "row-span-2" }, { src: "/images/bjj.jpg", alt: "Preparação", span: "" },
  { src: "/images/boxing-training.jpg", alt: "Atividade", span: "col-span-2" }, { src: "/images/punching-bag.jpg", alt: "Evento", span: "" },
  { src: "/images/gym-racks.jpg", alt: "Alunos", span: "row-span-2" }, { src: "/images/boxing-ring.jpg", alt: "Luta", span: "col-span-2" },
  { src: "/images/sparring.jpg", alt: "Treino", span: "" },
];
