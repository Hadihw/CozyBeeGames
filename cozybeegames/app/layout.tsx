import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sourGummy = localFont({
  src: "../public/assets/fonts/SourGummy-Regular.ttf",
  variable: "--font-sour-gummy",
  weight: "400 700", 
});

export const metadata: Metadata = {
  title: "Cozy Bee Games",
  description: "Games by Cozy Bee Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
