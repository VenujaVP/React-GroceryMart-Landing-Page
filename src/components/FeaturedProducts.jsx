import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

function FeaturedProducts() {
  const smallCards = [
    {
      id: 1,
      title: "Fresh Vegetables",
      collection: "Organic Collection",
      image: "/vegetables.png",
      bgColor: "bg-[#FFE5B4]",
      hoverColor: "hover:bg-[#FFD89B]"
    },
    {
      id: 2,
      title: "Fresh Fruits",
      collection: "Premium Selection",
      image: "/fruits.png",
      bgColor: "bg-[#E0F4E0]",
      hoverColor: "hover:bg-[#D0EBD0]"
    },
    {
      id: 3,
      title: "Fresh Berries",
      collection: "Season's Best",
      image: "/berries.png",
      bgColor: "bg-[#FFE4E1]",
      hoverColor: "hover:bg-[#FFD5D0]"
    }
  ];

  const largeCards = [
    {
      id: 1,
      title: "Organic Vegetables Pack",
      description: "Fresh from the garden",
      image: "/vegpack.png",
      originalPrice: 49.99,
      currentPrice: 40.99,
      discount: "18%",
      bgColor: "bg-[#E0F4E0]",
      hoverColor: "hover:bg-[#D0EBD0]"
    },
    {
      id: 2,
      title: "Mixed Fruits Pack",
      description: "Premium selection box",
      image: "/fruitpack.png",
      originalPrice: 59.99,
      currentPrice: 35.99,
      discount: "40%",
      bgColor: "bg-[#FFE5B4]",
      hoverColor: "hover:bg-[#FFD89B]"
    }
  ];

  return (
    <section className="py-8 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        FEATURED PRODUCTS
      </h2>

      {/* Small Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {smallCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} ${card.hoverColor} rounded-2xl p-6 h-[200px] 
              transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden`}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 pattern-dots-lg" />
            
            <div className="relative z-10 h-full flex justify-between">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {card.collection}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-gray-800 hover:gap-4 transition-all group">
                  <span className="border-b-2 border-gray-800">Shop Now</span>
                  <FaArrowRight className="group-hover:transform group-hover:translate-x-1" />
                </button>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Large Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {largeCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} ${card.hoverColor} rounded-2xl p-8 h-[300px] 
              transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden`}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 pattern-dots-lg" />
            
            <div className="relative z-10 h-full flex gap-6">
              <div className="w-1/2 relative">
                <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 
                  font-bold px-3 py-1 rounded-lg shadow-sm">
                  -{card.discount}
                </div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-contain"
                />
              </div>
              
              <div className="w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {card.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-800">
                      ${card.currentPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${card.originalPrice}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 px-6 py-3 rounded-lg 
                    border-2 border-gray-800 text-gray-800 hover:bg-gray-800 
                    hover:text-white transition-all duration-300">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts; 