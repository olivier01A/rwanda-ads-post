import { Link } from 'react-router';
import { MapPin, Star } from 'lucide-react';
import { Ad } from '../data/mockData';
import { imageMap } from '../utils/imageMap';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    return `${price.toLocaleString()} RWF`;
  };

  return (
    <Link to={`/ads/${ad.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
          <ImageWithFallback
            src={imageMap[ad.image]}
            alt={ad.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {ad.isFeatured && (
            <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-semibold shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              <span>Featured</span>
            </div>
          )}
          {ad.isFree && !ad.isFeatured && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold border-2 border-white shadow-lg">
              🆓 Free Ad
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
            {ad.title}
          </h3>
          <p className="text-2xl font-bold text-green-600 mb-3">
            {formatPrice(ad.price)}
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{ad.location}</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
            {ad.postedDate}
          </div>
        </div>
      </div>
    </Link>
  );
}