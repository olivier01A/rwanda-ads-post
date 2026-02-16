import { Link } from 'react-router';
import { Search, ArrowRight } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import AdCard from '../components/AdCard';
import { categories, mockAds } from '../data/mockData';
import { useState } from 'react';

export default function HomePage() {
  const [heroSearch, setHeroSearch] = useState('');
  const featuredAds = mockAds.filter(ad => ad.isFeatured).slice(0, 6);
  const recentAds = mockAds.slice(0, 8);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/ads?search=${heroSearch}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Buy & Sell Anything in Rwanda
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-green-100">
            Find great deals on electronics, vehicles, property, and more
          </p>
          
          {/* Hero Search Bar */}
          <form onSubmit={handleHeroSearch} className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="What are you looking for?"
                className="flex-1 h-14 sm:h-16 px-6 text-gray-900 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none text-base sm:text-lg"
              />
              <button
                type="submit"
                className="h-14 sm:h-16 px-8 sm:px-10 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-colors flex items-center justify-center space-x-2 text-base sm:text-lg"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Search</span>
              </button>
            </div>
          </form>

          <Link
            to="/post-ad"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
          >
            <span>Post Your Free Ad</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Browse Categories
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Explore what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ads Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Featured Ads
              </h2>
              <p className="text-gray-600">Premium listings for you</p>
            </div>
            <Link
              to="/ads?featured=true"
              className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Ads Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Recent Ads
              </h2>
              <p className="text-gray-600">Latest listings from across Rwanda</p>
            </div>
            <Link
              to="/ads"
              className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Sell Something?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Post your ad for free and reach thousands of buyers in Rwanda
          </p>
          <Link
            to="/post-ad"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
          >
            <span>Post Free Ad Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}