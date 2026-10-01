import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variante = "primario" | "whatsapp" | "secundario";

const clasesBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed";

const clasesPorVariante: Record<Variante, string> = {
  primario: "bg-acef-negro text-white hover:bg-acef-negro800",
  whatsapp: "bg-acef-verde800 text-white hover:bg-[#245c24]",
  secundario:
    "border-2 border-acef-negro text-acef-negro bg-transparent hover:bg-acef-negro hover:text-white",
};

type PropsEnlace = {
  href: string;
  variante?: Variante;
  className?: string;
  children: ReactNode;
  externo?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function BotonEnlace({
  href,
  variante = "primario",
  className = "",
  children,
  externo = false,
  ...resto
}: PropsEnlace) {
  const clases = `${clasesBase} ${clasesPorVariante[variante]} ${className}`;

  if (externo) {
    return (
      <a href={href} className={clases} target="_blank" rel="noopener noreferrer" {...resto}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={clases} {...resto}>
      {children}
    </Link>
  );
}

type PropsBoton = {
  variante?: Variante;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Boton({ variante = "primario", className = "", children, ...resto }: PropsBoton) {
  return (
    <button className={`${clasesBase} ${clasesPorVariante[variante]} ${className}`} {...resto}>
      {children}
    </button>
  );
}
