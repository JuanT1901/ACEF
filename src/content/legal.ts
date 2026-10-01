import { RESPONSABLE_LEGAL_NOMBRE } from "@/content/contacto";

/**
 * Identificación del Responsable del Tratamiento.
 * Ley 1581 de 2012, art. 3 lit. e) — el Responsable puede ser persona natural
 * O jurídica. Decreto 1074 de 2015 — la política debe indicar su nombre o razón
 * social, domicilio, dirección, correo electrónico y teléfono.
 *
 * PENDIENTE — decisión bloqueante antes de publicar (ver PENDIENTES.md):
 * confirmar en el RUT o en la Cámara de Comercio cómo está constituida ACEF y
 * dejar activa UNA de las dos variantes. Un nombre comercial no tiene
 * personalidad jurídica: "ACEF" a secas no puede figurar como Responsable si
 * detrás no hay una sociedad constituida.
 *
 *   (a) ACEF es persona jurídica (S.A.S., LTDA…) con NIT propio:
 *       "ACEF S.A.S., identificada con NIT [el que corresponda]"
 *       — el nombre de la persona natural desaparece de esta página.
 *
 *   (b) ACEF es nombre comercial de una persona natural  ← ACTIVA
 *       — la persona queda identificada, como exige la ley.
 *
 * Queda activa (b) por ser la que falla de forma menos grave si nos
 * equivocamos: identifica a alguien real y localizable para ejercer derechos.
 * Con (a) aplicada por error a una persona natural, el titular de los datos se
 * quedaría sin nadie jurídicamente vinculado a quien reclamar.
 */
// PENDIENTE: identificación tributaria real (ver PENDIENTES.md)
export const RESPONSABLE_IDENTIFICACION = "NIT/C.C. [PENDIENTE]";

export const RESPONSABLE_TRATAMIENTO = `ACEF, nombre comercial de ${RESPONSABLE_LEGAL_NOMBRE}, Contadora Pública, identificada con ${RESPONSABLE_IDENTIFICACION}`;

// Variante (a), lista para activar cuando se confirme la constitución de la sociedad:
// export const RESPONSABLE_TRATAMIENTO = `ACEF S.A.S., identificada con ${RESPONSABLE_IDENTIFICACION}`;

// Fecha del propio documento (no es un plazo de la DIAN, es la versión de esta política).
export const FECHA_ACTUALIZACION_POLITICAS = "25 de agosto de 2026";
