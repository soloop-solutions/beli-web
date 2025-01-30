import { FormattedMessage} from "react-intl";

export default function HeroSection() {
  
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
  
  