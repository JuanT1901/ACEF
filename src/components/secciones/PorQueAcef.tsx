const RAZONES = [
  {
    titulo: "Equipo interdisciplinario",
    descripcion:
      "Contaduría pública, asesoría empresarial y asesoría financiera trabajando de forma coordinada sobre su cuenta, no una sola persona atendiendo todos los frentes.",
  },
  {
    titulo: "Comunicación directa por WhatsApp",
    descripcion:
      "Sin líneas de atención impersonales ni intermediarios: usted escribe directamente con el equipo que lleva su contabilidad.",
  },
  {
    titulo: "Cumplimiento de los plazos DIAN",
    descripcion:
      "Cada declaración se prepara y se radica dentro del plazo que le corresponde según su obligación.",
  },
  {
    titulo: "Manejo de software contable",
    descripcion:
      "Implementación y uso de herramientas contables, para que su información esté organizada y disponible cuando la necesite.",
  },
];

export function PorQueAcef() {
  return (
    <section id="por-que-acef" className="scroll-mt-20 bg-acef-negro py-16 text-white sm:py-20">
      <div className="mx-auto max-w-contenido px-4 sm:px-6">
        <header className="max-w-2xl">
          <span aria-hidden="true" className="mb-4 block h-1 w-12 bg-acef-amarillo" />
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-acef-amarillo">
            Por qué ACEF
          </p>
          <h2 className="font-titulos text-3xl font-extrabold sm:text-4xl">
            Lo que puede esperar de nosotros
          </h2>
          <p className="mt-3 text-base text-white/85">
            Un equipo interdisciplinario enfocado en que su empresa cumpla, crezca y
            tome decisiones con información confiable.
          </p>
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
