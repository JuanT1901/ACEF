import type { Metadata } from "next";
import Link from "next/link";
import { ComentarioBorrador } from "@/components/ui/ComentarioBorrador";
import { EMAIL_CONTACTO, construirEnlaceWhatsApp } from "@/content/contacto";
import { FECHA_ACTUALIZACION_POLITICAS } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo funciona el sitio web de ACEF respecto a la información de sus visitantes.",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <ComentarioBorrador />

      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-azul800">Legal</p>
      <h1 className="font-titulos text-3xl font-extrabold text-acef-negro">
        Política de privacidad del sitio web
      </h1>

      <div className="prose-acef mt-8 space-y-6 text-base leading-relaxed text-acef-texto">
        <p>
          Esta política explica cómo funciona el sitio web de ACEF en relación con la información
          de las personas que lo visitan. Para conocer en detalle cómo se tratan los datos
          personales que usted nos entrega al contactarnos por WhatsApp o correo electrónico, conforme a la Ley 1581 de
          2012 y el Decreto 1074 de 2015, consulte la{" "}
          <Link href="/tratamiento-de-datos" className="font-semibold text-acef-azul800 underline">
            Política de Tratamiento de Datos Personales
          </Link>
          .
        </p>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            Cookies y herramientas de analítica
          </h2>
          <p className="mt-2">
            Este sitio web no instala cookies de analítica ni de terceros, y no utiliza
            herramientas de rastreo publicitario. Por esa razón, no se muestra un banner de
            cookies: no hay nada que autorizar. Si en el futuro se incorpora alguna herramienta de
            este tipo, esta política se actualizará y se implementará el aviso correspondiente
            antes de activarla.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            Qué información recibe el sitio
          </h2>
          <p className="mt-2">
            El sitio no recolecta datos personales de forma directa: no tiene formularios ni
            almacena información de quienes lo visitan. Cuando usted decide escribirnos por
            WhatsApp o por correo electrónico, los datos que comparta en esa conversación se
            tratan conforme a la Política de Tratamiento de Datos Personales.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">Enlaces externos</h2>
          <p className="mt-2">
            El sitio incluye enlaces a WhatsApp y, cuando estén activas, a Instagram y TikTok.
            Estas plataformas tienen sus propias políticas de privacidad, independientes de esta,
            que se aplican una vez usted sale del sitio de ACEF.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">Contacto</h2>
          <p className="mt-2">
            Si tiene preguntas sobre esta política, el canal principal de atención es{" "}
            <a
              href={construirEnlaceWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-acef-azul800 underline"
            >
              WhatsApp
            </a>
            . También puede escribir al correo{" "}
            <a href={`mailto:${EMAIL_CONTACTO}`} className="font-semibold text-acef-azul800 underline">
              {EMAIL_CONTACTO}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">Vigencia</h2>
          <p className="mt-2">
            Esta política rige desde el {FECHA_ACTUALIZACION_POLITICAS}.
          </p>
        </section>
      </div>
    </div>
  );
}
