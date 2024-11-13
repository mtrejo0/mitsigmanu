import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
// import setupLogRocketReact from "logrocket-react";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export const metadata = {
  title: "MIT Sigma Nu",
  description:
    "The MIT Chapter of Sigma Nu fraternity. Building ethical leaders through Love, Truth, and Honor since 1892.",
  openGraph: {
    title: "MIT Sigma Nu",
    images: [
      {
        url: "/images/front.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/front.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics gaId="G-XXX" /> TODO add a right one*/}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
