import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Los únicos SVG del sitio son archivos propios y estáticos (el ícono del
    // logo), sin contenido dinámico ni de terceros — seguro habilitarlos.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
