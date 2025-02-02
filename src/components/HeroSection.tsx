import { FormattedMessage} from "react-intl";
// import { Loader } from "@shadcn/ui"
import { useEffect, useState } from "react";
// import  LoadingSpinner  from "loader.tsx";
import { Spinner } from "./ui/spinner";


export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 100);
  }, []);
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary-blue opacity-75">
       <Spinner size="lg" className="bg-primary-purple" />
       
      </div>
    );
  }

    return (
      <div className="relative h-[70vh] w-full overflow-hidden mt-12">
        <img
          src="/cityscape.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold mb-4">
           <FormattedMessage id="heroSection.title" />
          </h1>
          <p className="text-xl md:text-lg max-w-2xl">
           <FormattedMessage id="heroSection.description" />
          </p>
        </div>
      </div>
    )
  }
  
  