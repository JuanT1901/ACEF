import type { Metadata } from "next";
import { BotonEnlace } from "@/components/ui/Boton";
import { FormularioContacto } from "@/components/formulario/FormularioContacto";
import { IconoRedSocial } from "@/components/ui/IconoRedSocial";
import {
  CIUDAD,
  COBERTURA,
  EMAIL_CONTACTO,
  HORARIO_ATENCION,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_NUMBER,
  construirEnlaceWhatsApp,
} from "@/content/contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbanos por WhatsApp o por el formulario de contacto de ACEF. Atendemos clientes en todo Colombia desde Zipaquirá.",
};

export default function Contacto() {
  return (
    <div className="mx-auto max-w-contenido px-4 py-14 sm:px-6 sm:py-20">
      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-azul800">Contacto</p>
      <h1 className="font-titulos text-3xl font-extrabold text-acef-azul900 sm:text-4xl">
        Hablemos de su contabilidad
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-acef-texto-secundario">
        La forma más rápida de recibir respuesta es por WhatsApp. Si prefiere, escríbanos por el
        formulario y le respondemos por correo.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <BotonEnlace href={construirEnlaceWhatsApp()} variante="whatsapp" externo className="w-full sm:w-auto">
            Escribir por WhatsApp
          </BotonEnlace>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-acef-texto">Cobertura</dt>
              <dd className="mt-1 text-acef-texto-secundario">
                Con base en {CIUDAD}. {COBERTURA}.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-acef-texto">Horario</dt>
              <dd className="mt-1 text-acef-texto-secundario">{HORARIO_ATENCION}</dd>
            </div>
            <div>
              <dt className="font-semibold text-acef-texto">WhatsApp</dt>
              <dd className="mt-1 text-acef-texto-secundario">+{WHATSAPP_NUMBER}</dd>
            </div>
            <div>
              <dt className="font-semibold text-acef-texto">Correo</dt>
              <dd className="mt-1 text-acef-texto-secundario">
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

        <div className="rounded-md border border-acef-borde bg-white p-6">
          <FormularioContacto />
        </div>
      </div>
    </div>
  );
}
