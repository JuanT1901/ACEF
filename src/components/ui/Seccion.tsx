import type { ReactNode } from "react";

export function Seccion({
  id,
  eyebrow,
  titulo,
  descripcion,
  className = "",
  fondoAlterno = false,
  children,
}: {
  id: string;
  eyebrow?: string;
  titulo: string;
  descripcion?: string;
  className?: string;
  fondoAlterno?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 ${fondoAlterno ? "bg-acef-fondo-alterno" : ""} ${className}`}
    >
      <div className="mx-auto max-w-contenido px-4 sm:px-6">
        <header className="max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-azul800">
              {eyebrow}
            </p>
          )}
          <h2 className="font-titulos text-3xl font-extrabold text-acef-azul900 sm:text-4xl">
            {titulo}
          </h2>
          {descripcion && (
            <p className="mt-3 text-base text-acef-texto-secundario">{descripcion}</p>
          )}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
