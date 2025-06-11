"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-8">
          <Link href="/" aria-label="IB Tours & Travels Home">
            <img
              src="/logo.png"
              alt="IB Tours & Travels - Car Rental Lucknow"
              className="h-10 drop-shadow-lg"
            />
          </Link>
          <span className="text-white text-2xl font-bold">IB Tours & Travels</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-primary">
            Home
          </Link>
          <Link href="/#Vehicles" className="text-white hover:text-primary">
            Vehicles
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Open navigation menu"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-800 shadow-md py-4 px-6 space-y-4`}
      >
        <Link
          href="/"
          className="text-white hover:text-primary block py-2 px-4"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          href="/#Vehicles"
          className="text-white hover:text-primary block py-2 px-4"
          onClick={handleLinkClick}
        >
          Vehicles
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
