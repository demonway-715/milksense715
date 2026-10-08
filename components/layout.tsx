import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MilkSense AI | Smart Milk Monitoring",
  description:
    "An IoT and AI-powered milk fermentation monitoring and prediction system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}