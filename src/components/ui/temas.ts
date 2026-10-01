import type { TemaColor } from "@/types/contenido";

/**
 * Clases por color de marca. Respeta las reglas de tokens.css: el amarillo
 * nunca va como texto (solo bloque sólido con ícono/texto carbón), y el verde
 * de las cajas es la variante 700 para que el ícono blanco tenga contraste.
 * Las clases van completas (no interpoladas) para que Tailwind las detecte.
 */
export const CLASES_TEMA: Record<
  TemaColor,
  { caja: string; barra: string; etiqueta: string; bordeHover: string }
> = {
  azul: {
    caja: "bg-acef-azul text-white",
    barra: "bg-acef-azul",
    etiqueta: "text-acef-azul800",
    bordeHover: "hover:border-acef-azul",
  },
  amarillo: {
    caja: "bg-acef-amarillo text-acef-negro",
    barra: "bg-acef-amarillo",
    etiqueta: "text-acef-carbon",
    bordeHover: "hover:border-acef-amarillo",
  },
  verde: {
    caja: "bg-acef-verde700 text-white",
    barra: "bg-acef-verde",
    etiqueta: "text-acef-verde700",
    bordeHover: "hover:border-acef-verde",
  },
  negro: {
    caja: "bg-acef-negro text-acef-amarillo",
    barra: "bg-acef-negro",
    etiqueta: "text-acef-negro",
    bordeHover: "hover:border-acef-negro",
  },
};
