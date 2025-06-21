import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tanmay Deep Sharma | Senior Software Engineer & AI Specialist",
  description: "Senior Software Engineer with 4.5+ years of expertise in Python, AI/ML, and cloud technologies. Specializing in scalable AI solutions and backend engineering.",
  keywords: ["Software Engineer", "AI/ML", "Python", "Backend Engineering", "AWS", "FastAPI", "Machine Learning"],
  authors: [{ name: "Tanmay Deep Sharma" }],
  creator: "Tanmay Deep Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanmaydeepsharma.com",
    title: "Tanmay Deep Sharma | Senior Software Engineer & AI Specialist",
    description: "Senior Software Engineer specializing in AI/ML and scalable backend systems",
    siteName: "Tanmay Deep Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Deep Sharma | Senior Software Engineer & AI Specialist",
    description: "Senior Software Engineer specializing in AI/ML and scalable backend systems",
    creator: "@TanmayDeep",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
