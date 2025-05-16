import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Rental in Lucknow | IB Tours & Travels | Taxi & Cab Hire Uttar Pradesh",
  description: "Best car rental in Lucknow! IB Tours & Travels offers taxi, cab, and luxury car hire on km or day basis. Book your ride for airport, outstation, business, or tours in Lucknow, Uttar Pradesh.",
  keywords: [
    "car rental Lucknow",
    "taxi Lucknow",
    "cab hire Lucknow",
    "car hire Lucknow",
    "Lucknow car rental",
    "tours and travels Lucknow",
    "car on rent Lucknow",
    "outstation taxi Lucknow",
    "airport taxi Lucknow",
    "IB Tours & Travels"
  ],
  authors: [{ name: "IB Tours & Travels" }],
  robots: "index, follow",
  openGraph: {
    title: "Car Rental in Lucknow | IB Tours & Travels",
    description: "Book car, taxi, or cab in Lucknow. Best rates for airport, outstation, and city rides. 24/7 support, no hidden charges.",
    url: "https://yourdomain.com/",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IB Tours & Travels - Car Rental Lucknow",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental in Lucknow | IB Tours & Travels",
    description: "Book car, taxi, or cab in Lucknow. Best rates for airport, outstation, and city rides.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
