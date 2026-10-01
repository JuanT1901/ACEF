import type { Metadata } from "next";
import { TarjetaWhatsApp } from "@/components/secciones/TarjetaWhatsApp";
import { IconoRedSocial } from "@/components/ui/IconoRedSocial";
import {
  COBERTURA,
  EMAIL_CONTACTO,
  HORARIO_ATENCION,
  INSTAGRAM_URL,
  TIKTOK_URL,
  construirEnlaceWhatsApp,
} from "@/content/contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbanos por WhatsApp y hable directamente con el equipo de ACEF. Atendemos clientes en todo Colombia desde Zipaquirá.",
};

export default function Contacto() {
  return (
    <div className="mx-auto max-w-contenido px-4 py-14 sm:px-6 sm:py-20">
      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-azul800">Contacto</p>
      <h1 className="font-titulos text-3xl font-extrabold text-acef-negro sm:text-4xl">
        Hablemos de su contabilidad
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-acef-texto-secundario">
        La forma más rápida de recibir respuesta es por WhatsApp.
      </p>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
        <TarjetaWhatsApp />

        <div>
          <dl className="space-y-6">
            <div className="border-l-2 border-acef-amarillo pl-4">
              <dt className="font-titulos font-bold text-acef-negro">Cobertura</dt>
              <dd className="mt-1 text-sm text-acef-texto-secundario">
                {COBERTURA}.
              </dd>
            </div>
            <div className="border-l-2 border-acef-amarillo pl-4">
              <dt className="font-titulos font-bold text-acef-negro">Horario</dt>
              <dd className="mt-1 text-sm text-acef-texto-secundario">{HORARIO_ATENCION}</dd>
            </div>
            <div className="border-l-2 border-acef-amarillo pl-4">
              <dt className="font-titulos font-bold text-acef-negro">Correo</dt>
              <dd className="mt-1 text-sm text-acef-texto-secundario">
                <a href={`mailto:${EMAIL_CONTACTO}`} className="hover:underline">
                  {EMAIL_CONTACTO}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex items-center gap-4 text-acef-azul800">
            <IconoRedSocial red="whatsapp" url={construirEnlaceWhatsApp()} />
            <IconoRedSocial red="instagram" url={INSTAGRAM_URL} />
            <IconoRedSocial red="tiktok" url={TIKTOK_URL} />
          </div>
        </div>
      </div>
    </div>
  );
}
