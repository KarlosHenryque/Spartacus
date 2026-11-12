import type { Metadata, Viewport } from "next";
import { Anton, Barlow } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const barlow = Barlow({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-barlow" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Spartacus Fight Gym | Academia de lutas em Cascavel – PR",
  description: "Força. Disciplina. Superação. Treine na Spartacus Fight Gym, no centro de Cascavel – PR.",
  openGraph: { title: "Spartacus Fight Gym", description: "Mais do que treinar. Uma evolução constante dentro e fora do tatame.", locale: "pt_BR", type: "website" },
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };

const jsonLd = {
  "@context": "https://schema.org", "@type": "SportsActivityLocation", name: site.name,
  telephone: site.phone, sameAs: [site.instagram],
  address: { "@type": "PostalAddress", streetAddress: "Rua Paraná, 3400", addressLocality: "Cascavel", addressRegion: "PR", addressCountry: "BR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${barlow.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
