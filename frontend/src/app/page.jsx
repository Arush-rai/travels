'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import vehicles from './vehiclesData';
import Head from 'next/head';

// Slider Images
const sliderImages = [
  { src: '/slide1.png', alt: 'img' },
  { src: '/slide2.png', alt: 'img' },
  { src: '/slide3.png', alt: 'img' },
  { src: '/slide4.png', alt: 'img' },
  { src: '/slide5.png', alt: 'img' },
  { src: '/slide6.png', alt: 'img' },
];

const Home = () => {
  const [vehiclesList] = useState(vehicles);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen">
      <Head>
        <title>Car Rental in Lucknow | IB Tours & Travels | Taxi & Cab Hire Uttar Pradesh</title>
        <meta
          name="description"
          content="Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, and city rides. 24/7 support, luxury vehicles, transparent pricing, no hidden charges. Trusted by thousands. Visit ibtourtravels.com for instant booking."
        />
        <meta
          name="keywords"
          content="car rental Lucknow, taxi Lucknow, cab hire Lucknow, car hire Lucknow, Lucknow car rental, tours and travels Lucknow, car on rent Lucknow, outstation taxi Lucknow, airport taxi Lucknow, IB Tours & Travels, ibtourtravels.com, best car rental in Lucknow, luxury car hire Lucknow"
        />
        <meta name="author" content="IB Tours & Travels" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="IB Tours & Travels" />
        <meta property="og:title" content="Car Rental in Lucknow | IB Tours & Travels | Taxi & Cab Hire Uttar Pradesh" />
        <meta property="og:description" content="Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, and city rides. 24/7 support, luxury vehicles, transparent pricing, no hidden charges. Trusted by thousands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibtourtravels.com/" />
        <meta property="og:image" content="https://ibtourtravels.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Rental in Lucknow | IB Tours & Travels | Taxi & Cab Hire Uttar Pradesh" />
        <meta name="twitter:description" content="Book your car, taxi, or cab in Lucknow with IB Tours & Travels. Best car rental service in Lucknow and Uttar Pradesh for airport, outstation, business, and city rides." />
        <meta name="twitter:image" content="https://ibtourtravels.com/og-image.jpg" />
        <link rel="canonical" href="https://ibtourtravels.com/" />
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
                Premium vehicles for your journey, with unlimited miles and flexible rental options. Rent by distance, km, or day in Lucknow & Uttar Pradesh.
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
            <div className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-tight drop-shadow-lg">
              Our Fleet
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {vehiclesList.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200"
                >
                  <img
                    src={vehicle.image}
                    className="w-full h-52 object-contain bg-gray-50"
                    alt={vehicle.alt}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{vehicle.name}</h3>
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white tracking-tight drop-shadow-lg">
            Our Clients
          </h1>
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
                      alt={img.alt}
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
                <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Customer Support</h3>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">+91 6393512994</h3>
                <p className="text-gray-600">
                  Our dedicated team is always available to assist you with any queries or concerns.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 flex items-center justify-center bg-gray-900 rounded-full shadow-lg">
                  <i className="ri-shield-check-line text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">No Hidden Charges</h3>
                <p className="text-gray-600">
                  What you see is what you pay. Transparent pricing with no surprise fees.
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
