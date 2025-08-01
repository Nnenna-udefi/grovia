import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grovia",
  description: "We provide smart services for ambitious brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>{children}</body>
    </html>
  );
}
