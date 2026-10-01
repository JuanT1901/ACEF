"use client";

import { useState } from "react";
import { DIRECCION_COMPLETA, MAPA_EMBED_URL, MAPA_ENLACE_URL } from "@/content/contacto";

/**
 * El mapa de Google solo se carga cuando la persona lo pide: así el sitio no
 * instala cookies de terceros por defecto (ver /politica-de-privacidad) y la
 * página carga más rápido.
 */
export function MapaUbicacion() {
  const [cargado, setCargado] = useState(false);

  return (
    <div>
      <div className="faceta relative h-72 overflow-hidden border border-acef-borde bg-acef-fondo-alterno sm:h-80">
        {cargado ? (
          <iframe
            src={MAPA_EMBED_URL}
            title={`Mapa: ${DIRECCION_COMPLETA}`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
            {/* Trama de "calles" decorativa mientras el mapa no se ha cargado */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(var(--acef-borde) 2px, transparent 2px), linear-gradient(90deg, var(--acef-borde) 2px, transparent 2px), linear-gradient(35deg, transparent 48%, #d4d4d4 48%, #d4d4d4 52%, transparent 52%)",
                backgroundSize: "56px 56px, 56px 56px, 100% 100%",
              }}
            />
            <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-acef-azul text-white shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-7 w-7"
              >
                <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>
            <p className="relative font-titulos text-lg font-bold text-acef-negro">
              {DIRECCION_COMPLETA}
            </p>
            <button
              type="button"
              onClick={() => setCargado(true)}
              className="relative inline-flex items-center justify-center rounded-md bg-acef-negro px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-acef-negro800"
            >
              Ver mapa
            </button>
            <p className="relative max-w-sm text-xs text-acef-texto-secundario">
              Al cargar el mapa, Google puede instalar cookies en su navegador.
            </p>
          </div>
        )}
      </div>
      <a
        href={MAPA_ENLACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex text-sm font-semibold text-acef-azul800 hover:underline"
      >
        Abrir en Google Maps →
      </a>
    </div>
  );
}
