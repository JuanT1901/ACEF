import { Seccion } from "@/components/ui/Seccion";
import { IconoRedSocial } from "@/components/ui/IconoRedSocial";
import { TarjetaWhatsApp } from "@/components/secciones/TarjetaWhatsApp";
import {
  COBERTURA,
  HORARIO_ATENCION,
  INSTAGRAM_URL,
  TIKTOK_URL,
  construirEnlaceWhatsApp,
} from "@/content/contacto";

export function ContactoSeccion() {
  const hayRedes = INSTAGRAM_URL !== null || TIKTOK_URL !== null;

  return (
    <Seccion
      id="contacto"
      eyebrow="Contacto"
      titulo="Cuéntenos qué necesita"
      descripcion="La forma más rápida de recibir respuesta es por WhatsApp."
    >
      <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
        <TarjetaWhatsApp />

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
          {hayRedes && (
            <div className="border-l-2 border-acef-amarillo pl-4">
              <dt className="font-titulos font-bold text-acef-negro">Redes</dt>
              <dd className="mt-2 flex items-center gap-4 text-acef-azul800">
                <IconoRedSocial red="whatsapp" url={construirEnlaceWhatsApp()} />
                <IconoRedSocial red="instagram" url={INSTAGRAM_URL} />
                <IconoRedSocial red="tiktok" url={TIKTOK_URL} />
              </dd>
            </div>
          )}
        </dl>
      </div>
    </Seccion>
  );
}
