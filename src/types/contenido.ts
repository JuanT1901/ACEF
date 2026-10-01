import type { NombreIcono } from "@/components/ui/Icono";

export type TemaColor = "azul" | "amarillo" | "verde" | "negro";

export interface ServicioItem {
  nombre: string;
  icono: NombreIcono;
}

export interface GrupoServicios {
  slug: string;
  nombre: string;
  resumenCorto: string;
  descripcionLarga: string[];
  /** Color con el que se identifica el grupo en la cuadrícula de servicios. */
  tema: TemaColor;
  items: ServicioItem[];
  metaTitulo: string;
  metaDescripcion: string;
}

export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

export interface PasoProceso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface Novedad {
  /** Etiqueta corta sobre el título, p. ej. "Calendario tributario". */
  etiqueta: string;
  titulo: string;
  detalle: string;
  icono: NombreIcono;
  tema: TemaColor;
  /** Mensaje prellenado del botón de WhatsApp de la diapositiva. */
  mensajeWhatsApp: string;
  /**
   * Opcional: ruta de una imagen en /public (p. ej. "/novedades/renta.webp").
   * Si se indica, la diapositiva muestra la imagen en lugar del diseño generado.
   * Proporción recomendada 4:3, mínimo 1200×900 px.
   */
  imagen?: string;
  /** Texto alternativo obligatorio cuando hay imagen. */
  imagenAlt?: string;
}
