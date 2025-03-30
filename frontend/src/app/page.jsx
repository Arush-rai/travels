'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import vehicles from './vehiclesData';  // Import the vehicles data

const Home = () => {

  const [vehiclesList, setvehicleList] = useState(vehicles);
  
  return (
    <div>
      <main className="pt-16">
        <section
          className="relative pt-10 h-[600px] bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: 'url("bg.jpg")',
          }}
        >
          <div className="absolute inset-1 bg-black/40" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="relative z-10 max-w-2xl text-white">
              <i className="text-7xl font-bold mb-6 pb-6 mt-6 text-white animate-fadeIn">
                IB Tours & Travels
              </i>
              <h1 className="text-4xl font-bold mb-6 mt-6 text-white animate-fadeIn">
              Experience Luxury on your Terms.
              </h1>
              <h1 className="text-3xl font-bold mb-6 mt-6 text-white animate-fadeIn">

              rental car services provider On call basis.
              </h1>
              <p className="text-xl mb-8 text-white animate-fadeIn">
               Premium vehicles for your journey, with unlimited miles and flexible rental options.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100">
          <div id="Vehicles" className="container mx-auto px-4">
            <div className="text-3xl font-bold text-center mb-12">Vehicles</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Using the map function to display vehicle cards */}
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
                      className="w-full sm:w-auto bg-gray-700 text-white py-3 px-20 mt-4 rounded-md hover:bg-primary/90 transition-colors duration-300 block mx-auto text-center"
                      href={`/cardetails/` + vehicle.id}
                    >
                      View Details
                    </Link>


                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-fadeIn">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <i className="ri-customer-service-2-line text-primary text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
                <h3 className="text-xl font-semibold mb-4">1234567890</h3>
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
