import type { PasoProceso } from "@/types/contenido";

export const PASOS_PROCESO: PasoProceso[] = [
  {
    numero: 1,
    titulo: "Diagnóstico inicial",
    descripcion:
      "Revisamos el estado actual de su contabilidad, sus obligaciones tributarias y su situación con la DIAN, para saber exactamente de dónde partimos.",
  },
  {
    numero: 2,
    titulo: "Entrega de documentos",
    descripcion:
      "Usted nos envía sus soportes (facturas, extractos, nómina) por el canal que le resulte más fácil. Le indicamos con claridad qué necesitamos y cada cuánto.",
  },
  {
    numero: 3,
    titulo: "Procesamiento y radicación",
    descripcion:
      "Registramos la información, preparamos sus declaraciones y las radicamos dentro de los plazos que le correspondan.",
  },
  {
    numero: 4,
    titulo: "Informe mensual",
    descripcion:
      "Le entregamos un informe mensual con el estado de su contabilidad y sus impuestos, para que siempre sepa en qué va su empresa.",
  },
];
