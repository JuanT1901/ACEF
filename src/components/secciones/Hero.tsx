import Image from "next/image";
import { BotonEnlace } from "@/components/ui/Boton";
import { CIUDAD, construirEnlaceWhatsApp } from "@/content/contacto";

export function Hero() {
  return (
    <section className="border-b border-acef-borde bg-white">
      <div className="mx-auto grid max-w-contenido items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-acef-azul800">
            Asesoría contable con base en {CIUDAD}, para toda Colombia
          </p>
          <h1 className="font-titulos text-3xl font-extrabold leading-tight text-acef-azul900 sm:text-4xl lg:text-5xl">
            Su contabilidad y sus impuestos, al día, sin necesitar un contador
            de planta.
          </h1>
          <p className="mt-5 max-w-xl text-base text-acef-texto-secundario sm:text-lg">
            Llevamos la contabilidad, las declaraciones ante la DIAN y la nómina
            de su empresa o de su actividad independiente, con una contadora
            pública titulada a un mensaje de WhatsApp de distancia.
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

        <div className="hidden justify-center lg:flex">
          <Image
            src="/logo1.svg"
            alt="Hexágono con los tres galones del logo de ACEF"
            width={260}
            height={260}
            priority
          />
        </div>
      </div>
    </section>
  );
}
