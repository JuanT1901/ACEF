/**
 * Inserta el comentario HTML literal exigido en cada página legal, visible
 * en el código fuente para quien revise el sitio antes de publicarlo.
 */
export function ComentarioBorrador() {
  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: "<!-- BORRADOR: debe ser revisado por la contadora antes de publicar -->",
      }}
    />
  );
}
