# Prompt para Claude Code — Sitio web ACEF

> Reemplaza lo que está entre `[[ ]]`. Lo que siga pendiente, déjalo como placeholder visible y registrado en `PENDIENTES.md`.

---

## PROMPT (copiar desde aquí)

Vas a construir desde cero el sitio web corporativo de ACEF, una firma de asesoría contable colombiana. Trabaja como el líder de diseño y desarrollo del proyecto: primero planea, luego construye. No escribas código hasta terminar el paso 1.

### 1. Contexto del negocio

- **Nombre:** ACEF
- **Descriptor de marca (va bajo el logo y en el `<title>`):** Asesoría Contable, Empresarial y Financiera
- **Ciudad / cobertura:** `[[Zipaquirá]]`, Colombia. Atiende clientes en todo el país de forma remota.
- **Contadora responsable:** `[[Heidy Lilian Escárraga Florido]]`, Contadora Pública titulada. Tarjeta profesional: `[[Placeholder]].
- **Cliente objetivo:** micro, pequeñas y medianas empresas colombianas, personas naturales con actividad comercial, independientes y profesionales que necesitan cumplir con la DIAN sin tener área contable propia.
- **Trabajo por hacer del visitante:** entender qué hace ACEF, confiar en que es seria, y escribir por WhatsApp en menos de 30 segundos.

### 2. Servicios a presentar

Organízalos en grupos coherentes; no los listes todos como una sola grilla plana:

**Contabilidad**
- Contabilidad mensual y llevanza de libros oficiales
- Estados financieros bajo NIIF para Pymes / Grupo 3
- Conciliaciones bancarias y cierre contable anual
- Implementación y manejo de software contable (Siigo, entre otros)

**Impuestos y DIAN**
- Inscripción y actualización del RUT
- Declaración de IVA, retención en la fuente, ICA
- Renta personas naturales y jurídicas
- Información exógena (medios magnéticos)
- Facturación electrónica y documento soporte
- Respuesta a requerimientos y trámites ante la DIAN

**Nómina y seguridad social**
- Liquidación de nómina, prestaciones sociales y liquidaciones definitivas
- Aportes a seguridad social (PILA)
- Asesoría pensional: revisión de historia laboral, semanas cotizadas, requisitos de pensión y corrección de inconsistencias

**Asesoría empresarial y financiera**
- Creación de empresa y trámites en Cámara de Comercio
- Acompañamiento en pagos de impuestos y calendario tributario
- Asesoría contable y financiera continua

### 3. Estructura del sitio

Landing principal de una sola página con anclas, más páginas de soporte:

- `/` — Inicio: hero, servicios, cómo trabajamos, por qué ACEF, preguntas frecuentes, contacto.
- `/servicios/[slug]` — una página por cada uno de los 4 grupos, con contenido propio y su propio CTA. Deben servir para SEO, no ser copias del bloque de inicio.
- `/contacto` — datos, horario, WhatsApp, formulario.
- `/politica-de-privacidad` y `/tratamiento-de-datos` — obligatorias (ver punto 7).

Secciones del inicio, en este orden:

1. **Hero** — propuesta de valor concreta, no genérica. Nada de "soluciones integrales para su empresa". Debe decir qué problema resuelve. CTA primario: WhatsApp. CTA secundario: ver servicios.
2. **Servicios** — los 4 grupos, cada uno con 3–5 ítems visibles y enlace a su página.
3. **Cómo trabajamos** — proceso real en pasos secuenciales: diagnóstico inicial → entrega de documentos → procesamiento y radicación → informe mensual. Ajusta los pasos si tienes mejor criterio, pero que sean concretos.
4. **Por qué ACEF** — contadora titulada con tarjeta profesional vigente, comunicación directa por WhatsApp, cumplimiento de plazos DIAN, manejo de software contable. Sin cifras inventadas.
5. **Preguntas frecuentes** — mínimo 8, escritas para alguien que no sabe de contabilidad. Ej.: ¿debo declarar renta?, ¿qué pasa si me llega un requerimiento de la DIAN?, ¿cómo entrego mis documentos?, ¿trabajan con empresas fuera de la ciudad?, ¿cuánto cuesta? Marca las FAQ con schema `FAQPage`.
6. **Contacto** — formulario + WhatsApp + redes.

### 4. Identidad visual

El logo ya existe y está en en la ruta base donde te inicié. Es un hexágono de contorno gris que contiene tres galones (chevrons) apilados apuntando hacia arriba — amarillo arriba, verde en medio, azul abajo — sobre un wordmark "ACEF" en una sans geométrica muy pesada, con el descriptor en itálica debajo.

**Paleta exacta, muestreada del archivo. Úsala tal cual:**

```css
--acef-amarillo: #FFCC2A;
--acef-verde:    #44AA44;
--acef-azul:     #2379C6;
--acef-carbon:   #363435;  /* el gris del wordmark */
```

Estas variantes oscurecidas son para texto y botones, porque los colores del logo no pasan contraste por sí solos. Verifícalas, no las cambies a ojo:

```css
--acef-azul-800:  #1A5A94;  /* 7.16:1 sobre blanco — texto y CTA primario */
--acef-azul-900:  #164E80;  /* 8.62:1 — encabezados sobre blanco */
--acef-verde-700: #337F33;  /* 4.97:1 — mínimo usable para texto verde */
--acef-verde-800: #2C6E2C;  /* 6.22:1 — CTA de WhatsApp */
```

**Reglas de uso, no negociables:**

- **El amarillo `#FFCC2A` tiene 1.51:1 contra blanco.** Es invisible como texto y no sirve para botones claros. Solo se usa como bloque sólido con texto carbón encima (8.19:1, correcto), como acento sobre superficies oscuras, o en el propio logo. Nunca como color de texto sobre blanco.
- El verde puro `#44AA44` (2.97:1) tampoco pasa como texto sobre blanco. Sirve como relleno de forma; para texto o iconografía usa `--acef-verde-700` o más oscuro.
- El azul es el color estructural y de confianza. El verde es acción y confirmación, incluido WhatsApp. El amarillo es acento puntual.
- Los tres juntos, al mismo peso y en la misma pantalla, se leen como bandera o como sitio infantil. Domina el azul, el verde entra en las acciones, el amarillo aparece poco y a propósito.

Define todo esto como CSS custom properties en un único archivo de tokens (`src/styles/tokens.css` o equivalente).

**Tipografía:** el wordmark es una sans geométrica de peso muy alto. Escoge una display que **armonice** con esa densidad en vez de competir con ella, y una face de texto legible en párrafo largo. Justifica la elección. No uses Inter para todo. Este es un sitio de confianza profesional: la legibilidad manda sobre la personalidad.

**Elemento distintivo:** el galón ascendente del logo es el motivo natural del sitio — funciona como marcador de la sección "Cómo trabajamos" porque la progresión hacia arriba codifica algo verdadero sobre un proceso secuencial. Úsalo ahí con disciplina. No lo repartas como decoración por todas las secciones.

**Antes de codificar**, escribe un plan de diseño corto: la paleta con sus roles, las tipografías con su rol, el concepto de layout, y el elemento distintivo. Revisa ese plan: si alguna parte es lo que producirías para cualquier sitio de servicios profesionales, cámbiala y explica por qué. Muéstrame el plan y espera mi visto bueno antes de construir.

**Restricción:** nada de fondo crema con serif de alto contraste y acento terracota, ni fondo casi negro con un único acento neón. Son los defaults de IA y se notan.

**Assets:** genera `public/logo.svg` y una versión para fondos oscuros. Si solo tienes el JPG, úsalo como `public/logo.jpg` optimizado y registra en `PENDIENTES.md` que hace falta el vectorial. Incluye favicon derivado del hexágono.

### 5. Redes y contacto

- **WhatsApp:** botón flotante persistente + CTA en hero y contacto. Enlace `https://wa.me/57[[3108129971]]?text=` con mensaje preescrito en español (ej.: "Hola, quiero información sobre los servicios de ACEF"). Número en una constante única, no repetido por el código.
- **Instagram y TikTok: las cuentas todavía no existen.** Deja la estructura lista — constantes `INSTAGRAM_URL` y `TIKTOK_URL` en el archivo de configuración de contacto, en `null` — y que los componentes de header y footer **oculten el ícono cuando el valor sea `null`**. Activar las redes después debe ser cambiar dos líneas, sin tocar componentes. Nada de enlaces a `#` ni a perfiles inventados.
- Los íconos que sí se rendericen llevan `aria-label` propio, `rel="noopener noreferrer"` y `target="_blank"`.
- **Formulario de contacto:** nombre, empresa (opcional), correo, teléfono, servicio de interés (select), mensaje. Validación en cliente, estados de carga y error redactados en la voz de la interfaz. Envío detrás de una única función `enviarContacto()` para poder cambiar de proveedor después; por ahora usa `[[mailto]]`. Checkbox obligatorio de autorización de tratamiento de datos.

### 6. Stack

- Next.js (App Router) + TypeScript + Tailwind CSS.
- Contenido de servicios y FAQ en archivos de datos tipados (`src/content/`), no incrustado en el JSX, para que la contadora pueda pedir cambios de texto sin tocar componentes.
- Sin CMS. Sin base de datos.
- Todo el contenido en español de Colombia. Trato de "usted".
- Deploy en Vercel. `README.md` con instalación, desarrollo y despliegue, escrito para alguien sin experiencia técnica.

### 7. Cumplimiento legal colombiano (no opcional)

- Página de **Política de Tratamiento de Datos Personales** conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015: finalidad del tratamiento, derechos del titular, canal de atención de consultas y reclamos, responsable del tratamiento.
- Autorización expresa en el formulario, con enlace a la política.
- Banner de cookies solo si efectivamente se instalan cookies de terceros. Si no hay analítica, no pongas banner.
- Redacta un borrador funcional, pero marca al inicio de cada página legal: `<!-- BORRADOR: debe ser revisado por la contadora antes de publicar -->`.

### 8. Reglas estrictas de contenido

- **No inventes:** NIT, dirección física, número de tarjeta profesional, años de experiencia, cantidad de clientes, testimonios, logos de clientes, ni precios.
- **No inventes fechas de vencimiento tributario.** Los plazos DIAN cambian cada año por decreto y dependen del último dígito del NIT. Si mencionas el calendario tributario, hazlo de forma genérica y remite a la fuente oficial.
- Donde falte un dato real, usa un placeholder evidente en el texto y regístralo en `PENDIENTES.md` en la raíz del repositorio.
- Nada de afirmaciones que garanticen resultados frente a la DIAN o ahorros de impuestos.

### 9. Calidad mínima

- Mobile-first. La mayoría del tráfico será desde celular.
- Responsive real hasta 360px, foco de teclado visible, `prefers-reduced-motion` respetado, contraste AA verificado (ver punto 4).
- Metadatos por página, Open Graph, `sitemap.xml`, `robots.txt`.
- Schema.org `AccountingService` con `areaServed: CO`, más `FAQPage` en las preguntas frecuentes.
- Imágenes optimizadas con `next/image`. Sin librerías pesadas de animación si no aportan.

### 10. Orden de trabajo

1. Plan de diseño (punto 4) y estructura de carpetas propuesta. **Detente y muéstramelo.**
2. Configuración del proyecto, tokens y layout base (header, footer, botón de WhatsApp).
3. Página de inicio completa con contenido real.
4. Páginas de servicios, contacto y legales.
5. SEO, accesibilidad, `README.md` y `PENDIENTES.md`.

Al terminar cada etapa, resume qué hiciste y qué decisiones tomaste por mí.

## FIN DEL PROMPT

---

## Pendientes antes de pegarlo

| Placeholder | Nota |
| Nombre y tarjeta profesional de la contadora | Si no la tienes, déjalo pendiente |
| Proveedor del formulario | Formspree es lo más rápido si no quieres backend |

Instagram y TikTok ya están resueltos en el prompt: quedan preparados y ocultos hasta que existan.
