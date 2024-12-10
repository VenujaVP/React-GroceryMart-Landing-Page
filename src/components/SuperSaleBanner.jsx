import { FaArrowRight } from 'react-icons/fa';

function SuperSaleBanner() {
  return (
    <section className="relative w-full h-[320px] rounded-2xl overflow-hidden my-12 flex">
      {/* Left Section - Image */}
      <div className="w-[45%] relative bg-[#E8F5E9]">
        <img
          src="/vegetable-basket.png"
          alt="Fresh Vegetables Basket"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Curved Divider */}
        <div className="absolute top-0 right-0 h-full w-24 transform translate-x-12">
          <div className="absolute inset-0 bg-[#E8F5E9]" />
          <svg
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            fill="#1B4D4B"
          >
            <path d="M0,0 C50,100 50,300 0,400 L100,400 L100,0 Z" />
          </svg>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="w-[55%] bg-[#1B4D4B] relative">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 pattern-dots-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center px-16">
          {/* Sale Badge */}
          <div className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Up to 45% OFF
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-[42px] font-bold text-white leading-tight tracking-wide">
            SUPER SALE VEGETABLES
          </h2>

          {/* Subheading */}
          <p className="text-lg text-white/90 mt-4 max-w-[480px] leading-relaxed">
            Get fresh, organic vegetables at unbeatable prices. 
            Stock up on nature's best for your healthy lifestyle.
          </p>

          {/* CTA Button */}
          <button className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 
            bg-[#4CAF50] text-white font-semibold rounded-lg 
            hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Now
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-6 right-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuperSaleBanner; 