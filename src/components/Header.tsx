import { Link, useNavigate } from 'react-router';
import { Search, Menu, User, Home, List, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/ads?search=${searchQuery}&category=${category}`);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RA</span>
              </div>
              <span className="hidden sm:inline text-lg font-bold text-gray-900">Rwanda Ads</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 px-4 bg-gray-100 border-r border-gray-300 rounded-l-lg focus:outline-none"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="phones">Phones</option>
              <option value="vehicles">Vehicles</option>
              <option value="property">Property</option>
              <option value="jobs">Jobs</option>
              <option value="services">Services</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Furniture</option>
              <option value="agriculture">Agriculture</option>
              <option value="personal">Personal</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="flex-1 h-11 px-4 bg-gray-100 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 px-6 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              to="/post-ad"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
            >
              + Post Ad
            </Link>
            <Link
              to="/login"
              className="hidden sm:flex items-center space-x-2 px-4 md:px-6 py-2 md:py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors font-semibold text-sm md:text-base"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="sm:hidden p-2">
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:hidden">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <SheetDescription className="text-left">
                    Navigate through Rwanda Ads Post
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Login Button */}
                  <button
                    onClick={() => handleNavigation('/login')}
                    className="flex items-center space-x-3 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    <User className="w-5 h-5" />
                    <span>Login / Register</span>
                  </button>

                  {/* Navigation Links */}
                  <button
                    onClick={() => handleNavigation('/')}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </button>

                  <button
                    onClick={() => handleNavigation('/ads')}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <List className="w-5 h-5" />
                    <span>Browse Ads</span>
                  </button>

                  <button
                    onClick={() => handleNavigation('/dashboard')}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </button>

                  {/* Category Quick Links */}
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Categories
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {[
                        { name: 'Electronics', value: 'electronics' },
                        { name: 'Phones', value: 'phones' },
                        { name: 'Vehicles', value: 'vehicles' },
                        { name: 'Property', value: 'property' },
                        { name: 'Jobs', value: 'jobs' },
                        { name: 'Services', value: 'services' },
                        { name: 'Fashion', value: 'fashion' },
                        { name: 'Home & Furniture', value: 'home' },
                        { name: 'Agriculture', value: 'agriculture' },
                        { name: 'Personal', value: 'personal' },
                        { name: 'Other', value: 'other' },
                      ].map((cat) => (
                        <button
                          key={cat.value}
                          onClick={() => handleNavigation(`/ads?category=${cat.value}`)}
                          className="text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 rounded transition-colors"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 h-10 px-4 bg-gray-100 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="h-10 px-4 bg-green-600 text-white rounded-r-lg"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}