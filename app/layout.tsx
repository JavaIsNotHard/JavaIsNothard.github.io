import type { Metadata } from "next";
import { Architects_Daughter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigation";

const architectsDaughter = Architects_Daughter({
  variable: "--font-architects",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jibesh Shrestha",
  description: "Personal Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${architectsDaughter.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-architects)' }}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
