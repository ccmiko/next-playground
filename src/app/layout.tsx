import Navi from "@/app/navi";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles: CSSProperties = {
    minWidth: 300,
  };
  return (
    <html lang="ja">
      <body className={`${inter.className} ${"m-2 grid gap-4 justify-center"}`}>
        <Navi />
        <div style={styles}>{children}</div>
      </body>
    </html>
  );
}
