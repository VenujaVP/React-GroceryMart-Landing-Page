import { useState } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

function PopularProducts() {
  const [activeTab, setActiveTab] = useState('New Arrival');
  
  const tabs = ['All', 'New Arrival', 'Best Seller', 'Featured'];
  
  const products = [
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      image: "/tomatoes.png",
      rating: 4.8,
      reviews: 129,
      price: 12.99
    },
    {
      id: 2,
      name: "Natural Honey",
      image: "/honey.png",
      rating: 4.9,
      reviews: 235,
      price: 24.99
    },
    {
      id: 3,
      name: "Organic Chicken",
      image: "/chicken.png",
      rating: 4.7,
      reviews: 158,
      price: 18.99
    },
    {
      id: 4,
      name: "Fresh Milk",
      image: "/milk.png",
      rating: 4.9,
      reviews: 198,
      price: 6.99
    },
    // Add more products as needed to fill the grid
  ];

  return (
    <section className="py-12">
      {/* Header with Tabs */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            POPULAR PRODUCTS
          </h2>
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 text-lg font-medium transition-colors duration-300
                  ${activeTab === tab ? 'text-coral' : 'text-gray-600 hover:text-gray-800'}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-coral rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-coral text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-sm">
          View All
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-2xl p-6 flex flex-col transition-all duration-300 
              hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Product Image */}
            <div className="bg-white rounded-xl p-6 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3 flex-1">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
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
              <div className="text-2xl font-bold text-gray-800">
                ${product.price}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 
              border-2 border-gray-800 rounded-lg text-gray-800 hover:bg-gray-800 
              hover:text-white transition-all duration-300">
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProducts; 