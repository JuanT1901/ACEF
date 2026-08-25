import Link from "next/link";
import Image from "next/image";
import { IconoRedSocial } from "@/components/ui/IconoRedSocial";
import {
  CIUDAD,
  COBERTURA,
  EMAIL_CONTACTO,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_NUMBER,
  construirEnlaceWhatsApp,
} from "@/content/contacto";
import { GRUPOS_SERVICIOS } from "@/content/servicios";

export function Footer() {
  const anio = 2026;

  return (
    <footer className="bg-acef-azul900 text-white">
      <div className="mx-auto grid max-w-contenido gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-white p-1.5">
              <Image src="/logo.svg" alt="" width={28} height={28} aria-hidden="true" />
            </div>
            <span className="font-titulos text-lg font-extrabold tracking-tight">ACEF</span>
          </div>
          <p className="mt-3 text-sm text-white/80">
            Asesoría Contable, Empresarial y Financiera. Con base en {CIUDAD}. {COBERTURA}.
          </p>
        </div>

        <div>
          <h3 className="font-titulos text-sm font-bold uppercase tracking-wide text-white/70">
            Servicios
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {GRUPOS_SERVICIOS.map((grupo) => (
              <li key={grupo.slug}>
                <Link href={`/servicios/${grupo.slug}`} className="text-white/90 hover:text-white">
                  {grupo.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-titulos text-sm font-bold uppercase tracking-wide text-white/70">
            Legal
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/contacto" className="text-white/90 hover:text-white">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad" className="text-white/90 hover:text-white">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/tratamiento-de-datos" className="text-white/90 hover:text-white">
                Tratamiento de datos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-titulos text-sm font-bold uppercase tracking-wide text-white/70">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>
              <a href={construirEnlaceWhatsApp()} target="_blank" rel="noopener noreferrer">
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_CONTACTO}`}>{EMAIL_CONTACTO}</a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <IconoRedSocial red="whatsapp" url={construirEnlaceWhatsApp()} />
            <IconoRedSocial red="instagram" url={INSTAGRAM_URL} />
            <IconoRedSocial red="tiktok" url={TIKTOK_URL} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-contenido px-4 py-4 text-xs text-white/70 sm:px-6">
          © {anio} ACEF. Contenido de carácter informativo; no constituye asesoría tributaria
          formal ni reemplaza la revisión de un caso particular.
        </div>
      </div>
    </footer>
  );
}
