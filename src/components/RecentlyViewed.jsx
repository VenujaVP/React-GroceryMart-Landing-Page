import { FaStar, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function RecentlyViewed() {
  const recentProducts = [
    {
      id: 1,
      name: "Organic Avocado",
      image: "/avocado.png",
      rating: 4.8,
      reviews: 156,
      price: 8.99
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      image: "/strawberries.png",
      rating: 4.9,
      reviews: 243,
      price: 12.99
    },
    {
      id: 3,
      name: "Organic Eggs",
      image: "/eggs.png",
      rating: 4.7,
      reviews: 189,
      price: 6.99
    },
    {
      id: 4,
      name: "Whole Grain Bread",
      image: "/bread.png",
      rating: 4.6,
      reviews: 167,
      price: 4.99
    }
  ];

  return (
    <section className="py-8">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          RECENTLY VIEWED
        </h2>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center 
            justify-center hover:border-coral hover:text-coral transition-all duration-300">
            <FaChevronLeft />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center 
            justify-center hover:border-coral hover:text-coral transition-all duration-300">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-xl p-6 transition-all duration-300 
              hover:shadow-lg group"
          >
            {/* Image Container */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain transition-transform duration-300 
                  group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800 line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="text-xl font-bold text-gray-800">
                ${product.price}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 
                mt-4 border-2 border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 
                transition-all duration-300">
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentlyViewed; 