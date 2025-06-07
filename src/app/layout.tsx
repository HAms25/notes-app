import type { Metadata } from "next";
import { montserrat, poppins, nunito } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anot",
  description: "Una sencilla aplicación para tomar notas",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
