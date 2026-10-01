/**
 * Configuración central de contacto y redes.
 * Para activar Instagram o TikTok cuando existan las cuentas: reemplazar
 * el valor `null` por la URL real. Ningún componente necesita tocarse.
 */

export const WHATSAPP_NUMBER = "573108129971"; // formato internacional, sin '+'
export const WHATSAPP_MENSAJE_DEFECTO =
  "Hola, quiero información sobre los servicios de ACEF";

export function construirEnlaceWhatsApp(mensaje: string = WHATSAPP_MENSAJE_DEFECTO): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

// Cuentas aún no creadas. Dejar en `null` hasta que existan.
export const INSTAGRAM_URL: string | null = null;
export const TIKTOK_URL: string | null = null;

// PENDIENTE: confirmar correo de contacto real (ver PENDIENTES.md)
export const EMAIL_CONTACTO = "contacto@PENDIENTE-definir-dominio.co";

export const CIUDAD = "Zipaquirá";
export const COBERTURA = "Atendemos a clientes en todo Colombia de forma remota";

export const DIRECCION = "Diagonal 13 # 21-68";
export const DIRECCION_COMPLETA = `${DIRECCION}, ${CIUDAD}, Cundinamarca`;

const consultaMapa = encodeURIComponent(`${DIRECCION_COMPLETA}, Colombia`);
/** Mapa incrustable de Google (no requiere API key). */
export const MAPA_EMBED_URL = `https://www.google.com/maps?q=${consultaMapa}&output=embed`;
/** Abre la ubicación en Google Maps (app o web). */
export const MAPA_ENLACE_URL = `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`;

/**
 * USO EXCLUSIVAMENTE LEGAL. La comunicación comercial del sitio habla de un
 * equipo interdisciplinario, no de una persona; no usar estas constantes en
 * textos de marketing.
 *
 * El nombre se conserva porque la Ley 1581 de 2012 (Habeas Data) obliga a
 * identificar nominalmente al responsable del tratamiento de datos personales
 * en la política de privacidad. Ver /tratamiento-de-datos.
 */
export const RESPONSABLE_LEGAL_NOMBRE = "Heidy Lilian Escárraga Florido";
export const RESPONSABLE_LEGAL_CARGO = "Contadora Pública titulada";
// PENDIENTE: número de tarjeta profesional (no se debe inventar, ver PENDIENTES.md)
export const RESPONSABLE_LEGAL_TARJETA_PROFESIONAL = "T.P. [PENDIENTE]";

export const HORARIO_ATENCION = "Lunes a viernes, de 9:00 a. m. a 5:00 p. m.";
