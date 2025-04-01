'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import vehicles from '../../vehiclesData';
import { IconBrandWhatsapp, IconPhone, IconPhoneFilled } from '@tabler/icons-react';


const CarDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [vehicle, setvehicle] = useState(vehicles.find(obj => obj.id == id));
    console.log(vehicle);

    return (
        <>
            {/* Features */}
            <div className="max-w-screen-xl m-10 mt-20 px-4 py-10 sm:px-6 lg:px-8 mx-auto bg-#fff9c4-300">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg">
                    <img
                        className="rounded-xl w-full h-auto "
                        src={`/${vehicle.image}`}
                        alt="Features Image"
                    />
                    {/* End Col */}
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="m-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                            <h1 className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl m-6 font-semibold uppercase text-black dark:text-blue-500">
                                {vehicle.name}
                            </h1>
                            <h1 className='font-bold text-xl m-6'>
                                {vehicle.price}
                            </h1>
                            <h1 className='font-bold text-xl m-6'>
                                {vehicle.after}
                            </h1>
                            <h1 className='font-bold text-xl m-6'>
                                {vehicle.extra}
                            </h1>
                            <h1 className='font-bold text-xl m-6'>
                                {vehicle.outstanding}
                            </h1>
                            <h1 className='font-bold text-xl m-6'>
                                {vehicle.night}
                            </h1>
                            <h1 className='font-bold text-xl m-6'>
                                {vehicle.alt}
                            </h1>

                            <div className='flex gap-3'>
                                <h2 className='flex gap-3 border shadow-sm rounded-lg p-4 m-6 bg-gray-800 text-white'>
                                    <IconPhone />
                                    <span>9336968870</span>

                                </h2>
                                <h2 className='flex gap-3 border shadow-sm rounded-lg p-4 m-6 bg-gray-800 text-white'>
                                    <IconBrandWhatsapp />
                                    <span>9336968870</span></h2></div>


                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}
        </>
    );
}

export default CarDetails;
