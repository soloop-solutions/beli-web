import React from "react";
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-primary-blue text-white sm:py-6 pt-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 w-full lg:justify-between px-5">

          {/* About Us Info */}
          <div className="flex flex-col items-start lg:items-start w-full lg:w-1/2">
            <h1 className="text-lg font-semibold text-white pb-2">Rreth BELI Travel</h1>
            <div className="space-y-4 text-gray-200 text-sm">
              <p className="text-left">
              Me një histori të pasur që nis në vitin 1992, BELI Travel ofron shërbime udhëtimi të besueshme dhe të favorshme për klientët tanë. Nga linjat e rregullta me autobus si linja e vazhdueshme Kosovë – Zvicër, dhe aranzhmane turistike të kombinuara, ofrojmë gjithashtu mundësi për bileta avioni në destinacione të ndryshme. Ne jemi të përkushtuar të ofrojmë shërbime të shkëlqyera për çdo udhëtim.              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start w-full lg:w-1/4">
            <h1 className="text-lg font-semibold text-white pb-2">Kontakti</h1>
            <div className="space-y-4 text-gray-200 text-sm">
              <p className="flex items-center">
                <MapPin className="mr-2 flex-shrink-0" />
                <span>Rr. Robert Doll, nr. 40, Prishtinë</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" />
                <span>+38338610699, +38344113710</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" />
                <a
                  className="text-gray-200"
                  href="mailto:info@altairtheme.com"
                >
                  travelagencybeli@hotmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="flex flex-col items-start w-full lg:w-1/3">
            <h1 className="text-lg font-semibold pb-2 text-white">Lokacioni</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.854294404875!2d21.155414415491617!3d42.655632123771106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549eefb1a61d47%3A0x906d7488f5ff3c1f!2sBeli%20Travel!5e0!3m2!1sen!2s!4v1735485447539!5m2!1sen!2s"
              className="w-[80%] h-32 sm:h-32 rounded-md"
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-300 text-center text-sm text-gray-200 pt-4">
          <p>&copy; {year} Beli Travel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
