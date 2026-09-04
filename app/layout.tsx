import type { Metadata } from "next";
import "./globals.css";

// Vercel runs this route through the Next.js server on every request.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "DEATHAR — Chapter 007",
  description: "An immersive sonic experience. Secure your place at Deathar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
