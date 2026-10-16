import type { Metadata, Viewport } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import "./globals.css"

const _dmSans = DM_Sans({ subsets: ["latin"] })
const _fraunces = Fraunces({ subsets: ["latin"], axes: ["SOFT", "opsz"] })

export const metadata: Metadata = {
  title: "Doce Fórmula · Bolos e brigadeiros artesanais em Espinho",
  description:
    "Bolos de todo o tipo e brigadeiros gourmet feitos à mão por uma farmacêutica em Espinho. Encomendas para aniversários, batizados, eventos e presentes.",
  keywords: [
    "brigadeiros Espinho",
    "bolos Espinho",
    "bolos de aniversário",
    "doces para eventos",
    "brigadeiros gourmet",
    "bolos personalizados",
    "brigadeiros artesanais",
    "doces Aveiro",
    "encomendas bolos",
    "eventos Espinho",
  ],
  authors: [{ name: "Joana Coelho" }],
  creator: "Joana Coelho",
  publisher: "Doce Fórmula",
  robots: "index, follow",
  alternates: {
    canonical: "https://doceformula.pt",
  },
  openGraph: {
    title: "Doce Fórmula · Bolos e brigadeiros em Espinho",
    description: "Receitas de farmacêutica, doçura sem contraindicações.",
    locale: "pt_PT",
    type: "website",
    siteName: "Doce Fórmula",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Doce Fórmula - Bolos e brigadeiros artesanais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doce Fórmula · Bolos e brigadeiros em Espinho",
    description: "Receitas de farmacêutica, doçura sem contraindicações.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#1f6f50",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="bg-background scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f6f50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Doce Fórmula" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
