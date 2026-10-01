import { LogoWhatsApp } from "@/components/ui/IconoRedSocial";
import { WHATSAPP_NUMBER, construirEnlaceWhatsApp } from "@/content/contacto";

/** "573108129971" → "+57 310 812 9971" */
function formatearNumero(numero: string) {
  const m = numero.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
  return m ? `+${m[1]} ${m[2]} ${m[3]} ${m[4]}` : `+${numero}`;
}

/** Bloque principal de contacto: el sitio atiende únicamente por WhatsApp. */
export function TarjetaWhatsApp() {
  return (
    <div className="faceta relative overflow-hidden bg-acef-verde800 p-8 text-white sm:p-10">
      <LogoWhatsApp className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 opacity-10" />

      <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-acef-verde800">
        <LogoWhatsApp className="h-8 w-8" />
      </span>
      <p className="mt-6 text-xs font-bold uppercase tracking-widest text-acef-amarillo">
        Respuesta directa
      </p>
      <p className="mt-2 font-titulos text-2xl font-extrabold leading-tight sm:text-3xl">
        Escríbanos por WhatsApp
      </p>
      <p className="mt-3 max-w-md text-white/85">
        Cuéntenos su caso y hable directamente con el equipo que lleva su contabilidad, sin
        formularios ni intermediarios.
      </p>

      <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <a
          href={construirEnlaceWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-acef-negro transition-colors hover:bg-acef-amarillo"
        >
          Iniciar conversación →
        </a>
        <span className="font-titulos text-lg font-bold tracking-wide">
          {formatearNumero(WHATSAPP_NUMBER)}
        </span>
      </div>
    </div>
  );
}
