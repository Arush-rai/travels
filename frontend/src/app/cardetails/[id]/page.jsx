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
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100">
        <span className="text-2xl font-bold text-gray-400">Vehicle not found.</span>
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
      <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-2 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-200">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                className="rounded-2xl w-full max-w-xs sm:max-w-md h-60 sm:h-80 object-contain bg-gray-100 border border-gray-200 shadow-lg"
                src={`/${vehicle.image}`}
                alt={vehicle.name}
              />
            </div>
            {/* Details */}
            <div className="w-full flex flex-col justify-center">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 via-gray-100 to-white rounded-2xl shadow-inner h-full">
                <h2 className="block text-3xl sm:text-4xl md:text-5xl mb-4 font-extrabold uppercase text-gray-900 tracking-tight text-left drop-shadow">
                  {vehicle.name}
                </h2>
                <ul className="space-y-3 mb-8 text-lg text-gray-700 text-left">
                  <li className="flex items-center gap-2">
                    <IconPointFilled className="text-gray-900" /> {vehicle.price} {vehicle.after}
                  </li>
                  <li className="flex items-center gap-2">
                    <IconPointFilled className="text-gray-900" /> {vehicle.extra}
                  </li>
                  <li className="flex items-center gap-2">
                    <IconPointFilled className="text-gray-900" /> {vehicle.outstation} {vehicle.extra2}
                  </li>
                  <li className="flex items-center gap-2">
                    <IconPointFilled className="text-gray-900" /> {vehicle.night}
                  </li>
                  <li className="flex items-center gap-2">
                    <IconPointFilled className="text-gray-900" /> {vehicle.alt}
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href="tel:6393512994"
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-300 shadow rounded-xl px-4 py-3 bg-gray-900 text-white hover:bg-gray-800 transition text-base font-semibold"
                  >
                    <IconPhone className="text-white" />
                    <span>6393512994</span>
                  </a>
                  <a
                    href="https://wa.me/916393512994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-green-700 shadow rounded-xl px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition text-base font-semibold"
                  >
                    <IconBrandWhatsapp />
                    <span>6393512994</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features */}
    </>
  );
};

export default CarDetails;
