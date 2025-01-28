"use client"

import { useState, useEffect } from "react"
import { Facebook, Instagram, Phone, Menu } from "lucide-react"
import { FormattedMessage} from "react-intl"
import { LanguageSelector } from "./language-selector"

interface NavbarProps {
  locale: string
  setLocale: (locale: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ locale, setLocale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // const intl = useIntl()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socialIcons = [
    { href: "https://www.facebook.com/TravelAgencyBeli/", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/belitravel/", icon: Instagram, label: "Instagram" },
    { href: "tel:+38344113710", icon: Phone, label: "Phone" },
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Blue Gradient Bar */}
      <div className="bg-custom-gradient w-full pb-4 pt-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-white text-sm">
          <div className="flex items-center gap-6 md:hidden"></div>
          <div className="flex gap-4 items-center justify-center pl-5 md:justify-end w-full md:w-auto">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} className="text-white hover:text-pink-600 z-50">
                <Icon className="h-5 w-5" aria-label={label} />
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex gap-4 items-center justify-center bg-red pl-5 md:justify-end w-full md:w-auto z-50">
            <LanguageSelector locale={locale} setLocale={setLocale} />
          </div>
        </div>
      </div>

      {/* White Navigation Bar */}
      <div className="w-full flex justify-center absolute top-12 md:top-3">
        <div
          className={`w-full md:w-[70%] sm:w-[70%] bg-white transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          } rounded-lg shadow-md z-10`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/">
              <img
                src="/logo.png"
                alt="Travel Logo"
                className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
              />
            </a>

            {/* Hamburger Menu */}
            <button
              className="text-primary-blue hover:text-secondary-blue md:hidden bg-white border-primary-purple hover:border-primary-purple"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Navigation Links */}
            <nav
              className={`${
                mobileMenuOpen ? "absolute top-full left-0 right-0 bg-white shadow-lg" : "hidden"
              } md:block`}
            >
              <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-sm font-medium">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium transition-colors"
                  >
                    <FormattedMessage id="navbar.home" defaultMessage="Home" />
                  </a>
                </li>
                <li>
                  <a
                    href="/#offers"
                    className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium transition-colors"
                  >
                    <FormattedMessage id="navbar.offers" defaultMessage="Offers" />
                  </a>
                </li>
                <li>
                  <a
                    href="/#bus"
                    className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium transition-colors"
                  >
                    <FormattedMessage id="navbar.busTickets" defaultMessage="Bus Tickets" />
                  </a>
                </li>
                <li>
                  <a
                    href="/#plane"
                    className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium transition-colors"
                  >
                    <FormattedMessage id="navbar.planeTickets" defaultMessage="Plane Tickets" />
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block py-2 px-3 md:px-2 hover:text-secondary-blue text-primary-blue font-medium transition-colors"
                  >
                    <FormattedMessage id="navbar.guide" defaultMessage="Guide" />
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

