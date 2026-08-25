import { Seccion } from "@/components/ui/Seccion";
import { FormularioContacto } from "@/components/formulario/FormularioContacto";
import { IconoRedSocial } from "@/components/ui/IconoRedSocial";
import { BotonEnlace } from "@/components/ui/Boton";
import {
  CIUDAD,
  COBERTURA,
  INSTAGRAM_URL,
  TIKTOK_URL,
  construirEnlaceWhatsApp,
} from "@/content/contacto";

export function ContactoSeccion() {
  return (
    <Seccion
      id="contacto"
      eyebrow="Contacto"
      titulo="Cuéntenos qué necesita"
      descripcion="La forma más rápida de recibir respuesta es por WhatsApp. Si prefiere, también puede escribirnos por este formulario."
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <BotonEnlace href={construirEnlaceWhatsApp()} variante="whatsapp" externo className="w-full sm:w-auto">
            Escribir por WhatsApp
          </BotonEnlace>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-acef-texto">Cobertura</dt>
              <dd className="text-acef-texto-secundario">
                Con base en {CIUDAD}. {COBERTURA}.
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
    </Seccion>
  );
}
