import type { Metadata } from "next";
import { Toaster } from "sonner";
import "@/app/globals.css";
import CalculatorLogo from "./components/CalculatorLogo";
import CalculatorHeader from "./components/CalculatorHeader";

export const metadata: Metadata = {
  title: {
    default: "Calculator Online – Free Calculators",
    template: "%s | Calculator.Online",
  },
  description:
    "Convert over 500 units of length, mass, volume, pressure and more in one click. Accurate, ad-free & mobile-friendly.",
  keywords: ["Calculators"],
  alternates: {
    canonical: "https://calculator.online",
  },
  openGraph: {
    type: "website",
    url: "https://calculator.online",
    siteName: "Calculator Online",
    title: "Calculator Online – Convert 500+ Units Instantly",
    description:
      "Convert over 500 units of length, mass, volume, pressure and more — fast, reliable & ad-free.",
    locale: "en_US",
    images: [
      {
        url: "https://calculator.online/logo.svg",
        width: 1200,
        height: 1200,
        alt: "Calculator Online – Free Unit calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@calculatoronline",
    creator: "@calculatoronline",
    title: "Calculator Online – Free Unit calculator",
    description: "Convert over 500 units in one click. Accurate, ad-free & mobile-friendly.",
    images: ["https://calculator.online/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-foreground selection:bg-primary selection:text-primary-foreground dark">
        <div className="md:min-h-screen antialiased flex flex-col gap-4 pt-4">
          <CalculatorLogo></CalculatorLogo>
          <CalculatorHeader></CalculatorHeader>
          {children}
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 1000,
            style: {
              backgroundColor: "var(--custom-card",
              boxShadow: "var(--shadow)",
              borderRadius: "calc(var(--radius) + 4px)",
              borderStyle: "var(--tw-border-style)",
              borderWidth: "1px",
              borderColor: "var(--border)",
            },
          }}
          expand={false}
          richColors
        />
      </body>
    </html>
  );
}
