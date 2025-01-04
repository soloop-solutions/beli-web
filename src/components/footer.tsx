import React from "react";
import { Mail, Phone, MapPin } from 'lucide-react';



const Footer: React.FC = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex bg-[#1E57A8] text-white sm:py-6">
      <div className="container mx-auto px-5 ">
        <div className="flex flex-row items-start lg:items-start space-x-32 w-full justify-between px-5">       
        {/* About Us  Info */}
        <div className="flex flex-col items-start lg:items-start max-w-[25%]">
            <h1 className="text-lg sm:text-l font-semibold  text-white pb-2">Rreth BELI Travel</h1>
            <div className="space-y-4 text-gray-200 text-sm">
                <p className="flex items-left text-left ">
              
      BELI Agjencia e Udhëtimeve ka 30 vjet përvojë në industrinë e udhëtimeve, duke ofruar shërbime të jashtëzakonshme dhe përvoja të personalizuara udhëtimi.
              </p>
            </div>
          </div>    



          {/* Contact Info */}
          <div className="flex flex-col items-start lg:items-start">
            <h1 className="text-lg sm:text-l font-semibold  text-white pb-2">Kontakti</h1>
            <div className="space-y-4 text-gray-200 text-m">
              <p className="flex items-center">
                <MapPin className="mr-2 flex-shrink-0" />
                <span>Street/21 Second Street</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" />
                <span>345-677-554</span>
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

           {/* Google Map Section */}
         <div className="flex flex-col items-start lg:items-start">
           <h1 className="text-lg sm:text-l font-semibold pb-2 text-white">Lokacioni yne</h1>
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.854294404875!2d21.155414415491617!3d42.655632123771106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549eefb1a61d47%3A0x906d7488f5ff3c1f!2sBeli%20Travel!5e0!3m2!1sen!2s!4v1735485447539!5m2!1sen!2s"
               className="w-full h-[50%] "
               loading="lazy"
               title="Google Map"
             ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 border-t border-gray-300 text-center text-sm text-gray-200 pt-2">
          <p>&copy; {year} Beli Travel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
