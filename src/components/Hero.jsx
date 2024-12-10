import { FaArrowRight, FaStar } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative w-full rounded-lg overflow-hidden bg-gradient-animation">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white/20 rotate-45" />
        <div className="absolute top-20 right-40 w-14 h-14 border-2 border-white/20 rounded-lg rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="relative z-10 space-y-8 pl-4 md:pl-8 lg:pl-12">
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Fresh Groceries
                <br />
                Delivered To Your
                <br />
                Doorstep
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg">
                Get fresh groceries and everyday essentials delivered in minutes. 
                Enjoy free delivery on your first order!
              </p>
            </div>

            {/* CTA Button */}
            <button className="group flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-opacity-90 hover:gap-4">
              Shop Now
              <FaArrowRight className="transition-all group-hover:transform group-hover:translate-x-1" />
            </button>

            {/* Social Proof */}
            <div className="bg-white rounded-xl p-4 shadow-lg max-w-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                          alt={`Customer ${index}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-2">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <span className="font-semibold text-gray-800">4.9</span>
                    </div>
                    <span className="text-sm text-gray-500">(12k Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg xl:max-w-xl">
              <img
                src="/Person.png"
                alt="Delivery Person with Groceries"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 