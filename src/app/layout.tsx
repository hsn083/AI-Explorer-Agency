import type { Metadata } from "next";
import { Cinzel, Jost, Manrope } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI Explorer Agency | AI-Powered Websites, Web Development & Digital Solutions",
  description: "AI Explorer Agency builds custom websites, AI-powered solutions, and digital experiences for businesses. Expert web development, AI integration, and digital growth services.",
  metadataBase: new URL("https://www.aiexplorer.agency"),
  openGraph: {
    title: "AI Explorer Agency | AI-Powered Websites & Digital Solutions",
    description: "Custom websites, AI-powered solutions, and digital experiences for growing businesses. Expert web development and AI integration services.",
    type: "website",
    url: "https://www.aiexplorer.agency/",
    images: [
      {
        url: "https://www.aiexplorer.agency/assets/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "AI Explorer Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Explorer Agency | AI-Powered Websites & Digital Solutions",
    description: "Custom websites, AI-powered solutions, and digital experiences for growing businesses.",
    images: ["https://www.aiexplorer.agency/assets/logo.png"],
  },
  verification: {
    google: "tF-aEdEC2WiNKXms4UqZBe4nYvMQEE93HNTZee0fjpg",
  },
  icons: {
    icon: [
      { url: '/assets/logo.png', sizes: 'any', type: 'image/png' }
    ],
    apple: [
      { url: '/assets/logo.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI Explorer Agency",
  "url": "https://www.aiexplorer.agency/",
  "logo": "https://www.aiexplorer.agency/assets/logo.png",
  "description": "AI Explorer Agency builds custom websites, AI-powered solutions, and digital experiences for businesses.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92 322 9404392",
    "contactType": "customer service",
    "email": "aiexplorerinfo01@gmail.com"
  },
  "sameAs": []
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${jost.variable} ${manrope.variable}`}
    >
      <body>
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
