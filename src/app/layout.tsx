import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Volkhov } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ["400","600"]});
const volkhov = Volkhov({ subsets: ['latin'], weight: ["400","700"]});




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
  title: "figma-website",
  description: "figma next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[poppins.className,volkhov.className].toString()}
      >
      
        {children}
      </body>
    </html>
  );
}
