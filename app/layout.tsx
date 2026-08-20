import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/background/aurora-background";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tejaskumar.dev"),
  title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
  description: `${PORTFOLIO_DATA.personal.tagline} IIT Patna Mathematics & Computing graduate. Experienced SDE Intern at Vivriti Capital.`,
  keywords: [
    "Tejas Kumar",
    "Software Engineer",
    "SDE Intern",
    "Vivriti Capital",
    "IIT Patna",
    "Mathematics and Computing",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "AWS",
    "Codeforces Specialist",
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  creator: PORTFOLIO_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejaskumar.dev",
    title: `${PORTFOLIO_DATA.personal.name} — Software Engineer`,
    description: PORTFOLIO_DATA.personal.tagline,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.personal.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} — Software Engineer`,
    description: PORTFOLIO_DATA.personal.tagline,
    creator: "@tejaskumar",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO_DATA.personal.name,
    jobTitle: PORTFOLIO_DATA.personal.role,
    alumniOf: "Indian Institute of Technology Patna",
    worksFor: {
      "@type": "Organization",
      name: "Vivriti Capital",
    },
    url: "https://tejaskumar.dev",
    sameAs: [
      PORTFOLIO_DATA.personal.github,
      PORTFOLIO_DATA.personal.linkedin,
      PORTFOLIO_DATA.personal.codeforces,
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}
