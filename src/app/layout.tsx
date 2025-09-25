import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garrett Daviscourt — About Me",
  description: "Developer • Life Long Learner",
  metadataBase: new URL("https://daviscourt.dev"), // change after deploy
  openGraph: {
    title: "Garrett Daviscourt — About Me",
    description: "Developer • Life Long Learner",
    url: "https://daviscourt.dev",
    siteName: "Garrett Daviscourt",
    images: [{ url: "/avatar.jpeg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/" },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-dvh bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}