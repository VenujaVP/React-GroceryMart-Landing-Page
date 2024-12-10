import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FlashSales from './components/FlashSales'
import FeaturedProducts from './components/FeaturedProducts'
import ProductBanner from './components/ProductBanner'
import PopularProducts from './components/PopularProducts'
import SuperSaleBanner from './components/SuperSaleBanner'
import RecentlyViewed from './components/RecentlyViewed'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        <div className="py-8">
          <Hero />
        </div>
        <Categories />
        <FlashSales />
        <FeaturedProducts />
        <ProductBanner />
        <PopularProducts />
        <SuperSaleBanner />
        <RecentlyViewed />
      </main>
      <Footer />
    </div>
  )
}

export default App
