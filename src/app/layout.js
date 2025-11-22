import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/componets/home/Navbar";
import Footer from "@/app/componets/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Dadu BalaJi Films",
  description: "The Dadu BalaJi Films",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
