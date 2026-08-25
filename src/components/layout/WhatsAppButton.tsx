import { construirEnlaceWhatsApp } from "@/content/contacto";

export function WhatsAppButton() {
  return (
    <a
      href={construirEnlaceWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-acef-verde800 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.2.6 4.26 1.64 6.03L4 29l8.2-1.6A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 21.8c-1.9 0-3.68-.52-5.2-1.43l-.37-.22-4.36.85.9-4.26-.24-.38A9.76 9.76 0 0 1 5.2 15C5.2 9.04 10.04 4.2 16 4.2S26.8 9.04 26.8 15 21.96 24.8 16 24.8Zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
