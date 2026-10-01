import Link from "next/link";
import { Seccion } from "@/components/ui/Seccion";
import { Icono } from "@/components/ui/Icono";
import { CLASES_TEMA } from "@/components/ui/temas";
import { GRUPOS_SERVICIOS } from "@/content/servicios";
import { construirEnlaceWhatsApp } from "@/content/contacto";

export function ServiciosGrid() {
  const servicios = GRUPOS_SERVICIOS.flatMap((grupo) =>
    grupo.items.map((item) => ({ ...item, grupo })),
  );

  return (
    <Seccion
      id="servicios"
      eyebrow="Qué hacemos"
      titulo="Servicios organizados por lo que usted necesita resolver"
      descripcion="Cuatro frentes de trabajo, según el momento en el que esté su empresa o su actividad independiente."
    >
      {/* Leyenda: cada área tiene su color y lleva a su página */}
      <nav aria-label="Áreas de servicio" className="mb-8 flex flex-wrap gap-2">
        {GRUPOS_SERVICIOS.map((grupo) => (
          <Link
            key={grupo.slug}
            href={`/servicios/${grupo.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-acef-borde bg-white px-4 py-2 text-sm font-semibold text-acef-negro transition-colors hover:border-acef-negro"
          >
            <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${CLASES_TEMA[grupo.tema].barra}`} />
            {grupo.nombre}
          </Link>
        ))}
      </nav>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicios.map(({ nombre, icono, grupo }) => {
          const tema = CLASES_TEMA[grupo.tema];
          return (
            <li key={nombre}>
              <Link
                href={`/servicios/${grupo.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-acef-borde bg-white p-5 pt-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg ${tema.bordeHover}`}
              >
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${tema.barra}`} />
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${tema.caja}`}
                >
                  <Icono nombre={icono} />
                </span>
                <span className={`mt-4 text-xs font-bold uppercase tracking-wide ${tema.etiqueta}`}>
                  {grupo.nombre}
                </span>
                <span className="mt-1 flex-1 font-titulos text-base font-bold leading-snug text-acef-negro">
                  {nombre}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-4 text-sm font-semibold text-acef-azul800 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  Ver más →
                </span>
              </Link>
            </li>
          );
        })}

        {/* Cierre de la cuadrícula: completa la última fila en escritorio */}
        <li className="lg:col-span-3">
          <a
            href={construirEnlaceWhatsApp("Hola, necesito un servicio contable que no veo en la página")}
            target="_blank"
            rel="noopener noreferrer"
            className="faceta flex h-full flex-col justify-center gap-2 bg-acef-negro p-6 text-white transition-colors hover:bg-acef-negro800 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span aria-hidden="true" className="mb-3 block h-1 w-10 bg-acef-amarillo" />
              <span className="block font-titulos text-lg font-extrabold">
                ¿No ve lo que necesita?
              </span>
              <span className="mt-1 block text-sm text-white/85">
                Cuéntenos su caso y le decimos cómo podemos ayudarle.
              </span>
            </span>
            <span className="mt-3 shrink-0 text-sm font-semibold text-acef-amarillo sm:mt-0">
              Escribir por WhatsApp →
            </span>
          </a>
        </li>
      </ul>
    </Seccion>
  );
}
