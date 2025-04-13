'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import vehicles from '../../vehiclesData';
import { IconBrandWhatsapp, IconPhone, IconPhoneFilled, IconPointFilled } from '@tabler/icons-react';


const CarDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [vehicle, setvehicle] = useState(vehicles.find(obj => obj.id == id));
    console.log(vehicle);

    return (
        <>
            {/* Features */}
            <div className="max-w-screen-xl m-10 mt-20 px-4 py-10 sm:px-6 lg:px-8 mx-auto ">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg">
                    <img
                        className="rounded-xl w-full h-auto "
                        src={`/${vehicle.image}`}
                        alt="Features Image"
                    />
                    {/* End Col */}
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="m-2 p-6 bg-white rounded-xl">
                            <i className="block underline text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-4 font-semibold uppercase text-black">
                                {vehicle.name}
                            </i>
                            <h1 className='flex text-xl m-2'>
                           < IconPointFilled/>  {vehicle.price} {vehicle.after}
                            </h1>
                            <h1 className='flex text-xl m-2'>
                            < IconPointFilled/> {vehicle.extra}
                            </h1>
                            <h1 className='flex text-xl m-2'>
                             < IconPointFilled/>   {vehicle.outstation} {vehicle.extra2}
                            </h1>
                            <h1 className='flex text-xl m-2'>
                              < IconPointFilled/>  {vehicle.night}
                            </h1>
                            <h1 className='flex text-xl m-2'>
                             < IconPointFilled/>   {vehicle.alt}
                            </h1>

                            <div className='flex gap-2'>
                                <h2 className='flex border gap-1 shadow-sm rounded-lg p-4  mt-6 bg-gray-800 text-white'>
                                    <IconPhone />
                                    <span>6393512994</span>

                                </h2>
                                <h2 className='flex border gap-1 shadow-sm rounded-lg p-4 mt-6 bg-gray-800 text-white'>
                                    <IconBrandWhatsapp />
                                    <span>6393512994</span></h2>
                            </div>


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
