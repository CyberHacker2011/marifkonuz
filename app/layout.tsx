import { type Metadata } from 'next';
import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";
import React from 'react';
import ClientProviders from "@/components/client-providers";
// app/layout.tsx or app/root/layout.tsx
export const metadata : Metadata = {
  title: "Marifkonuz - Reach Your Goals and Learn",
  description: "Marifkonuz is a platform that helps you achieve your goals and learn through resources and courses.",
  keywords: ["learning", "courses", "goals", "education", "personal development"],
  authors: [{ name: "Marifkonuz Team" }],
  openGraph: {
    title: "Marifkonuz - Reach Your Goals and Learn",
    description: "Achieve your goals and learn with Marifkonuz's resources and courses.",
    url: "https://yourwebsite.com",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marifkonuz - Reach Your Goals and Learn",
    description: "Achieve your goals and learn with Marifkonuz's resources and courses.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <ClientProviders>
            <Header />
            {children}
            <Footer />
          </ClientProviders>
          
        </body>
      </html>
  );
}
