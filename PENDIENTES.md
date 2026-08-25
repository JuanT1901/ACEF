# Pendientes — sitio web ACEF

Datos y assets que faltan por confirmar antes de publicar. No se inventó ninguno de estos
valores; donde falta un dato real, el sitio muestra un placeholder visible.

## Datos del negocio

- **Número de tarjeta profesional de la contadora** (Heidy Lilian Escárraga Florido). Se
  recibió como placeholder explícito. Aparece como `T.P. [PENDIENTE]` en
  `src/content/contacto.ts` (`CONTADORA_TARJETA_PROFESIONAL`). **No publicar el sitio sin
  este dato** — es un requisito de identificación profesional, no un detalle estético.
- **Correo de contacto real.** Actualmente `contacto@PENDIENTE-definir-dominio.co` en
  `src/content/contacto.ts` (`EMAIL_CONTACTO`).
- **Horario de atención.** Actualmente `[PENDIENTE definir]` en `src/content/contacto.ts`
  (`HORARIO_ATENCION`).
- **Dominio definitivo del sitio.** Se usó `https://acef-pendiente-dominio.co` como
  `metadataBase` en `src/app/layout.tsx` para que Open Graph tenga una URL válida; hay que
  reemplazarlo por el dominio real antes de publicar.
- **NIT o identificación del responsable del tratamiento**, usado en
  `/tratamiento-de-datos`. Está en `src/content/legal.ts`
  (`RESPONSABLE_IDENTIFICACION`) como `NIT [PENDIENTE]`. **No publicar el sitio sin este
  dato.**
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

## Proveedor del formulario de contacto

- El envío del formulario de `/contacto` usa `mailto:` a través de una única función
  `enviarContacto()` (se implementa en la etapa 4), tal como se indicó. Si más adelante se
  quiere un envío real sin abrir el cliente de correo del visitante (por ejemplo, Formspree
  o Resend), solo hay que cambiar la implementación interna de esa función.
