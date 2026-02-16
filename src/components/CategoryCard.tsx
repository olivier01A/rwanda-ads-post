import { Link } from 'react-router';
import { 
  Laptop, 
  Smartphone, 
  Car, 
  Home, 
  Briefcase, 
  Wrench, 
  ShoppingBag, 
  Sofa, 
  Leaf, 
  User,
  MoreHorizontal 
} from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop,
  Smartphone,
  Car,
  Home,
  Briefcase,
  Wrench,
  ShoppingBag,
  Sofa,
  Leaf,
  User,
  MoreHorizontal
};

export default function CategoryCard({ id, name, icon }: CategoryCardProps) {
  const IconComponent = iconMap[icon] || MoreHorizontal;

  return (
    <Link to={`/ads?category=${id}`} className="group">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 sm:p-8 text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
        <h3 className="text-white font-semibold text-base sm:text-lg">
          {name}
        </h3>
      </div>
    </Link>
  );
}