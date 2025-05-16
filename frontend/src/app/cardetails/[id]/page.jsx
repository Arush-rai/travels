'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import vehicles from '../../vehiclesData';
import { IconBrandWhatsapp, IconPhone, IconPointFilled } from '@tabler/icons-react';

const CarDetails = () => {
  const { id } = useParams();
  const [vehicle] = useState(vehicles.find(obj => obj.id == id));

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-2xl font-bold text-gray-600">Vehicle not found.</span>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{vehicle.name} for Rent in Lucknow | IB Tours & Travels</title>
        <meta
          name="description"
          content={`Rent ${vehicle.name} in Lucknow, Uttar Pradesh. ${vehicle.description} Book now with IB Tours & Travels for best rates on distance, km, or day basis.`}
        />
        <meta
          name="keywords"
          content={`car rental Lucknow, ${vehicle.name} hire Lucknow, taxi Lucknow, car hire Lucknow, Lucknow car rental, tours and travels Lucknow, car on rent Lucknow, IB Tours & Travels`}
        />
        <meta name="author" content="IB Tours & Travels" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${vehicle.name} for Rent in Lucknow | IB Tours & Travels`} />
        <meta property="og:description" content={`Rent ${vehicle.name} in Lucknow, Uttar Pradesh. ${vehicle.description} Book now with IB Tours & Travels for best rates on distance, km, or day basis.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/cardetails/${vehicle.id}`} />
        <meta property="og:image" content={`https://yourdomain.com/${vehicle.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${vehicle.name} for Rent in Lucknow | IB Tours & Travels`} />
        <meta name="twitter:description" content={`Rent ${vehicle.name} in Lucknow, Uttar Pradesh. ${vehicle.description}`} />
        <meta name="twitter:image" content={`https://yourdomain.com/${vehicle.image}`} />
        <link rel="canonical" href={`https://yourdomain.com/cardetails/${vehicle.id}`} />
      </Head>
      {/* Features */}
      <div className="max-w-screen-xl mx-auto my-6 px-2 sm:px-4 py-6 sm:py-10">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-white rounded-xl shadow-lg p-3 sm:p-6">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              className="rounded-xl w-full max-w-xs sm:max-w-md h-56 sm:h-80 object-contain bg-gray-100"
              src={`/${vehicle.image}`}
              alt={vehicle.name}
            />
          </div>
          {/* Details */}
          <div className="mt-4 md:mt-0 w-full">
            <div className="p-4 sm:p-6 bg-gray-50 rounded-xl shadow-inner h-full flex flex-col justify-center">
              <h2 className="block underline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 font-semibold uppercase text-black text-left">
                {vehicle.name}
              </h2>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-base sm:text-lg text-gray-700 text-left">
                <li className="flex items-center gap-2">
                  <IconPointFilled className="text-primary" /> {vehicle.price} {vehicle.after}
                </li>
                <li className="flex items-center gap-2">
                  <IconPointFilled className="text-primary" /> {vehicle.extra}
                </li>
                <li className="flex items-center gap-2">
                  <IconPointFilled className="text-primary" /> {vehicle.outstation} {vehicle.extra2}
                </li>
                <li className="flex items-center gap-2">
                  <IconPointFilled className="text-primary" /> {vehicle.night}
                </li>
                <li className="flex items-center gap-2">
                  <IconPointFilled className="text-primary" /> {vehicle.alt}
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <a
                  href="tel:6393512994"
                  className="flex-1 flex items-center justify-center gap-2 border shadow-sm rounded-lg px-4 py-3 bg-gray-800 text-white hover:bg-gray-900 transition text-base"
                >
                  <IconPhone />
                  <span>6393512994</span>
                </a>
                <a
                  href="https://wa.me/916393512994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border shadow-sm rounded-lg px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition text-base"
                >
                  <IconBrandWhatsapp />
                  <span>6393512994</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
};

export default CarDetails;
