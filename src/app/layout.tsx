import type { Metadata } from "next";
import { Prata, Roboto, Marcellus, Newsreader, Jost } from "next/font/google";
import { AppointmentPopup } from "@/components/AppointmentPopup";
import "./globals.css";

const prata = Prata({
  variable: "--font-prata",
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drsunitaesthetics.com"),
  title: "Dr Sunita Aesthetics | Cosmetic & Plastic Surgeon in Vizag.",
  description:
    "Dr. Sunita Ghanta is a well-known and Board certified plastic surgeon in Visakhapatnam who has been practicing for more than 17 years.",
  icons: {
    icon: "/seo/favicon.png",
    shortcut: "/seo/favicon.png",
    apple: "/seo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${prata.variable} ${roboto.variable} ${marcellus.variable} ${newsreader.variable} ${jost.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
        <AppointmentPopup />
      </body>
    </html>
  );
}
