import type { GrupoServicios } from "@/types/contenido";

export const GRUPOS_SERVICIOS: GrupoServicios[] = [
  {
    slug: "contabilidad",
    nombre: "Contabilidad",
    resumenCorto: "Libros al día y estados financieros que puede entender y usar.",
    items: [
      "Contabilidad mensual y llevanza de libros oficiales",
      "Estados financieros bajo NIIF para Pymes / Grupo 3",
      "Conciliaciones bancarias y cierre contable anual",
      "Implementación y manejo de software contable (Siigo, entre otros)",
    ],
    descripcionLarga: [
      "Una empresa que no lleva su contabilidad al día no solo se expone a sanciones: pierde la información que necesita para tomar decisiones. ACEF se encarga de que sus libros oficiales estén completos, actualizados y listos para cualquier requerimiento, mes a mes.",
      "Preparamos sus estados financieros bajo el marco técnico normativo colombiano (NIIF para Pymes o Grupo 3, según el tamaño de su empresa), hacemos las conciliaciones bancarias periódicas y organizamos el cierre contable de cada año fiscal con tiempo, no a última hora.",
      "Si su empresa usa Siigo u otro software contable, lo ayudamos a implementarlo o a ponerlo al día; si no tiene ninguno, le recomendamos una opción acorde al tamaño de su operación.",
    ],
    metaTitulo: "Contabilidad mensual y estados financieros | ACEF",
    metaDescripcion:
      "Contabilidad mensual, libros oficiales, estados financieros bajo NIIF para Pymes y manejo de software contable para empresas colombianas.",
  },
  {
    slug: "impuestos-y-dian",
    nombre: "Impuestos y DIAN",
    resumenCorto: "Declaraciones a tiempo y respaldo si la DIAN lo requiere.",
    items: [
      "Inscripción y actualización del RUT",
      "Declaración de IVA, retención en la fuente e ICA",
      "Renta de personas naturales y jurídicas",
      "Información exógena (medios magnéticos)",
      "Facturación electrónica y documento soporte",
      "Respuesta a requerimientos y trámites ante la DIAN",
    ],
    descripcionLarga: [
      "El calendario tributario colombiano no perdona los plazos, y las obligaciones cambian según el tipo de contribuyente. ACEF se encarga de identificar qué le corresponde declarar y de presentarlo a tiempo: IVA, retención en la fuente, ICA, y la declaración de renta de personas naturales o jurídicas.",
      "Gestionamos también la inscripción y actualización de su RUT, el reporte de información exógena cuando aplica, y la puesta en marcha de la facturación electrónica y el documento soporte exigidos por la DIAN.",
      "Si le llega un requerimiento, una invitación a corregir o cualquier comunicación de la DIAN, la revisamos con usted y preparamos la respuesta dentro de los términos que exige la entidad.",
    ],
    metaTitulo: "Impuestos, DIAN y declaraciones | ACEF",
    metaDescripcion:
      "IVA, retención en la fuente, ICA, renta, exógena, facturación electrónica y respuesta a requerimientos de la DIAN, para empresas y personas naturales en Colombia.",
  },
  {
    slug: "nomina-y-seguridad-social",
    nombre: "Nómina y seguridad social",
    resumenCorto: "Nómina, prestaciones y seguridad social sin errores que le cuesten después.",
    items: [
      "Liquidación de nómina, prestaciones sociales y liquidaciones definitivas",
      "Aportes a seguridad social (PILA)",
      "Asesoría pensional: historia laboral, semanas cotizadas y requisitos de pensión",
      "Corrección de inconsistencias ante fondos y EPS",
    ],
    descripcionLarga: [
      "Un error en la liquidación de nómina o en el pago de seguridad social se convierte, con el tiempo, en un problema mucho más grande de resolver. ACEF liquida su nómina, sus prestaciones sociales y las liquidaciones definitivas de sus trabajadores, y presenta los aportes a seguridad social a través de PILA cada mes.",
      "También ofrecemos asesoría pensional: revisamos su historia laboral, verificamos las semanas cotizadas, le explicamos qué requisitos le faltan para pensionarse y lo acompañamos en la corrección de inconsistencias ante fondos de pensiones y EPS cuando la historia laboral no refleja lo realmente cotizado.",
    ],
    metaTitulo: "Nómina, PILA y asesoría pensional | ACEF",
    metaDescripcion:
      "Liquidación de nómina y prestaciones sociales, aportes a seguridad social (PILA) y asesoría pensional: historia laboral, semanas cotizadas y corrección de inconsistencias.",
  },
  {
    slug: "asesoria-empresarial-y-financiera",
    nombre: "Asesoría empresarial y financiera",
    resumenCorto: "Acompañamiento desde la creación de su empresa hasta su operación diaria.",
    items: [
      "Creación de empresa y trámites en Cámara de Comercio",
      "Acompañamiento en pagos de impuestos y calendario tributario",
      "Asesoría contable y financiera continua",
    ],
    descripcionLarga: [
      "Si está empezando, lo acompañamos en la creación de su empresa y en los trámites ante la Cámara de Comercio, para que arranque con la estructura correcta desde el primer día.",
      "Si ya está operando, le ayudamos a organizar sus pagos de impuestos frente al calendario tributario que le corresponde según su NIT, y le damos asesoría contable y financiera continua para que sus decisiones de negocio estén respaldadas por información real, no por suposiciones.",
    ],
    metaTitulo: "Creación de empresa y asesoría financiera | ACEF",
    metaDescripcion:
      "Creación de empresa, trámites en Cámara de Comercio y acompañamiento contable y financiero continuo para micro, pequeñas y medianas empresas en Colombia.",
  },
];

export function obtenerGrupoServicio(slug: string) {
  return GRUPOS_SERVICIOS.find((grupo) => grupo.slug === slug);
}
