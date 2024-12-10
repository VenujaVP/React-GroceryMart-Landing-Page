import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaCarrot, FaDrumstickBite, FaAppleAlt, FaWineBottle, FaCoffee, FaBreadSlice, FaFish, FaIceCream, FaCheese, FaEgg } from 'react-icons/fa';
import { TbMilk } from 'react-icons/tb';

function Categories() {
  const [activeCategory, setActiveCategory] = useState('Milk');
  const scrollContainerRef = useRef(null);

  const categories = [
    { name: 'Vegetables', icon: FaCarrot },
    { name: 'Meat', icon: FaDrumstickBite },
    { name: 'Fruits', icon: FaAppleAlt },
    { name: 'Milk', icon: TbMilk },
    { name: 'Drinks', icon: FaWineBottle },
    { name: 'Coffee', icon: FaCoffee },
    { name: 'Bakery', icon: FaBreadSlice },
    { name: 'Seafood', icon: FaFish },
    { name: 'Ice Cream', icon: FaIceCream },
    { name: 'Cheese', icon: FaCheese },
    { name: 'Eggs', icon: FaEgg },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' 
        ? -container.offsetWidth 
        : container.offsetWidth;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12">
      {/* Header with updated button styles */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          SHOP BY CATEGORIES
        </h2>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-coral hover:border-coral transition-all duration-300 group"
          >
            <FaChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-coral hover:border-coral transition-all duration-300 group"
          >
            <FaChevronRight className="text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Updated Categories Grid */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;
          
          return (
            <div
              key={category.name}
              className="snap-start flex-shrink-0"
            >
              <button
                onClick={() => setActiveCategory(category.name)}
                className={`w-40 h-40 rounded-2xl flex flex-col items-center justify-center gap-4 
                  transition-all duration-300 hover:scale-105 ${
                  isActive 
                    ? 'bg-[#2F8F9D] text-white shadow-lg' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className={`text-4xl transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-700'
                }`} />
                <span className="font-medium text-lg">{category.name}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories; 