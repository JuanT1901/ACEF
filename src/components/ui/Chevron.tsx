/**
 * El galón ascendente del logo, reutilizado con disciplina como marcador
 * de progreso en "Cómo trabajamos". No usar como decoración en otras secciones.
 */
export function Chevron({
  color = "var(--acef-azul-800)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 48 28" className={className} aria-hidden="true">
      <polygon points="2,20 24,6 46,20 46,26 24,12 2,26" fill={color} />
    </svg>
  );
}
