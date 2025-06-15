'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import vehicles from './vehiclesData'; // Assuming vehiclesData.js exists and is correctly structured
import Head from 'next/head';
import Script from 'next/script'; // Import Script for JSON-LD

// Slider Images
const sliderImages = [
  { src: '/slide1.png', alt: 'Leading client logo 1' },
  { src: '/slide2.png', alt: 'Leading client logo 2' },
  { src: '/slide3.png', alt: 'Leading client logo 3' },
  { src: '/slide4.png', alt: 'Leading client logo 4' },
  { src: '/slide5.png', alt: 'Leading client logo 5' },
  { src: '/slide6.png', alt: 'Leading client logo 6' },
];

const Home = () => {
  const [vehiclesList] = useState(vehicles);

  // IMPORTANT: Replace with your business's precise location coordinates and postal code in Lucknow
  // You can find these by searching for your business on Google Maps and getting the coordinates.
  const yourBusinessLatitude = 26.8500; // Example: Latitude for a central Lucknow location
  const yourBusinessLongitude = 80.9500; // Example: Longitude for a central Lucknow location
  const yourBusinessPostalCode = '226001'; // Example: A common postal code for Lucknow

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IB Tours & Travels",
    image: "https://ibtourtravels.com/og-image.jpg",
    "@id": "https://ibtourtravels.com/",
    url: "https://ibtourtravels.com/",
    telephone: "+916393512994",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Actual Street Address Here", // IMPORTANT: Replace with your actual street address
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: yourBusinessPostalCode, // Use the variable
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: yourBusinessLatitude, // Use the variable
      longitude: yourBusinessLongitude, // Use the variable
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$", // Adjust based on your typical pricing (e.g., $, $$, $$$)
    servesCuisine: "Car Rental, Taxi, Cab Hire", // Broad category of service
    description:
      "Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, city rides, daily, monthly, and per km basis. We offer 24/7 support, luxury vehicles, transparent pricing, and no hidden charges. Trusted by thousands.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Lucknow",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Rental Services in Lucknow",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Daily Car Rentals",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Daily Car Rental in Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Monthly Car Rentals",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Monthly Car Rental in Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Per KM Taxi Service",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Per KM Taxi Service in Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Outstation Cab Service",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Outstation Cab Service from Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Airport Taxi Lucknow",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Airport Taxi Service in Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Luxury Car Hire Lucknow",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Luxury Car Rental in Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "SUV Rental Lucknow",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SUV Rental in Lucknow",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Sedan Rental Lucknow",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sedan Rental in Lucknow",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen">
      <Head>
        <title>
          IB Tours & Travels | Car Rental Lucknow | Taxi & Cab Hire Uttar Pradesh
        </title>
        <meta
          name="description"
          content="Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, city rides, daily, monthly, and per km basis. We offer 24/7 support, luxury vehicles, transparent pricing, and no hidden charges. Trusted by thousands. Visit ibtourtravels.com for instant booking."
        />
        <meta
          name="keywords"
          content="car rental Lucknow, taxi Lucknow, cab hire Lucknow, car hire Lucknow, Lucknow car rental, tours and travels Lucknow, car on rent Lucknow, outstation taxi Lucknow, airport taxi Lucknow, IB Tours & Travels, ibtourtravels.com, best car rental in Lucknow, luxury car hire Lucknow, car on rent Lucknow daily, monthly car rental Lucknow, taxi service Lucknow per km, SUV rental Lucknow, sedan rental Lucknow, affordable car rental Lucknow"
        />
        <meta name="author" content="IB Tours & Travels" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="IB Tours & Travels" />
        <meta
          property="og:title"
          content="Car Rental Lucknow | Taxi & Cab Hire Uttar Pradesh - IB Tours & Travels"
        />
        <meta
          property="og:description"
          content="Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, city rides, daily, monthly, and per km basis. We offer 24/7 support, luxury vehicles, transparent pricing, and no hidden charges. Trusted by thousands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibtourtravels.com/" />
        <meta
          property="og:image"
          content="https://ibtourtravels.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Car Rental Lucknow | IB Tours & Travels | Taxi & Cab Hire Uttar Pradesh"
        />
        <meta
          name="twitter:description"
          content="Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, and city rides."
        />
        <meta
          name="twitter:image"
          content="https://ibtourtravels.com/og-image.jpg"
        />
        <link rel="canonical" href="https://ibtourtravels.com/" />

        {/* JSON-LD Structured Data for Local Business */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          key="local-business-schema"
        />
      </Head>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative pt-10 h-[600px] bg-cover bg-center"
          style={{ backgroundImage: 'url("bg.jpg")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-white/10" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="relative z-10 max-w-2xl text-white">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full uppercase tracking-widest text-xs font-semibold mb-4 border border-gray-700 shadow-lg">
                Premium Car Rentals
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                <span className="text-white">IB Tours & Travels</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-200">
                Experience Luxury on Your Terms
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-gray-200">
                At **IB Tours & Travels**, we offer premium{" "}
                **car rentals in Lucknow** for every journey, whether you need a{" "}
                **taxi for daily commutes**, a **cab for outstation trips**, or
                a luxurious ride for special occasions. Rent by distance, km, or
                day in Lucknow & Uttar Pradesh.
              </p>
              <Link
                href="#Vehicles"
                className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                Explore Vehicles
              </Link>
            </div>
          </div>
        </section>

        {/* Vehicles Section */}
        <section className="py-20 bg-white">
          <div id="Vehicles" className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-tight drop-shadow-lg">
              Our Fleet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {vehiclesList.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200"
                >
                  <img
                    src={vehicle.image}
                    className="w-full h-52 object-contain bg-gray-50"
                    alt={`${vehicle.name} rental in Lucknow`}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {vehicle.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{vehicle.description}</p>
                    <Link
                      href={`/cardetails/${vehicle.id}`}
                      className="w-full bg-gray-900 text-white font-semibold py-2 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300 block text-center shadow"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Slider Section */}
        <section className="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white tracking-tight drop-shadow-lg">
            Our Valued Clients
          </h2>
          <div className="overflow-hidden relative w-full max-w-[1100px] mx-auto">
            <div className="marquee-slider">
              {[...sliderImages, ...sliderImages].map((img, idx) => (
                <div
                  key={idx}
                  className="slide-item flex items-center justify-center px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center h-44 w-full max-w-[300px]">
                    <img
                      src={img.src}
                      alt={img.alt} // Alt text updated for better SEO
                      className="h-32 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              .marquee-slider {
                display: flex;
                width: fit-content;
                animation: scroll 30s linear infinite;
              }

              .marquee-slider:hover {
                animation-play-state: paused;
              }

              .slide-item {
                flex-shrink: 0;
                width: 300px;
                margin-right: 40px;
              }

              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 flex items-center justify-center bg-gray-900 rounded-full shadow-lg">
                  <i className="ri-customer-service-2-line text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  24/7 Customer Support
                </h3>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  +91 6393512994
                </h3>
                <p className="text-gray-600">
                  Our dedicated team is always available to assist you with any
                  queries or concerns regarding your **car rental in Lucknow**.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 flex items-center justify-center bg-gray-900 rounded-full shadow-lg">
                  <i className="ri-shield-check-line text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  No Hidden Charges
                </h3>
                <p className="text-gray-600">
                  What you see is what you pay. Enjoy transparent pricing for
                  all **taxi and cab hire services in Lucknow**, with no
                  surprise fees.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;