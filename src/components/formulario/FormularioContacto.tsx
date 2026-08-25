"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Boton } from "@/components/ui/Boton";
import { GRUPOS_SERVICIOS } from "@/content/servicios";
import {
  validarFormularioContacto,
  type DatosFormularioContacto,
  type ErroresFormulario,
} from "@/lib/validacion";
import { enviarContacto } from "@/components/formulario/enviarContacto";

const DATOS_INICIALES: DatosFormularioContacto = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  servicio: "",
  mensaje: "",
  autorizaTratamiento: false,
};

type Estado = "inactivo" | "enviando" | "exito" | "error";

export function FormularioContacto() {
  const [datos, setDatos] = useState<DatosFormularioContacto>(DATOS_INICIALES);
  const [errores, setErrores] = useState<ErroresFormulario>({});
  const [estado, setEstado] = useState<Estado>("inactivo");
  const [mensajeEstado, setMensajeEstado] = useState<string | null>(null);

  function actualizarCampo<K extends keyof DatosFormularioContacto>(
    campo: K,
    valor: DatosFormularioContacto[K],
  ) {
    setDatos((anterior) => ({ ...anterior, [campo]: valor }));
  }

  async function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const erroresEncontrados = validarFormularioContacto(datos);
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      setEstado("error");
      setMensajeEstado("Revise los campos señalados antes de continuar.");
      return;
    }

    setEstado("enviando");
    setMensajeEstado(null);

    const resultado = await enviarContacto(datos);

    setEstado(resultado.ok ? "exito" : "error");
    setMensajeEstado(resultado.mensaje);

    if (resultado.ok) {
      setDatos(DATOS_INICIALES);
    }
  }

  const clasesCampo =
    "w-full rounded-md border border-acef-borde bg-white px-3 py-2 text-sm text-acef-texto placeholder:text-acef-texto-secundario/70 focus:border-acef-azul800";

  return (
    <form onSubmit={manejarEnvio} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1 block text-sm font-semibold text-acef-texto">
            Nombre *
          </label>
          <input
            id="nombre"
            type="text"
            className={clasesCampo}
            value={datos.nombre}
            onChange={(e) => actualizarCampo("nombre", e.target.value)}
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={errores.nombre ? "error-nombre" : undefined}
          />
          {errores.nombre && (
            <p id="error-nombre" className="mt-1 text-sm text-red-700">
              {errores.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="empresa" className="mb-1 block text-sm font-semibold text-acef-texto">
            Empresa (opcional)
          </label>
          <input
            id="empresa"
            type="text"
            className={clasesCampo}
            value={datos.empresa}
            onChange={(e) => actualizarCampo("empresa", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="correo" className="mb-1 block text-sm font-semibold text-acef-texto">
            Correo electrónico *
          </label>
          <input
            id="correo"
            type="email"
            className={clasesCampo}
            value={datos.correo}
            onChange={(e) => actualizarCampo("correo", e.target.value)}
            aria-invalid={Boolean(errores.correo)}
            aria-describedby={errores.correo ? "error-correo" : undefined}
          />
          {errores.correo && (
            <p id="error-correo" className="mt-1 text-sm text-red-700">
              {errores.correo}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className="mb-1 block text-sm font-semibold text-acef-texto">
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            className={clasesCampo}
            value={datos.telefono}
            onChange={(e) => actualizarCampo("telefono", e.target.value)}
            aria-invalid={Boolean(errores.telefono)}
            aria-describedby={errores.telefono ? "error-telefono" : undefined}
          />
          {errores.telefono && (
            <p id="error-telefono" className="mt-1 text-sm text-red-700">
              {errores.telefono}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className="mb-1 block text-sm font-semibold text-acef-texto">
          Servicio de su interés *
        </label>
        <select
          id="servicio"
          className={clasesCampo}
          value={datos.servicio}
          onChange={(e) => actualizarCampo("servicio", e.target.value)}
          aria-invalid={Boolean(errores.servicio)}
          aria-describedby={errores.servicio ? "error-servicio" : undefined}
        >
          <option value="">Seleccione una opción</option>
          {GRUPOS_SERVICIOS.map((grupo) => (
            <option key={grupo.slug} value={grupo.nombre}>
              {grupo.nombre}
            </option>
          ))}
          <option value="Otro / no estoy seguro">Otro / no estoy seguro</option>
        </select>
        {errores.servicio && (
          <p id="error-servicio" className="mt-1 text-sm text-red-700">
            {errores.servicio}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1 block text-sm font-semibold text-acef-texto">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className={clasesCampo}
          value={datos.mensaje}
          onChange={(e) => actualizarCampo("mensaje", e.target.value)}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="mt-1 text-sm text-red-700">
            {errores.mensaje}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-acef-texto">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 flex-shrink-0"
            checked={datos.autorizaTratamiento}
            onChange={(e) => actualizarCampo("autorizaTratamiento", e.target.checked)}
            aria-invalid={Boolean(errores.autorizaTratamiento)}
            aria-describedby={errores.autorizaTratamiento ? "error-autorizacion" : undefined}
          />
          <span>
            Autorizo a ACEF el tratamiento de mis datos personales conforme a la{" "}
            <Link href="/tratamiento-de-datos" className="font-semibold text-acef-azul800 underline">
              Política de Tratamiento de Datos Personales
            </Link>
            . *
          </span>
        </label>
        {errores.autorizaTratamiento && (
          <p id="error-autorizacion" className="mt-1 text-sm text-red-700">
            {errores.autorizaTratamiento}
          </p>
        )}
      </div>

      <Boton type="submit" variante="primario" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
      </Boton>

      {mensajeEstado && (
        <p
          role="status"
          className={`text-sm font-semibold ${
            estado === "exito" ? "text-acef-verde700" : "text-red-700"
          }`}
        >
          {mensajeEstado}
        </p>
      )}
    </form>
  );
}
