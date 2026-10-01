# Pendientes — sitio web ACEF

Datos y assets que faltan por confirmar antes de publicar. No se inventó ninguno de estos
valores; donde falta un dato real, el sitio muestra un placeholder visible.

## Datos del negocio

- **Número de tarjeta profesional de la contadora** (Heidy Lilian Escárraga Florido). Se
  recibió como placeholder explícito. Aparece como `T.P. [PENDIENTE]` en
  `src/content/contacto.ts` (`RESPONSABLE_LEGAL_TARJETA_PROFESIONAL`). **No publicar el sitio sin
  este dato** — es un requisito de identificación profesional, no un detalle estético.
- **Correo de contacto real.** Actualmente `contacto@PENDIENTE-definir-dominio.co` en
  `src/content/contacto.ts` (`EMAIL_CONTACTO`).
- **Dominio definitivo del sitio.** Se usó `https://acef-pendiente-dominio.co` como
  `metadataBase` en `src/app/layout.tsx` para que Open Graph tenga una URL válida; hay que
  reemplazarlo por el dominio real antes de publicar.
- **Figura legal de ACEF y NIT del responsable del tratamiento.** Dos decisiones ligadas,
  ambas en `src/content/legal.ts`, usadas en `/tratamiento-de-datos`:
  1. **¿ACEF es persona jurídica o nombre comercial?** Confirmar en el RUT o en la Cámara
     de Comercio. La Ley 1581 de 2012 (art. 3 lit. e) permite que el Responsable sea
     persona natural o jurídica, pero un nombre comercial no tiene personalidad jurídica:
     si detrás no hay sociedad constituida, "ACEF" a secas no puede figurar como
     responsable y hay que nombrar a la persona natural. El archivo deja las dos
     variantes escritas; hoy está activa la de nombre comercial de persona natural, por
     ser la que falla de forma menos grave si la suposición es errónea. Cambiarla es una
     sola línea.
  2. **NIT o C.C. real** (`RESPONSABLE_IDENTIFICACION`), hoy `NIT/C.C. [PENDIENTE]`.

  **No publicar el sitio sin resolver ambas.**
- **Dirección física**: no se incluyó en ninguna parte del sitio porque no se proporcionó.
  Si se desea publicarla, indicarla y se agrega.

## Redes sociales

- Instagram y TikTok: cuentas aún no creadas. `INSTAGRAM_URL` y `TIKTOK_URL` están en `null`
  en `src/content/contacto.ts`. Los íconos ya están listos en el header y el footer y
  aparecerán automáticamente en cuanto se reemplacen esos dos valores por las URLs reales.
  No hay que tocar ningún componente.

## Assets de marca

- **Logo vectorial completo (ícono + wordmark "ACEF" + descriptor).** Solo se contaba con
  el JPG (`logo.jpg`). Se reconstruyó en vector únicamente el ícono (hexágono + los tres
  galones), como `public/logo.svg` (fondo claro) y `public/logo-oscuro.svg` (fondo oscuro,
  contorno del hexágono en color claro). El wordmark "ACEF" se compone en el sitio con
  tipografía (Manrope extrabold), no como parte del vector, para no inventar una
  reconstrucción imprecisa de la tipografía original a mano. **Cuando exista el archivo
  vectorial oficial del logo completo, reemplazar estos SVG y, si aplica, ajustar los
  componentes de header/footer para usar el lockup completo.**
- El favicon (`src/app/icon.svg`) se generó a partir del mismo ícono reconstruido.

## Contacto solo por WhatsApp

- Se retiró el formulario de contacto (portada y `/contacto`); el sitio atiende por WhatsApp
  y correo. Se ajustaron en consecuencia `/politica-de-privacidad` y `/tratamiento-de-datos`:
  ya no hablan de formulario ni de "casilla de autorización", y la autorización del titular
  se plantea por conducta inequívoca al escribir por WhatsApp o correo. **La contadora debe
  revisar este cambio.** Buena práctica sugerida: que el primer mensaje de respuesta en
  WhatsApp incluya el enlace a `/tratamiento-de-datos`.

## Carrusel de novedades (portada)

- **Revisar los textos con la contadora** en `src/content/novedades.ts`. Se escribieron
  generales a propósito (sin días exactos), pero deben coincidir con el calendario DIAN
  vigente y actualizarse cuando cambie la temporada (p. ej. quitar la de renta personas
  naturales cuando cierren los plazos).
- **Imágenes propias (opcional).** Cada diapositiva se dibuja con código y colores de marca.
  Para reemplazar una por una imagen (p. ej. hecha en Canva): exportarla en 4:3, mínimo
  1200×900 px, en `.webp` o `.jpg`, guardarla en `public/novedades/` y llenar `imagen` e
  `imagenAlt` en la entrada correspondiente. La imagen enlaza a WhatsApp con el mensaje de
  esa diapositiva.
