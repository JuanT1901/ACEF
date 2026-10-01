import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        acef: {
          amarillo: "var(--acef-amarillo)",
          verde: "var(--acef-verde)",
          verde700: "var(--acef-verde-700)",
          verde800: "var(--acef-verde-800)",
          azul: "var(--acef-azul)",
          azul800: "var(--acef-azul-800)",
          azul900: "var(--acef-azul-900)",
          carbon: "var(--acef-carbon)",
          // Fallback literal: estos dos son superficies oscuras con texto blanco
          // encima. Si el token no cargara, el texto quedaría invisible.
          negro: "var(--acef-negro, #131313)",
          negro800: "var(--acef-negro-800, #2b2a2b)",
          fondo: "var(--acef-fondo)",
          "fondo-alterno": "var(--acef-fondo-alterno)",
          borde: "var(--acef-borde)",
          texto: "var(--acef-texto)",
          "texto-secundario": "var(--acef-texto-secundario)",
        },
      },
      fontFamily: {
        titulos: ["var(--font-titulos)"],
        cuerpo: ["var(--font-cuerpo)"],
      },
      maxWidth: {
        contenido: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
