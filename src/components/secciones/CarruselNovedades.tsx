"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Icono } from "@/components/ui/Icono";
import { construirEnlaceWhatsApp } from "@/content/contacto";
import type { Novedad, TemaColor } from "@/types/contenido";

const INTERVALO_MS = 6500;

/** Fondo de cada diapositiva generada. Texto blanco sobre azul/verde 800 y negro (≥6:1). */
const ESTILO_DIAPOSITIVA: Record<
  TemaColor,
  { fondo: string; etiqueta: string; caja: string; detalle: string; boton: string }
> = {
  azul: {
    fondo: "bg-acef-azul800 text-white",
    etiqueta: "text-acef-amarillo",
    caja: "bg-white/15 text-white",
    detalle: "text-white/85",
    boton: "bg-acef-amarillo text-acef-negro hover:bg-white",
  },
  amarillo: {
    fondo: "bg-acef-amarillo text-acef-negro",
    etiqueta: "text-acef-negro",
    caja: "bg-acef-negro text-acef-amarillo",
    detalle: "text-acef-carbon",
    boton: "bg-acef-negro text-white hover:bg-acef-negro800",
  },
  verde: {
    fondo: "bg-acef-verde800 text-white",
    etiqueta: "text-acef-amarillo",
    caja: "bg-white/15 text-white",
    detalle: "text-white/85",
    boton: "bg-white text-acef-negro hover:bg-acef-amarillo",
  },
  negro: {
    fondo: "bg-acef-negro text-white",
    etiqueta: "text-acef-amarillo",
    caja: "bg-acef-amarillo text-acef-negro",
    detalle: "text-white/85",
    boton: "bg-acef-amarillo text-acef-negro hover:bg-white",
  },
};

/** Hexágono decorativo, eco del logo. */
function HexagonoDecorativo() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 opacity-15"
    >
      <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="none" stroke="currentColor" strokeWidth="6" />
      <polygon points="50,22 76,37 76,63 50,78 24,63 24,37" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

function Diapositiva({ novedad }: { novedad: Novedad }) {
  const enlace = construirEnlaceWhatsApp(novedad.mensajeWhatsApp);

  if (novedad.imagen) {
    return (
      <a href={enlace} target="_blank" rel="noopener noreferrer" className="relative block h-full w-full">
        <Image
          src={novedad.imagen}
          alt={novedad.imagenAlt ?? novedad.titulo}
          fill
          sizes="(min-width: 1024px) 28rem, 100vw"
          className="object-cover"
        />
      </a>
    );
  }

  const estilo = ESTILO_DIAPOSITIVA[novedad.tema];
  return (
    <div className={`relative flex h-full flex-col overflow-hidden p-7 sm:p-8 ${estilo.fondo}`}>
      <HexagonoDecorativo />
      <span className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${estilo.caja}`}>
        <Icono nombre={novedad.icono} className="h-7 w-7" />
      </span>
      <p className={`mt-6 text-xs font-bold uppercase tracking-widest ${estilo.etiqueta}`}>
        {novedad.etiqueta}
      </p>
      <h3 className="mt-2 font-titulos text-2xl font-extrabold leading-tight">{novedad.titulo}</h3>
      <p className={`mt-3 flex-1 text-sm leading-relaxed sm:text-base ${estilo.detalle}`}>
        {novedad.detalle}
      </p>
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative mt-6 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${estilo.boton}`}
      >
        Consultar por WhatsApp →
      </a>
    </div>
  );
}

export function CarruselNovedades({ novedades }: { novedades: Novedad[] }) {
  const [actual, setActual] = useState(0);
  const [pausadoPorUsuario, setPausadoPorUsuario] = useState(false);
  const [enInteraccion, setEnInteraccion] = useState(false);
  const [movimientoReducido, setMovimientoReducido] = useState(false);
  const inicioToque = useRef<number | null>(null);
  const total = novedades.length;

  const ir = useCallback((indice: number) => setActual((indice + total) % total), [total]);

  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMovimientoReducido(consulta.matches);
    const alCambiar = (e: MediaQueryListEvent) => setMovimientoReducido(e.matches);
    consulta.addEventListener("change", alCambiar);
    return () => consulta.removeEventListener("change", alCambiar);
  }, []);

  const avanzando = !pausadoPorUsuario && !enInteraccion && !movimientoReducido && total > 1;

  useEffect(() => {
    if (!avanzando) return;
    const id = window.setTimeout(() => ir(actual + 1), INTERVALO_MS);
    return () => window.clearTimeout(id);
  }, [avanzando, actual, ir]);

  if (total === 0) return null;

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Novedades tributarias"
      className="w-full min-w-0"
      onMouseEnter={() => setEnInteraccion(true)}
      onMouseLeave={() => setEnInteraccion(false)}
      onFocus={() => setEnInteraccion(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setEnInteraccion(false);
      }}
    >
      <div
        className="faceta relative overflow-hidden shadow-xl"
        onTouchStart={(e) => (inicioToque.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (inicioToque.current === null) return;
          const delta = e.changedTouches[0].clientX - inicioToque.current;
          if (Math.abs(delta) > 40) ir(delta < 0 ? actual + 1 : actual - 1);
          inicioToque.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${actual * 100}%)` }}
          aria-live={avanzando ? "off" : "polite"}
        >
          {novedades.map((novedad, indice) => (
            <div
              key={novedad.titulo}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${indice + 1} de ${total}: ${novedad.titulo}`}
              aria-hidden={indice !== actual}
              inert={indice !== actual}
              className="relative min-h-[23rem] w-full shrink-0"
            >
              <Diapositiva novedad={novedad} />
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {novedades.map((novedad, indice) => (
              <button
                key={novedad.titulo}
                type="button"
                onClick={() => ir(indice)}
                aria-label={`Ir a la diapositiva ${indice + 1}: ${novedad.titulo}`}
                aria-current={indice === actual}
                className="flex h-6 items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    indice === actual ? "w-7 bg-acef-negro" : "w-2 bg-acef-borde hover:bg-acef-texto-secundario"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {!movimientoReducido && (
              <BotonControl
                etiqueta={pausadoPorUsuario ? "Reanudar carrusel" : "Pausar carrusel"}
                onClick={() => setPausadoPorUsuario((p) => !p)}
              >
                {pausadoPorUsuario ? <path d="M8 5v14l11-7L8 5Z" /> : <path d="M9 5v14M15 5v14" />}
              </BotonControl>
            )}
            <BotonControl etiqueta="Diapositiva anterior" onClick={() => ir(actual - 1)}>
              <path d="m15 18-6-6 6-6" />
            </BotonControl>
            <BotonControl etiqueta="Diapositiva siguiente" onClick={() => ir(actual + 1)}>
              <path d="m9 18 6-6-6-6" />
            </BotonControl>
          </div>
        </div>
      )}
    </section>
  );
}

function BotonControl({
  etiqueta,
  onClick,
  children,
}: {
  etiqueta: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={etiqueta}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-acef-borde bg-white text-acef-negro transition-colors hover:border-acef-negro"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        {children}
      </svg>
    </button>
  );
}
