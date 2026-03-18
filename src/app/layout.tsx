import type { Metadata } from "next";
import "@/styles/global.css";
import { Header } from "@/share/Header";

export const metadata: Metadata = {
  title: "Nikolay Lazarev",
  description:
    "Nikolay Lazarev is a wedding cinematographer known for his refined visual style and artistic approach to storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-[16px] lg:px-[40px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
