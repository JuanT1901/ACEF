import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BotonEnlace } from "@/components/ui/Boton";
import { Icono } from "@/components/ui/Icono";
import { CLASES_TEMA } from "@/components/ui/temas";
import { GRUPOS_SERVICIOS, obtenerGrupoServicio } from "@/content/servicios";
import { construirEnlaceWhatsApp } from "@/content/contacto";

export function generateStaticParams() {
  return GRUPOS_SERVICIOS.map((grupo) => ({ slug: grupo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const grupo = obtenerGrupoServicio(slug);
  if (!grupo) return {};

  return {
    title: grupo.metaTitulo,
    description: grupo.metaDescripcion,
    openGraph: {
      title: grupo.metaTitulo,
      description: grupo.metaDescripcion,
    },
  };
}

export default async function PaginaServicio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const grupo = obtenerGrupoServicio(slug);
  if (!grupo) notFound();

  const otrosGrupos = GRUPOS_SERVICIOS.filter((g) => g.slug !== grupo.slug);
  const mensajeWhatsApp = `Hola, quiero información sobre ${grupo.nombre.toLowerCase()}`;

  return (
    <>
      <section className="border-b border-acef-borde bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-contenido px-4 sm:px-6">
          <Link href="/#servicios" className="text-sm font-semibold text-acef-azul800 hover:underline">
            ← Todos los servicios
          </Link>
          <h1 className="mt-4 font-titulos text-3xl font-extrabold text-acef-negro sm:text-4xl">
            {grupo.nombre}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-acef-texto-secundario">{grupo.resumenCorto}</p>

          <div className="mt-8">
            <BotonEnlace href={construirEnlaceWhatsApp(mensajeWhatsApp)} variante="whatsapp" externo>
              Escribir por WhatsApp sobre {grupo.nombre.toLowerCase()}
            </BotonEnlace>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-contenido gap-10 px-4 sm:px-6 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4">
            {grupo.descripcionLarga.map((parrafo, indice) => (
              <p key={indice} className="text-base leading-relaxed text-acef-texto">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="faceta border border-acef-borde bg-acef-fondo-alterno p-6">
            <h2 className="font-titulos text-lg font-bold text-acef-negro">Qué incluye</h2>
            <ul className="mt-4 space-y-3">
              {grupo.items.map((item) => (
                <li key={item.nombre} className="flex items-center gap-3 text-sm text-acef-texto">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${CLASES_TEMA[grupo.tema].caja}`}
                  >
                    <Icono nombre={item.icono} className="h-4 w-4" />
                  </span>
                  <span>{item.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-acef-borde bg-acef-fondo-alterno py-14 sm:py-20">
        <div className="mx-auto max-w-contenido px-4 sm:px-6">
          <h2 className="font-titulos text-xl font-bold text-acef-negro">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otrosGrupos.map((otro) => (
              <Link
                key={otro.slug}
                href={`/servicios/${otro.slug}`}
                className="rounded-md border border-acef-borde bg-white p-4 text-sm font-semibold text-acef-azul800 transition-colors hover:border-acef-negro"
              >
                {otro.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
