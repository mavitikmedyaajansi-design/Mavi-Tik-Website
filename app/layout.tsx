import { BASE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavi Tik Dijital Medya Ajansı",
  //todo düzenlenecek
  description:
    "Mavi Tik Dijital Medya Ajansı Sitesi. Sosyal Medya, Dijital Pazarlama, Web Tasarım, E-Ticaret, Grafik Tasarım, Seo, Google Ads, Meta Reklam, İçerik Üretimi, Ürün Çekimleri...",
  metadataBase: new URL(BASE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: {
    name: "Yasir Köstekli",
    url: "https://yasirkostekli.com",
  },
  publisher: "Vercel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href={`${BASE_URL}/blog`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
