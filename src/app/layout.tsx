import WithAuthLayout from "@/components/hoc";
import { NextThemeProvider, TanStackQueryProvider } from "@/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalkuli",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} suppressHydrationWarning>
        <TanStackQueryProvider>
          <NextThemeProvider>
            <WithAuthLayout>{children}</WithAuthLayout>
          </NextThemeProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
