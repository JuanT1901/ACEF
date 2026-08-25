export interface DatosFormularioContacto {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  autorizaTratamiento: boolean;
}

export type ErroresFormulario = Partial<Record<keyof DatosFormularioContacto, string>>;

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_TELEFONO = /^[0-9+()\s-]{7,20}$/;

export function validarFormularioContacto(datos: DatosFormularioContacto): ErroresFormulario {
  const errores: ErroresFormulario = {};

  if (!datos.nombre.trim()) {
    errores.nombre = "Por favor indique su nombre.";
  }

  if (!datos.correo.trim()) {
    errores.correo = "Por favor indique su correo electrónico.";
  } else if (!REGEX_CORREO.test(datos.correo.trim())) {
    errores.correo = "Este correo no parece válido. Revíselo, por favor.";
  }

  if (!datos.telefono.trim()) {
    errores.telefono = "Por favor indique un teléfono de contacto.";
  } else if (!REGEX_TELEFONO.test(datos.telefono.trim())) {
    errores.telefono = "Este teléfono no parece válido. Use solo números y, si aplica, indicativo.";
  }

  if (!datos.servicio) {
    errores.servicio = "Por favor seleccione el servicio de su interés.";
  }

  if (!datos.mensaje.trim()) {
    errores.mensaje = "Cuéntenos brevemente qué necesita.";
  }

  if (!datos.autorizaTratamiento) {
    errores.autorizaTratamiento =
      "Debe autorizar el tratamiento de sus datos personales para poder contactarlo.";
  }

  return errores;
}
