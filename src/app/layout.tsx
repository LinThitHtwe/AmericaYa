import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const inter = Montserrat_Alternates({ subsets: ["cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "America Ya :D",
  description: "America Ya, Halo :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-romance-main text-scampi-main`}
      >
        {children}
      </body>
    </html>
  );
}
