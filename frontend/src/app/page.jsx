'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import vehicles from './vehiclesData'; // Make sure this is correctly imported
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
    <div>
      <Head>
        <title>Car Rental in Lucknow | IB Tours & Travels | Taxi & Cab Hire Uttar Pradesh</title>
        <meta
          name="description"
          content="Best car rental in Lucknow! IB Tours & Travels offers taxi, cab, and luxury car hire on km or day basis. Book your ride for airport, outstation, business, or tours in Lucknow, Uttar Pradesh."
        />
        <meta
          name="keywords"
          content="car rental Lucknow, taxi Lucknow, cab hire Lucknow, car hire Lucknow, Lucknow car rental, tours and travels Lucknow, car on rent Lucknow, outstation taxi Lucknow, airport taxi Lucknow, IB Tours & Travels"
        />
        <meta name="author" content="IB Tours & Travels" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Car Rental in Lucknow | IB Tours & Travels" />
        <meta property="og:description" content="Book car, taxi, or cab in Lucknow. Best rates for airport, outstation, and city rides. 24/7 support, no hidden charges." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Rental in Lucknow | IB Tours & Travels" />
        <meta name="twitter:description" content="Book car, taxi, or cab in Lucknow. Best rates for airport, outstation, and city rides." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative pt-10 h-[600px] bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ backgroundImage: 'url("bg.jpg")' }}
        >
          <div className="absolute inset-1 bg-black/40" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="relative z-10 max-w-2xl text-white">
              <i className="text-7xl font-bold mb-6 pb-6 mt-6 animate-fadeIn">
                IB Tours & Travels
              </i>
              <h1 className="text-4xl font-bold mb-6 mt-6 animate-fadeIn">
                Experience Luxury on your Terms.
              </h1>
              <h1 className="text-3xl font-bold mb-6 mt-6 animate-fadeIn">
                rental car services provider On call basis.
              </h1>
              <p className="text-xl mb-8 animate-fadeIn">
                Premium vehicles for your journey, with unlimited miles and flexible rental options.
              </p>
            </div>
          </div>
        </section>

        {/* Vehicles Section */}
        <section className="py-16 bg-gray-100">
          <div id="Vehicles" className="container mx-auto px-4">
            <div className="text-3xl font-bold text-center mb-12">Vehicles</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {vehiclesList.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <img
                    src={vehicle.image}
                    className="w-full h-48 object-contain"
                    alt={vehicle.alt}
                  />
                  <div className="p-4 mb-2">
                    <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <Link
                      href={`/cardetails/${vehicle.id}`}
                      className="w-full sm:w-auto bg-gray-700 text-white py-3 px-20 mt-4 rounded-md hover:bg-primary/90 transition-colors duration-300 block mx-auto text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolving Slider Section */}
        <section className="py-8 bg-white">
          <h1 className="text-4xl font-bold text-center mb-12">Our Clients</h1>
          <div className="overflow-hidden relative w-full max-w-[1000px] mx-auto">
            <div className="flex gap-8 animate-marquee" style={{ width: 'fit-content' }}>
              {[...sliderImages, ...sliderImages].map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 flex items-center justify-center"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-48 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee {
              animation: marquee 20s linear infinite;
            }

            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <i className="ri-customer-service-2-line text-primary text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
                <h3 className="text-xl font-semibold mb-4">+91 6393512994</h3>
                <p className="text-gray-600">
                  Our dedicated team is always available to assist you with any queries or concerns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <i className="ri-shield-check-line text-primary text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">No Hidden Charges</h3>
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
