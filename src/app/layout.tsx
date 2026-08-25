import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
// CSS is processed by Next.js; TypeScript has no module declaration for it.
// @ts-expect-error Next.js resolves global CSS imports at build time.
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

// PENDIENTE: reemplazar por el dominio definitivo cuando exista (ver PENDIENTES.md)
const SITIO_URL = "https://acef-pendiente-dominio.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO_URL),
  title: {
    default: "ACEF — Asesoría Contable, Empresarial y Financiera",
    template: "%s | ACEF",
  },
  description:
    "ACEF es una firma de asesoría contable en Zipaquirá que lleva su contabilidad, sus impuestos y su nómina al día, con atención directa por WhatsApp para empresas de todo Colombia.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "ACEF",
    title: "ACEF — Asesoría Contable, Empresarial y Financiera",
    description:
      "Contabilidad, impuestos DIAN, nómina y seguridad social para micro, pequeñas y medianas empresas colombianas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${manrope.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col font-cuerpo">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
