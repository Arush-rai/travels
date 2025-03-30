import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className=" bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Premium car rental service providing luxury and comfort for your journey since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Popular Locations</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    New York City
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Los Angeles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Miami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-gray-400">
                © 2025 Premium Car Rental. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="ri-facebook-fill text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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