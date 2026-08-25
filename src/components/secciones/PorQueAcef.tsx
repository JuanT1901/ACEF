import {
  CONTADORA_CARGO,
  CONTADORA_NOMBRE,
  CONTADORA_TARJETA_PROFESIONAL,
} from "@/content/contacto";

const RAZONES = [
  {
    titulo: "Contadora Pública titulada",
    descripcion: `${CONTADORA_NOMBRE}, ${CONTADORA_CARGO} (${CONTADORA_TARJETA_PROFESIONAL}), responde personalmente por su cuenta.`,
  },
  {
    titulo: "Comunicación directa por WhatsApp",
    descripcion:
      "Sin líneas de atención impersonales ni intermediarios: usted escribe directamente con quien lleva su contabilidad.",
  },
  {
    titulo: "Cumplimiento de los plazos DIAN",
    descripcion:
      "Cada declaración se prepara y se radica dentro del plazo que le corresponde según su obligación.",
  },
  {
    titulo: "Manejo de software contable",
    descripcion:
      "Implementación y uso de herramientas como Siigo, para que su información esté organizada y disponible cuando la necesite.",
  },
];

export function PorQueAcef() {
  return (
    <section id="por-que-acef" className="scroll-mt-20 bg-acef-azul900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-contenido px-4 sm:px-6">
        <header className="max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-amarillo">
            Por qué ACEF
          </p>
          <h2 className="font-titulos text-3xl font-extrabold sm:text-4xl">
            Lo que puede esperar de nosotros
          </h2>
        </header>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {RAZONES.map((razon) => (
            <div key={razon.titulo} className="border-l-2 border-acef-amarillo pl-4">
              <h3 className="font-titulos text-lg font-bold">{razon.titulo}</h3>
              <p className="mt-2 text-sm text-white/85">{razon.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
