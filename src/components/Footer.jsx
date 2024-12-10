import { FaShoppingCart, FaFacebookF, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#2D8B8B] text-white relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="bg-coral rounded-2xl p-8 mb-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 pattern-dots-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-white/90">
                Get the latest updates on new products and upcoming sales
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 
                transition-colors flex items-center gap-2">
                <FaPaperPlane />
                Send Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <FaShoppingCart className="text-coral" />
              GROCERY MART
            </div>
            <p className="text-white/80 leading-relaxed">
              "Shopping at Grocery Mart has been a game-changer. Their fresh produce 
              and excellent service keep me coming back. It's more than a store; 
              it's part of my daily life."
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4 text-white/80">
              <p>123 Main Street, New York, NY 10001</p>
              <p>support@grocerymart.com</p>
              <p>+1 234 567 890</p>
              <p>+1 234 567 891</p>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Quicklinks</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-coral transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Login</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Sign Up</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                      hover:bg-coral transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between 
          items-center gap-4 text-white/80">
          <p>GROCERY MART with passion by Saeed Alam © 2025</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms & Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 