import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Abdul Qadeer | Team Lead React Native Engineer",
  description:
    "React Native Engineer and Team Lead with 5+ years of experience. Explore six mobile projects, payments and Firebase integrations, and iOS and Android release experience. Open to remote roles worldwide.",
  keywords: [
    "Abdul Qadeer",
    "React Native Engineer",
    "React Native Developer",
    "Mobile Team Lead",
    "TypeScript",
    "iOS",
    "Android",
    "Karachi",
    "Remote",
  ],
  openGraph: {
    title: "Abdul Qadeer | React Native Engineer & Team Lead",
    description:
      "5+ years in mobile engineering. Six selected projects. Hands-on leadership and iOS & Android delivery. Open to remote opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Abdul Qadeer | React Native Engineer & Team Lead",
    description:
      "React Native, TypeScript, payments and production mobile releases. Open to remote opportunities worldwide.",
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
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
