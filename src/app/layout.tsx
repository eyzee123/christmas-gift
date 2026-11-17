import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Christmas Surprise for You",
  description: "A little Christmas surprise, specially prepared for you.",
  openGraph: {
    title: "A Christmas Surprise for You",
    description: "A little Christmas surprise is waiting. Open your gift.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#10100e",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}