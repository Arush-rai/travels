'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import vehicles from '../../vehiclesData';
import { IconPhone, IconPhoneFilled } from '@tabler/icons-react';


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
                            <h2 className="  text-gray-800 dark:text-neutral-200">
                                {vehicle.description}
                            </h2>
                            <h2>Timing morning 06:00am - 10:00pm </h2>
                            <h2>Night shift ₹200 from(10:pm - 06:00am)</h2>
                            <h2>Total limit 300km </h2>
                            <h2 className="  text-black-500 dark:text-neutral-500">
                               Exciding limit cost MRP ₹{vehicle.price}
                            </h2>
                            <h2 className='flex gap-3'>
                                <IconPhone />
                                <span>4567890</span>
                            </h2>
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
