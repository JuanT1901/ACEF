type Red = "whatsapp" | "instagram" | "tiktok";

const etiquetas: Record<Red, string> = {
  whatsapp: "Escribir por WhatsApp",
  instagram: "ACEF en Instagram",
  tiktok: "ACEF en TikTok",
};

function Trazo({ red }: { red: Red }) {
  switch (red) {
    case "whatsapp":
      return (
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.2.6 4.26 1.64 6.03L4 29l8.2-1.6A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 21.8c-1.9 0-3.68-.52-5.2-1.43l-.37-.22-4.36.85.9-4.26-.24-.38A9.76 9.76 0 0 1 5.2 15C5.2 9.04 10.04 4.2 16 4.2S26.8 9.04 26.8 15 21.96 24.8 16 24.8Zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      );
    case "instagram":
      return (
        <path d="M11 4h10a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H11a7 7 0 0 1-7-7V11a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V11a5 5 0 0 0-5-5H11Zm5 4.4a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 2.2a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm6.9-3.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
      );
    case "tiktok":
      return (
        <path d="M20.5 3h-3.7v17.3a3.3 3.3 0 1 1-2.8-3.27v-3.75a7.05 7.05 0 1 0 6.5 7.03v-9.3a8.9 8.9 0 0 0 5.5 1.9v-3.7a5.2 5.2 0 0 1-5.5-6.2Z" />
      );
  }
}

export function IconoRedSocial({
  red,
  url,
  className = "",
}: {
  red: Red;
  url: string | null;
  className?: string;
}) {
  if (!url) return null;

  return (
    <a
      href={url}
      aria-label={etiquetas[red]}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
        <Trazo red={red} />
      </svg>
    </a>
  );
}

export function LogoWhatsApp({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <Trazo red="whatsapp" />
    </svg>
  );
}
