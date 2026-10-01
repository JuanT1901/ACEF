import type { ReactNode } from "react";

/**
 * Íconos de línea (24×24, trazo 2) dibujados para el sitio. Heredan el color
 * del texto (`currentColor`), así que se colorean con clases `text-*`.
 * Para agregar uno: sumar la entrada aquí y el nombre queda disponible en
 * el tipo `NombreIcono`.
 */
const TRAZOS = {
  libro: (
    <>
      <path d="M12 6.5C10.3 5 7.8 4.5 4 4.5v13c3.8 0 6.3.5 8 2 1.7-1.5 4.2-2 8-2v-13c-3.8 0-6.3.5-8 2Z" />
      <path d="M12 6.5v13" />
    </>
  ),
  grafico: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  banco: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7" />
      <path d="M3 20h18" />
    </>
  ),
  computador: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
      <path d="m8 11 2 2 4-4" />
    </>
  ),
  identificacion: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2" />
      <path d="M15 10h3M15 13h3" />
    </>
  ),
  porcentaje: (
    <>
      <path d="M19 5 5 19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </>
  ),
  calculadora: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 7h8" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 18h.01M12 18h.01M15.5 18h.01" />
    </>
  ),
  baseDatos: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </>
  ),
  factura: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  billetera: (
    <>
      <path d="M4 7.5V18a1.5 1.5 0 0 0 1.5 1.5H20V9H5.5A1.5 1.5 0 0 1 4 7.5Zm0 0A1.5 1.5 0 0 1 5.5 6H17V4" />
      <path d="M16 14.25h.01" />
    </>
  ),
  salud: (
    <>
      <path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
      <path d="M12 11v5M9.5 13.5h5" />
    </>
  ),
  reloj: (
    <>
      <path d="M7 3h10M7 21h10" />
      <path d="M8 3v3.5L12 12l4-5.5V3M8 21v-3.5L12 12l4 5.5V21" />
    </>
  ),
  lupa: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m20 20-5-5" />
      <path d="m8 10.5 1.8 1.8 3-3" />
    </>
  ),
  edificio: (
    <>
      <path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V21" />
      <path d="M15 9h3.5A1.5 1.5 0 0 1 20 10.5V21" />
      <path d="M3 21h18M8.5 7h3M8.5 11h3M8.5 15h3" />
    </>
  ),
  calendario: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </>
  ),
  tendencia: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type NombreIcono = keyof typeof TRAZOS;

export function Icono({
  nombre,
  className = "h-6 w-6",
}: {
  nombre: NombreIcono;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {TRAZOS[nombre]}
    </svg>
  );
}
