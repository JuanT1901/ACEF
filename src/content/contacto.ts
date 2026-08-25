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
export const COBERTURA = "Atiende clientes en todo Colombia de forma remota";

export const CONTADORA_NOMBRE = "Heidy Lilian Escárraga Florido";
export const CONTADORA_CARGO = "Contadora Pública titulada";
// PENDIENTE: número de tarjeta profesional (no se debe inventar, ver PENDIENTES.md)
export const CONTADORA_TARJETA_PROFESIONAL = "T.P. [PENDIENTE]";

// PENDIENTE: confirmar horario real de atención (ver PENDIENTES.md)
export const HORARIO_ATENCION = "Horario de atención: [PENDIENTE definir]";
