import Link from "next/link";
import { Seccion } from "@/components/ui/Seccion";
import { GRUPOS_SERVICIOS } from "@/content/servicios";

export function ServiciosGrid() {
  return (
    <Seccion
      id="servicios"
      eyebrow="Qué hacemos"
      titulo="Servicios organizados por lo que usted necesita resolver"
      descripcion="Cuatro frentes de trabajo, según el momento en el que esté su empresa o su actividad independiente."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {GRUPOS_SERVICIOS.map((grupo) => (
          <article
            key={grupo.slug}
            className="faceta flex flex-col border border-acef-borde bg-white p-6"
          >
            <h3 className="font-titulos text-xl font-extrabold text-acef-azul900">
              {grupo.nombre}
            </h3>
            <p className="mt-2 text-sm text-acef-texto-secundario">{grupo.resumenCorto}</p>

            <ul className="mt-4 flex-1 space-y-2">
              {grupo.items.slice(0, 5).map((item) => (
                <li key={item} className="flex gap-2 text-sm text-acef-texto">
                  <span aria-hidden="true" className="mt-0.5 text-acef-verde700">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/servicios/${grupo.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-acef-azul800 hover:underline"
            >
              Ver servicio completo →
            </Link>
          </article>
        ))}
      </div>
    </Seccion>
  );
}
