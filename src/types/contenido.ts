export interface GrupoServicios {
  slug: string;
  nombre: string;
  resumenCorto: string;
  descripcionLarga: string[];
  items: string[];
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
