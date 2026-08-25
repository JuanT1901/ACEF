import { Seccion } from "@/components/ui/Seccion";
import { PREGUNTAS_FRECUENTES } from "@/content/faq";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PREGUNTAS_FRECUENTES.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };

  return (
    <Seccion
      id="preguntas-frecuentes"
      eyebrow="Preguntas frecuentes"
      titulo="Antes de escribirnos, quizás esto ya responda su duda"
      descripcion="Si su caso es distinto, la forma más rápida de resolverlo es escribirnos directamente por WhatsApp."
    >
      <div className="divide-y divide-acef-borde border-y border-acef-borde">
        {PREGUNTAS_FRECUENTES.map((item) => (
          <details key={item.pregunta} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-titulos text-base font-bold text-acef-azul900">
              {item.pregunta}
              <span
                aria-hidden="true"
                className="flex-shrink-0 text-xl text-acef-azul800 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-acef-texto-secundario">{item.respuesta}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Seccion>
  );
}
