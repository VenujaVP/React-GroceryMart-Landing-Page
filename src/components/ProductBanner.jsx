import { FaArrowRight } from 'react-icons/fa';

function ProductBanner() {
  return (
    <section className="relative w-full h-[400px] rounded-2xl overflow-hidden my-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/butter-banner.jpg"
          alt="Fresh Organic Butter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/10 to-transparent" />
      </div>

      {/* Content Card */}
      <div className="absolute bottom-8 right-8 max-w-[320px] bg-white rounded-2xl p-6 shadow-lg">
        {/* Discount Tag */}
        <div className="mb-2">
          <span className="text-coral font-semibold text-lg">
            25% OFF
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          Fresh & Organic Butter
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Made from the finest organic cream, our butter is rich, creamy, and perfect for all your culinary needs.
        </p>

        {/* CTA Button */}
        <button className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-800 
          rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
          Shop Now
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Product Details Overlay */}
      <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-800 font-medium">Fresh Stock</span>
        </div>
      </div>
    </section>
  );
}

export default ProductBanner; 