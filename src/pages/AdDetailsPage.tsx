import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Share2, 
  Flag, 
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Eye,
  Shield,
  Globe
} from 'lucide-react';
import { mockAds } from '../data/mockData';
import { imageMap } from '../utils/imageMap';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AdDetailsPage() {
  const { id } = useParams();
  const ad = mockAds.find(a => a.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!ad) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ad not found</h2>
          <Link to="/ads" className="text-green-600 hover:text-green-700">
            Browse all ads
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    return `${price.toLocaleString()} RWF`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ad.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + ad.images.length) % ad.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/ads" className="hover:text-green-600">Ads</Link>
          <span>/</span>
          <span className="text-gray-900">{ad.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[16/10] bg-gray-200">
                <ImageWithFallback
                  src={imageMap[ad.images[currentImageIndex]]}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
                {ad.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                {ad.isFeatured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 font-semibold shadow-lg">
                    <Star className="w-5 h-5 fill-current" />
                    <span>Featured</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {ad.images.length}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              {ad.images.length > 1 && (
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {ad.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        idx === currentImageIndex ? 'border-green-600' : 'border-gray-200'
                      }`}
                    >
                      <ImageWithFallback
                        src={imageMap[img]}
                        alt={`${ad.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ad Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {ad.title}
                  </h1>
                  <div className="flex items-center text-gray-600 space-x-4 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {ad.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {ad.postedDate}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      234 views
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-green-600">
                  {formatPrice(ad.price)}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  ad.condition === 'new' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {ad.condition === 'new' ? 'New' : 'Used'}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="font-bold text-xl mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {ad.description}
                </p>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Safety Tips</h3>
                  <ul className="space-y-1 text-sm text-amber-800">
                    <li>• Meet in a safe, public location</li>
                    <li>• Check the item before you buy</li>
                    <li>• Pay only after collecting the item</li>
                    <li>• Never share personal financial information</li>
                    <li>• Report suspicious ads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Seller Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Seller Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Seller Information</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {ad.seller.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{ad.seller.name}</p>
                    <p className="text-sm text-gray-600">
                      Member since {ad.seller.memberSince}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${ad.seller.phone}`}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Seller</span>
                  </a>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat</span>
                  </button>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Contact Number:</p>
                    <p className="font-semibold text-gray-900">{ad.seller.phone}</p>
                  </div>
                  {ad.seller.website && (
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Website:</p>
                      <a 
                        href={`https://${ad.seller.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
                      >
                        <Globe className="w-4 h-4" />
                        <span>{ad.seller.website}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Promote Ad */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-md p-6 text-gray-900">
                <Star className="w-10 h-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">Want More Views?</h3>
                <p className="text-sm mb-4 text-gray-800">
                  Promote this ad to reach thousands of buyers faster!
                </p>
                <Link
                  to={`/payment/${ad.id}`}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  Promote This Ad
                </Link>
              </div>

              {/* Report Ad */}
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Flag className="w-5 h-5" />
                <span className="font-semibold">Report Ad</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}