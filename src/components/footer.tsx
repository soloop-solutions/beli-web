import React from "react";
import { Mail, Phone, MapPin, Smartphone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const recentPosts = [
    "Standard Blog Post With Image",
    "Amazing Fullwidth Post",
    "Link Post",
    "Quote Post",
    "Sidebar Post With Slideshow",
  ];

  return (
    <footer className="bg-[#1E57A8] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Beli Travel</h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                A Powerful & Beautiful Multi-Purpose WordPress theme with tons of advanced features.
              </p>
            </div>

            {/* Google Map Section */}
            <div className="bg-[#A80C51] p-4 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">OUR LOCATION</h3>
              <div className="w-full h-32 bg-[#A80C51] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.812091062073!2d-77.03659108451099!3d38.89767677975807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7e32f03d8d5%3A0x4d6a0e86c5503fc2!2sWhite%20House!5e0!3m2!1sen!2sus!4v1605490130670!5m2!1sen!2sus"
                  className="w-full h-full"
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start lg:items-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">CONTACT INFO</h3>
            <div className="space-y-4 text-gray-200 text-sm">
              <p className="flex items-start">
                <MapPin className="mr-2 text-[#A80C51] flex-shrink-0" />
                <span>
                  732/21 Second Street, <br />
                  Manchester King Street.
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-[#A80C51] flex-shrink-0" />
                <span>345-677-554</span>
              </p>
              <p className="flex items-center">
                <Smartphone className="mr-2 text-[#A80C51] flex-shrink-0" />
                <span>323-678-567</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 text-[#A80C51] flex-shrink-0" />
                <a
                  href="mailto:info@altairtheme.com"
                  className="text-white hover:text-[#A80C51] transition-colors"
                >
                  info@altairtheme.com
                </a>
              </p>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">RECENT POSTS</h3>
            <ul className="space-y-2">
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-[#A80C51] transition-colors text-sm"
                  >
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-xl text-gray-400">
          <a
            href="https://facebook.com"
            className="hover:text-[#A80C51] transition-colors"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-[#A80C51] transition-colors"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-[#A80C51] transition-colors"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-200">
          <p>&copy; 2024 Beli Travel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

