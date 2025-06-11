import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-16">
            <div className="mb-8 md:mb-0 text-center">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400 max-w-xs">
                IB Tours & Travels is a premium car rental service in Lucknow, Uttar Pradesh, providing luxury and comfort for your journey since 2018. Rent cars on distance, km, or day basis for tours, and travel.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Popular Locations</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <h1 className="hover:text-white">
                    Lucknow
                  </h1>
                </li>
                <li>
                  <h1 className="hover:text-white">
                    Delhi
                  </h1>
                </li>
                <li>
                  <h1 className="hover:text-white">
                    Hyderabad
                  </h1>
                </li>
                <li>
                  <h1 className="hover:text-white">
                    Pune
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
              <div className="text-gray-400 text-center">
                © 2025 IB Tours Travels, Lucknow, Uttar Pradesh. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="https://facebook.com/yourpage" className="text-gray-400 hover:text-white" aria-label="Facebook">
                  <i className="ri-facebook-fill text-xl" />
                </a>
                <a href="https://twitter.com/yourpage" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <i className="ri-twitter-fill text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;