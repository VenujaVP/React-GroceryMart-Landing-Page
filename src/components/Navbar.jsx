// npm install react-icons
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

import { useState } from 'react';
import { FaShoppingCart, FaUser, FaStar, FaSearch, FaMapMarkerAlt, FaTag, FaChevronDown, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Tier */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="flex items-center">
              <FaShoppingCart className="text-2xl text-coral" />
              <span className="ml-2 text-xl font-bold text-gray-800">GROCERY MART</span>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search for Vegetables..."
                className="w-full md:w-[400px] pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coral text-gray-700"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center cursor-pointer hover:text-coral">
              <FaUser className="text-coral" />
              <span className="ml-2 text-gray-700">Account</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-coral">
              <FaStar className="text-coral" />
              <span className="ml-2 text-gray-700">Wishlist (3)</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-coral">
              <FaShoppingCart className="text-coral" />
              <span className="ml-2 text-gray-700">Cart (4)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center w-full justify-between text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="flex items-center">
                <FaBars className="text-coral" />
                <span className="ml-2">Menu</span>
              </span>
              <FaChevronDown className={`ml-1 text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Primary Navigation */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto`}>
              <button className="hidden md:flex items-center text-gray-700 hover:text-coral">
                <FaBars className="text-coral" />
                <span className="ml-2">Menu</span>
              </button>
              <a href="#" className="text-gray-700 hover:text-coral">Home</a>
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-coral">
                <span>Categories</span>
                <FaChevronDown className="ml-1 text-sm" />
              </div>
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-coral">
                <span>Products</span>
                <FaChevronDown className="ml-1 text-sm" />
              </div>
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-coral">
                <span>Pages</span>
                <FaChevronDown className="ml-1 text-sm" />
              </div>
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-coral">
                <span>Blog</span>
                <FaChevronDown className="ml-1 text-sm" />
              </div>
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-coral">
                <FaTag className="text-coral" />
                <span className="ml-2">Offers</span>
              </div>
              
              {/* Location - Mobile View (Inside Dropdown) */}
              <div className="flex md:hidden items-center text-gray-700 border-t w-full pt-4 mt-2">
                <FaMapMarkerAlt className="text-coral" />
                <span className="ml-2">Surat</span>
              </div>
            </div>

            {/* Location - Desktop View */}
            <div className="hidden md:flex items-center text-gray-700">
              <FaMapMarkerAlt className="text-coral" />
              <span className="ml-2">Surat</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

