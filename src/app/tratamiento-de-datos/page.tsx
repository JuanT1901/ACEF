import type { Metadata } from "next";
import { ComentarioBorrador } from "@/components/ui/ComentarioBorrador";
import { CIUDAD, CONTADORA_NOMBRE, EMAIL_CONTACTO, construirEnlaceWhatsApp } from "@/content/contacto";
import { FECHA_ACTUALIZACION_POLITICAS, RESPONSABLE_IDENTIFICACION } from "@/content/legal";

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
      <h1 className="font-titulos text-3xl font-extrabold text-acef-azul900">
        Política de Tratamiento de Datos Personales
      </h1>
      <p className="mt-2 text-sm text-acef-texto-secundario">
        Conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015. Última actualización:{" "}
        {FECHA_ACTUALIZACION_POLITICAS}
      </p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-acef-texto">
        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-2">
            {CONTADORA_NOMBRE}, Contadora Pública, con actividad en {CIUDAD}, Colombia (
            {RESPONSABLE_IDENTIFICACION}), es la responsable del tratamiento de los datos
            personales que se recolectan a través de este sitio web.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
            2. Datos que se recolectan
          </h2>
          <p className="mt-2">
            A través del formulario de contacto de este sitio se recolectan los siguientes datos,
            entregados voluntariamente por el titular: nombre, nombre de la empresa (cuando
            aplica), correo electrónico, teléfono, servicio de interés y el contenido del mensaje
            enviado.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
            3. Finalidad del tratamiento
          </h2>
          <p className="mt-2">Los datos recolectados se utilizan exclusivamente para:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Responder las solicitudes de información enviadas a través del sitio.</li>
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
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
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
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
            5. Canal de atención de consultas y reclamos
          </h2>
          <p className="mt-2">
            Para ejercer cualquiera de los derechos anteriores, o para presentar consultas y
            reclamos sobre el tratamiento de sus datos personales, puede escribir a{" "}
            <a href={`mailto:${EMAIL_CONTACTO}`} className="font-semibold text-acef-azul800 underline">
              {EMAIL_CONTACTO}
            </a>{" "}
            o por{" "}
            <a
              href={construirEnlaceWhatsApp("Hola, quiero hacer una consulta sobre el tratamiento de mis datos personales")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-acef-azul800 underline"
            >
              WhatsApp
            </a>
            , indicando su solicitud de manera clara. La respuesta se dará dentro de los términos
            que establece la ley para este tipo de solicitudes.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
            6. Autorización
          </h2>
          <p className="mt-2">
            Al marcar la casilla de autorización en el formulario de contacto y enviar sus datos,
            el titular manifiesta que ha leído esta política y autoriza de manera libre, expresa e
            informada el tratamiento de sus datos personales para las finalidades aquí descritas.
          </p>
        </section>

        <section>
          <h2 className="font-titulos text-xl font-bold text-acef-azul900">
            7. Vigencia
          </h2>
          <p className="mt-2">
            Esta política rige desde la fecha de su última actualización, indicada al inicio de
            este documento, y permanecerá vigente mientras exista una base de datos con
            información personal sujeta a tratamiento por parte del responsable.
          </p>
        </section>
      </div>
    </div>
  );
}
