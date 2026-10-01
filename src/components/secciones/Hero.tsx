import { BotonEnlace } from "@/components/ui/Boton";
import { CarruselNovedades } from "@/components/secciones/CarruselNovedades";
import { construirEnlaceWhatsApp } from "@/content/contacto";
import { NOVEDADES } from "@/content/novedades";

export function Hero() {
  return (
    <section className="border-b border-acef-borde bg-white">
      <div className="mx-auto grid max-w-contenido items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-14">
        <div>
          <span aria-hidden="true" className="mb-4 block h-1 w-12 bg-acef-amarillo" />
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-acef-azul800">
            Asesoría contable para toda Colombia
          </p>
          <h1 className="font-titulos text-3xl font-extrabold leading-tight text-acef-negro sm:text-4xl lg:text-5xl">
            Su contabilidad y sus impuestos, al día, sin necesitar un contador
            de planta.
          </h1>
          <p className="mt-5 max-w-xl text-base text-acef-texto-secundario sm:text-lg">
            Llevamos la contabilidad, las declaraciones ante la DIAN y la nómina
            de su empresa o de su actividad independiente. Un equipo
            interdisciplinario a un mensaje de WhatsApp de distancia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BotonEnlace
              href={construirEnlaceWhatsApp()}
              variante="whatsapp"
              externo
            >
              Escribir por WhatsApp
            </BotonEnlace>
            <BotonEnlace href="#servicios" variante="secundario">
              Ver servicios
            </BotonEnlace>
          </div>
        </div>

        <CarruselNovedades novedades={NOVEDADES} />
      </div>
    </section>
  );
}
