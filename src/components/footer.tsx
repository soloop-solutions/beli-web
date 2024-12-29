import React from "react";
import { Mail, Phone, MapPin, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#1E57A8] text-white py-8 sm:py-12">
      <div className="container mx-auto px-32">
        <div className="flex flex-row items-center lg:items-center justify-center space-x-32">       
          {/* Google Map Section */}
         <div className="flex flex-col items-start lg:items-center">
           <h1 className="text-xlg sm:text-xl font-semibold mb-4 text-white">Lokacioni yne</h1>
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.854294404875!2d21.155414415491617!3d42.655632123771106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549eefb1a61d47%3A0x906d7488f5ff3c1f!2sBeli%20Travel!5e0!3m2!1sen!2s!4v1735485447539!5m2!1sen!2s"
               className="w-full h-full "
               loading="lazy"
               title="Google Map"
             ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start lg:items-center">
            <h1 className="text-xlg sm:text-xl font-semibold mb-4 text-white">Kontakti</h1>
            <div className="space-y-4 text-gray-200 text-m">
              <p className="flex items-center">
                <MapPin className="mr-2 flex-shrink-0" />
                  <span>
                  Street/21 Second Street, 
          
                  </span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2  flex-shrink-0" />
                 <span>345-677-554</span>
              </p>
              <p className="flex items-center">
                <Smartphone className="mr-2 flex-shrink-0" />
                  <span>323-678-567</span>
              </p>
              <p className="flex items-center ">
                <Mail className="mr-2 flex-shrink-0 " />
                  <a className=" text-gray-200"
                    href="mailto:info@altairtheme.com" >
                    info@altairtheme.com
                  </a>
              </p>
            </div>
          </div>    
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

