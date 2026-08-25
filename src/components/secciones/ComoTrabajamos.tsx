import Image from "next/image";
import { Seccion } from "@/components/ui/Seccion";
import { Chevron } from "@/components/ui/Chevron";
import { PASOS_PROCESO } from "@/content/comoTrabajamos";

export function ComoTrabajamos() {
  return (
    <Seccion
      id="como-trabajamos"
      eyebrow="Cómo trabajamos"
      titulo="Un proceso, cuatro pasos, sin sorpresas"
      descripcion="El mismo recorrido, mes a mes, desde el primer diagnóstico hasta el informe que le confirma que todo quedó al día."
      fondoAlterno
    >
      <div className="mb-8 flex items-center gap-3">
        <Image src="/logo.svg" alt="" width={32} height={32} aria-hidden="true" />
        <p className="text-sm text-acef-texto-secundario">
          Cada paso avanza sobre el anterior, como los galones del logo de ACEF.
        </p>
      </div>

      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PASOS_PROCESO.map((paso) => {
          const esUltimo = paso.numero === PASOS_PROCESO.length;
          const color = esUltimo ? "var(--acef-verde-800)" : "var(--acef-azul-800)";

          return (
            <li key={paso.numero} className="flex flex-col">
              <Chevron color={color} className="h-6 w-12" />
              <span
                className="mt-2 font-titulos text-sm font-extrabold"
                style={{ color }}
              >
                Paso {paso.numero}
              </span>
              <h3 className="mt-1 font-titulos text-lg font-bold text-acef-azul900">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm text-acef-texto-secundario">{paso.descripcion}</p>
            </li>
          );
        })}
      </ol>
    </Seccion>
  );
}
