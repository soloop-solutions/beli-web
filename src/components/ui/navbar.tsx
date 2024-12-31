'use client'

import { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaPhone} from 'react-icons/fa'


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Blue Bar */}
      <div className="bg-custom-gradient w-full py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-white text-sm">
          <div className="flex items-center gap-6">         
          </div>
          <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com/TravelAgencyBeli/" className="text-white hover:text-pink-600">
             <FaFacebook className="text-xl" /> </a>
           <a href="https://www.instagram.com/belitravel/" className="text-white hover:text-pink-600">  
             <FaInstagram className="text-xl" /> </a>
           <a href="tel:+38344113710" className="text-white hover:text-pink-600"> 
              <FaPhone className="text-xl" /> </a>
          </div>
        </div>
      </div>

      {/* White Navigation Bar */}
      <div className="w-full flex justify-center absolute top-4">
        <div className={`w-[70%] bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'} rounded-lg shadow-md z-10`}>
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/">
              <img src="/logo.png" alt="Travel Logo" className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`} />
          </a>

            {/* Hamburger Menu */}
            <button
              className="text-gray-600 hover:text-teal-500 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

            {/* Navigation Links */}
            <nav
              className={`${
                mobileMenuOpen ? "absolute top-full left-0 right-0 bg-white shadow-lg" : "hidden"
              } md:block`}
            >
              <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-sm font-medium">
                <li>
                  <a href="/" className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium  transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/pages" className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium  transition-colors">
                    Offers
                    </a>
                </li>
                <li>
                  <a href="/tours" className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium  transition-colors">
                    Bus Tickets
                  </a>
                </li>
                <li>
                  <a href="/blog" className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium  transition-colors">
                    Plane Tickets
                  </a>
                </li>
                <li>
                  <a href="/blog" className="block py-2 px-3 md:px-2 hover:text-secondary-purple text-primary-blue font-medium  transition-colors">
                    Blog
                  </a>
                </li>
            
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

