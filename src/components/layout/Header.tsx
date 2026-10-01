"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BotonEnlace } from "@/components/ui/Boton";
import { construirEnlaceWhatsApp } from "@/content/contacto";

const enlaces = [
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#como-trabajamos", texto: "Cómo trabajamos" },
  { href: "/#por-que-acef", texto: "Por qué ACEF" },
  { href: "/#preguntas-frecuentes", texto: "Preguntas frecuentes" },
  { href: "/contacto", texto: "Contacto" },
];

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-acef-borde bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-contenido items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuAbierto(false)}
        >
          <Image
            src="/logo.svg"
            alt=""
            width={36}
            height={36}
            aria-hidden="true"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-titulos text-xl font-extrabold tracking-tight text-acef-negro">
              ACEF
            </span>
            <span className="hidden text-[11px] font-medium text-acef-texto-secundario sm:block">
              Asesoría Contable, Empresarial y Financiera
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Principal"
        >
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="text-sm font-semibold text-acef-texto hover:text-acef-azul800"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BotonEnlace
            href={construirEnlaceWhatsApp()}
            variante="whatsapp"
            externo
          >
            Escribir por WhatsApp
          </BotonEnlace>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {menuAbierto ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#363435"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#363435"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {menuAbierto && (
        <nav
          id="menu-movil"
          aria-label="Principal móvil"
          className="border-t border-acef-borde bg-white lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-3">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-md px-2 py-2 text-sm font-semibold text-acef-texto hover:bg-acef-fondo-alterno"
                >
                  {enlace.texto}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <BotonEnlace
                href={construirEnlaceWhatsApp()}
                variante="whatsapp"
                externo
                className="w-full"
              >
                Escribir por WhatsApp
              </BotonEnlace>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
