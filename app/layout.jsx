import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.aiexplorer.agency"),
  title: "AI Explorer Agency | AI-Powered Websites, Web Development & Digital Solutions",
  description:
    "AI Explorer Agency builds custom websites, AI-powered solutions, and digital experiences for businesses. Expert web development, AI integration, and digital growth services.",
  verification: {
    google: "tF-aEdEC2WiNKXms4UqZBe4nYvMQEE93HNTZee0fjpg",
  },
  alternates: {
    canonical: "https://www.aiexplorer.agency/",
  },
  openGraph: {
    title: "AI Explorer Agency | AI-Powered Websites & Digital Solutions",
    description:
      "Custom websites, AI-powered solutions, and digital experiences for growing businesses. Expert web development and AI integration services.",
    type: "website",
    url: "https://www.aiexplorer.agency/",
    images: ["https://www.aiexplorer.agency/assets/logo.png"],
    siteName: "AI Explorer Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Explorer Agency | AI-Powered Websites & Digital Solutions",
    description:
      "Custom websites, AI-powered solutions, and digital experiences for growing businesses.",
    images: ["https://www.aiexplorer.agency/assets/logo.png"],
  },
  icons: {
    icon: "/assets/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Explorer Agency",
  url: "https://www.aiexplorer.agency/",
  logo: "https://www.aiexplorer.agency/assets/logo.png",
  description:
    "AI Explorer Agency builds custom websites, AI-powered solutions, and digital experiences for businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "03143111118",
    contactType: "customer service",
    email: "aiexplorerinfo01@gmail.com",
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Jost:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
