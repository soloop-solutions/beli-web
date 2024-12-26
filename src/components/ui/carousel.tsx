import {useState, useEffect} from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";




export const Carousel = () => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
      loop: true,
      slides: {
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 8,
          },
        },
      },
    });

    interface Tour{
        id: number;
        title: string;
        location: string;
        price: number;
        reviews: number;
        image:string;
    }

      // State to keep track of the current card index and cards data
  const [tours, setTours] = useState<Tour[]>([]); // Explicitly type the cards state


    useEffect(() => {
        fetch("/data/db.json")
          .then((response) => response.json())
          .then((data) => setTours(data.tours)) // Assuming the JSON structure has a 'cards' array
          .catch((error) => console.error("Error fetching cards:", error));
      }, []);
    


  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slider]);


  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Most Popular Tours</h2>
          <p className="text-sm text-gray-500">
            Latin literature from 45 BC, making it over 2000 years old
          </p>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => slider.current?.prev()}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {tours.map((tour) => (
          <div key={tour.id} className="keen-slider__slide">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {/* Background Image */}
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                {/* Top Label */}
                <div className="text-sm">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    {tour.location}
                  </span>
                </div>
                {/* Main Content */}
                <div>
                  <h3 className="text-lg font-bold">{tour.title}</h3>
                  <div className="text-sm text-gray-300 mt-2">
                    <span>5 days | </span>
                    <span>from ${tour.price}</span>
                  </div>
                </div>
                {/* Bottom Content */}
                <div className="text-sm flex items-center justify-between">
                  <span>{tour.reviews} visits</span>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};