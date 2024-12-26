import * as React from 'react';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-custom-gradient w-full py-2 px-4 flex justify-center md:justify-end">
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-pink-600">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="text-white hover:text-pink-600">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="text-white hover:text-pink-600">
            <FaPhone className="text-xl" />
          </a>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Beli Travel Logo" className="h-12 w-auto" />

          {/* Hamburger Menu */}
          <button
            className="text-gray-600 hover:text-purple-700 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } md:block w-full md:w-auto mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row gap-4 text-sm font-bold text-gray-700">
              <li><a href="/" className="block py-2 hover:text-purple-700">Home</a></li>
              <li><a href="/offers" className="block py-2 hover:text-purple-700">Offers</a></li>
              <li><a href="/" className="block py-2 hover:text-purple-700">Bus Ticket</a></li>
              <li><a href="/" className="block py-2 hover:text-purple-700">Plane Ticket</a></li>
              <li><a href="/blog" className="block py-2 hover:text-purple-700">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

