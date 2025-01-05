export default function HeroSection() {
    return (
      <div className="relative h-[60vh] w-full overflow-hidden mt-12">
        <img
          src="/hero-swiss.jpg?height=920&width=1080"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Discover amazing content and services tailored just for you. Start your journey with us today!
          </p>
        </div>
      </div>
    )
  }
  
  