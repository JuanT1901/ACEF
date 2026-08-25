import { EMAIL_CONTACTO } from "@/content/contacto";
import type { DatosFormularioContacto } from "@/lib/validacion";

export interface ResultadoEnvio {
  ok: boolean;
  mensaje: string;
}

/**
 * Único punto de envío del formulario de contacto. Hoy abre el cliente de
 * correo del visitante vía mailto:; si más adelante se conecta un proveedor
 * (Formspree, Resend, etc.) solo hay que cambiar el cuerpo de esta función,
 * no los componentes que la llaman.
 */
export async function enviarContacto(
  datos: DatosFormularioContacto,
): Promise<ResultadoEnvio> {
  try {
    const asunto = `Contacto desde el sitio web — ${datos.nombre}`;
    const cuerpo = [
      `Nombre: ${datos.nombre}`,
      datos.empresa ? `Empresa: ${datos.empresa}` : null,
      `Correo: ${datos.correo}`,
      `Teléfono: ${datos.telefono}`,
      `Servicio de interés: ${datos.servicio}`,
      "",
      "Mensaje:",
      datos.mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const enlaceMailto = `mailto:${EMAIL_CONTACTO}?subject=${encodeURIComponent(
      asunto,
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = enlaceMailto;

    return {
      ok: true,
      mensaje: "Abrimos su cliente de correo con el mensaje listo. Solo debe darle enviar.",
    };
  } catch {
    return {
      ok: false,
      mensaje:
        "No pudimos abrir su cliente de correo. Por favor escríbanos directamente por WhatsApp.",
    };
  }
}
