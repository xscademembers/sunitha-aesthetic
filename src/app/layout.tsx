import type { Metadata, Viewport } from "next";
import { Prata, Roboto, Marcellus, Newsreader, Jost } from "next/font/google";
import { AppointmentPopup } from "@/components/AppointmentPopup";
import { JsonLd } from "@/components/JsonLd";
import {
  clinicJsonLd,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/seo";
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

export const viewport: Viewport = {
  themeColor: "#A1534E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Dr. Sunita Ghanta", url: `${SITE_URL}/about` }],
  creator: "Dr. Sunita Ghanta",
  publisher: SITE_NAME,
  category: "health",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/seo/favicon.png" },
      { url: "/images/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/seo/favicon.png",
    apple: "/seo/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE,
        alt: "Dr. Sunita Ghanta, board-certified plastic surgeon in Visakhapatnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Visakhapatnam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${prata.variable} ${roboto.variable} ${marcellus.variable} ${newsreader.variable} ${jost.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <JsonLd data={clinicJsonLd()} />
        {children}
        <AppointmentPopup />
      </body>
    </html>
  );
}
