import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "By Ivi — Orçamentos de customização",
  description: "Orçamentos de customização de bonecas por Ivi Dias Weber.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
