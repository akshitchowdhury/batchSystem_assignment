"use client"
import React, { useState } from 'react';
import Link from 'next/link';
// import fireIcon from '../public/assets/icons/fire.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white pt-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-red-600 text-4xl font-bold flex items-center">
            <span className="mr-2"><img src='/assets/logo.png' alt="fire icon" /></span>
          </div>
          <div className="hidden md:flex ml-10 space-x-8">
            <Link href="/" legacyBehavior>
              <a className="text-red-600 font-bold">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-900">About Us</a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="text-gray-900">Pricing</a>
            </Link>
            <Link href="/features" legacyBehavior>
              <a className="text-gray-900">Features</a>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="bg-black text-white py-2 px-4 rounded">
            Download
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link href="/" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-red-600">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">About Us</a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">Pricing</a>
            </Link>
            <Link href="/features" legacyBehavior>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">Features</a>
            </Link>
          </div>
          <div className="px-2 pb-3">
            <button className="w-full bg-black text-white py-2 px-4 rounded">
              Download
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;