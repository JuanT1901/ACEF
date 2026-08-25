import { Hero } from "@/components/secciones/Hero";
import { ServiciosGrid } from "@/components/secciones/ServiciosGrid";
import { ComoTrabajamos } from "@/components/secciones/ComoTrabajamos";
import { PorQueAcef } from "@/components/secciones/PorQueAcef";
import { Faq } from "@/components/secciones/Faq";
import { ContactoSeccion } from "@/components/secciones/ContactoSeccion";

export default function Inicio() {
  return (
    <>
      <Hero />
      <ServiciosGrid />
      <ComoTrabajamos />
      <PorQueAcef />
      <Faq />
      <ContactoSeccion />
    </>
  );
}
