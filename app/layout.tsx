import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEATHAR — Chapter 007",
  description: "An immersive sonic experience. Secure your place at Deathar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
