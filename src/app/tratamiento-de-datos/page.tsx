import type { Metadata } from "next";
import { ComentarioBorrador } from "@/components/ui/ComentarioBorrador";
import { CIUDAD, EMAIL_CONTACTO, construirEnlaceWhatsApp } from "@/content/contacto";
import { FECHA_ACTUALIZACION_POLITICAS, RESPONSABLE_TRATAMIENTO } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description:
    "Política de Tratamiento de Datos Personales de ACEF, conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
  robots: { index: true, follow: true },
};

export default function TratamientoDeDatos() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <ComentarioBorrador />

      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-azul800">Legal</p>
      <h1 className="font-titulos text-3xl font-extrabold text-acef-negro">
        Política de Tratamiento de Datos Personales
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-acef-texto">
        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-2">
            {RESPONSABLE_TRATAMIENTO}, con domicilio en {CIUDAD}, Colombia, actúa como
            Responsable del Tratamiento de los datos personales que se recolectan a través
            de este sitio web.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            2. Datos que se recolectan
          </h2>
          <p className="mt-2">
            Cuando el titular se comunica con ACEF por WhatsApp o por correo electrónico, se
            recolectan los datos que entrega voluntariamente en esa comunicación: nombre, número
            de teléfono, correo electrónico (cuando aplica), nombre de la empresa (cuando aplica)
            y el contenido de los mensajes enviados.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            3. Finalidad del tratamiento
          </h2>
          <p className="mt-2">Los datos recolectados se utilizan exclusivamente para:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Responder las solicitudes de información enviadas por WhatsApp o correo electrónico.</li>
            <li>
              Gestionar la relación contractual, si el titular decide contratar los servicios de
              ACEF.
            </li>
            <li>
              Enviar comunicaciones relacionadas con los servicios solicitados o contratados.
            </li>
          </ul>
          <p className="mt-2">
            Los datos no se venden, alquilan ni comparten con terceros para fines comerciales o
            publicitarios distintos a los aquí descritos.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            4. Derechos del titular
          </h2>
          <p className="mt-2">
            Conforme al artículo 8 de la Ley 1581 de 2012, como titular de los datos usted tiene
            derecho a:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
            <li>
              Ser informado, previa solicitud, respecto del uso que se le ha dado a sus datos
              personales.
            </li>
            <li>
              Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por
              infracciones a la ley de protección de datos personales.
            </li>
            <li>
              Revocar la autorización otorgada y/o solicitar la supresión de sus datos, siempre
              que no exista un deber legal o contractual que impida su eliminación.
            </li>
            <li>Acceder de forma gratuita a sus datos personales.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            5. Canal de atención de consultas y reclamos
          </h2>
          <p className="mt-2">
            Para ejercer cualquiera de los derechos anteriores, o para presentar consultas y
            reclamos sobre el tratamiento de sus datos personales, el canal principal de
            atención es{" "}
            <a
              href={construirEnlaceWhatsApp("Hola, quiero hacer una consulta sobre el tratamiento de mis datos personales")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-acef-azul800 underline"
            >
              WhatsApp
            </a>
            , indicando su solicitud de manera clara. También puede dirigirla al correo{" "}
            <a href={`mailto:${EMAIL_CONTACTO}`} className="font-semibold text-acef-azul800 underline">
              {EMAIL_CONTACTO}
            </a>
            . La respuesta se dará dentro de los términos que establece la ley para este tipo
            de solicitudes.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            6. Autorización
          </h2>
          <p className="mt-2">
            Al escribir a ACEF por WhatsApp o por correo electrónico y entregar voluntariamente
            sus datos, el titular autoriza, mediante esta conducta inequívoca, el tratamiento de
            sus datos personales para las finalidades aquí descritas. Esta política está
            publicada en el sitio web y puede solicitarse en cualquier momento por los mismos
            canales.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-negro">
            7. Vigencia
          </h2>
          <p className="mt-2">
            Esta política se expide conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015,
            rige desde el {FECHA_ACTUALIZACION_POLITICAS} y permanecerá vigente mientras
            exista una base de datos con información personal sujeta a tratamiento por parte
            del responsable.
          </p>
        </section>
      </div>
    </div>
  );
}
