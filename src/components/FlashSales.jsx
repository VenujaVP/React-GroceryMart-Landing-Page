import { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 50
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Fresh Organic Apple",
      subtitle: "Premium Quality Fruits",
      image: "/apple.jpg",
      rating: 4.8,
      reviews: 245,
      originalPrice: 25.00,
      discountedPrice: 18.75,
      discount: 25,
      inStock: true
    },
    {
      id: 2,
      name: "Fresh Orange Juice",
      subtitle: "100% Natural Juice",
      image: "/Orange.jpg",
      rating: 4.6,
      reviews: 189,
      originalPrice: 22.00,
      discountedPrice: 18.04,
      discount: 18,
      inStock: false
    }
  ];

  return (
    <section className="relative w-full rounded-lg overflow-hidden bg-gradient-animation">
      {/* Decorative Elements - Similar to Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white/20 rotate-45" />
        <div className="absolute top-20 right-40 w-14 h-14 border-2 border-white/20 rounded-lg rotate-12" />
      </div>

      <div className="relative z-10 px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FLASH SALES
            </h2>
            <div className="flex gap-4 items-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/90 rounded-lg p-2 min-w-[60px] shadow-lg">
                    <span className="text-2xl font-bold text-gray-800">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-white/80 mt-1 block capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-coral text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-lg">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-6">
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 font-bold px-3 py-1 rounded-lg shadow-sm">
                    -{product.discount}%
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-48 h-48 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600">{product.subtitle}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-gray-600">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-800">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all shadow-sm ${
                      product.inStock 
                        ? 'bg-coral text-white hover:bg-opacity-90' 
                        : 'border-2 border-coral text-coral hover:bg-coral hover:text-white'
                    }`}
                  >
                    <FaShoppingCart />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlashSales; 