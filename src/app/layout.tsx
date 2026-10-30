import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexorant.com"),
  title: {
    default: "Nexorant | Next-Generation Technology Partner",
    template: "%s | Nexorant",
  },
  description:
    "Nexorant is a premium international IT company delivering world-class software engineering, web development, mobile apps, AI solutions, and cloud services. Transform your vision into reality.",
  keywords: [
    "IT company",
    "software development",
    "web development",
    "mobile app development",
    "AI solutions",
    "cloud computing",
    "UI/UX design",
    "custom software",
    "Nexorant",
  ],
  authors: [{ name: "Nexorant" }],
  creator: "Nexorant",
  publisher: "Nexorant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexorant.com",
    siteName: "Nexorant",
    title: "Nexorant | Next-Generation Technology Partner",
    description:
      "Premium international IT company delivering world-class software engineering and technology solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexorant - Next-Generation Technology Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexorant | Next-Generation Technology Partner",
    description:
      "Premium international IT company delivering world-class software engineering and technology solutions.",
    images: ["/og-image.png"],
    creator: "@nexorant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-[#080A0C] text-[#F5F3F0] font-sans antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
