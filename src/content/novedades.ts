import type { Novedad } from "@/types/contenido";

/**
 * Diapositivas del carrusel de la portada.
 *
 * REVISAR CON LA CONTADORA antes de publicar y cada vez que cambie el
 * calendario tributario: los textos son generales a propósito (no citan días
 * exactos) para no quedar desactualizados, pero deben coincidir con el
 * calendario DIAN vigente.
 *
 * Para cambiar el carrusel solo se edita este arreglo: agregar, quitar o
 * reordenar entradas. Para usar una imagen propia (p. ej. diseñada en Canva),
 * guardarla en /public/novedades/ y llenar `imagen` e `imagenAlt`.
 */
export const NOVEDADES: Novedad[] = [
  {
    etiqueta: "Calendario tributario",
    titulo: "Declaración de renta de personas naturales",
    detalle:
      "Los plazos vencen entre agosto y octubre según los dos últimos dígitos de su NIT. Revisamos si está obligado a declarar y la presentamos a tiempo.",
    icono: "calendario",
    tema: "azul",
    mensajeWhatsApp: "Hola, quiero ayuda con mi declaración de renta",
  },
  {
    etiqueta: "Impuestos",
    titulo: "IVA bimestral: septiembre – octubre",
    detalle:
      "Este bimestre se declara y paga en noviembre. Tenga listas sus facturas de compra y venta para cerrar el periodo sin afanes.",
    icono: "porcentaje",
    tema: "amarillo",
    mensajeWhatsApp: "Hola, quiero ayuda con la declaración de IVA",
  },
  {
    etiqueta: "Obligación mensual",
    titulo: "Retención en la fuente",
    detalle:
      "Se declara y paga cada mes. Presentarla tarde genera sanción por extemporaneidad e intereses de mora.",
    icono: "calculadora",
    tema: "negro",
    mensajeWhatsApp: "Hola, quiero ayuda con la retención en la fuente",
  },
  {
    etiqueta: "DIAN",
    titulo: "Facturación electrónica y documento soporte",
    detalle:
      "Si vende bienes o servicios, o compra a personas no obligadas a facturar, la DIAN le exige estos documentos. Lo acompañamos en la habilitación.",
    icono: "factura",
    tema: "verde",
    mensajeWhatsApp: "Hola, quiero ayuda con la facturación electrónica",
  },
  {
    etiqueta: "Fin de año",
    titulo: "Planeación tributaria antes del 31 de diciembre",
    detalle:
      "Las decisiones que tome este año definen el impuesto que pagará el próximo. Revisemos su caso con tiempo.",
    icono: "tendencia",
    tema: "azul",
    mensajeWhatsApp: "Hola, quiero hacer planeación tributaria para este año",
  },
];
