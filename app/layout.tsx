import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Keith Byne — Learning Experience Designer",
  description:
    "Portfolio of Keith Byne: instructional design, adult learning programmes, and educational software. Based in Seville, working remotely across Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <div className="wrap">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
