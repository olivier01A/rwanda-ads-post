export interface Ad {
  id: string;
  title: string;
  price: number;
  location: string;
  category: string;
  condition: 'new' | 'used';
  isFeatured: boolean;
  isFree: boolean;
  image: string;
  images: string[];
  description: string;
  seller: {
    name: string;
    phone: string;
    memberSince: string;
    website?: string;
  };
  postedDate: string;
}

export const mockAds: Ad[] = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max - 256GB',
    price: 850000,
    location: 'Kigali, Kicukiro',
    category: 'phones',
    condition: 'used',
    isFeatured: true,
    isFree: false,
    image: 'iphone-14-pro',
    images: ['iphone-14-pro', 'iphone-14-pro', 'iphone-14-pro'],
    description: 'Excellent condition iPhone 14 Pro Max with 256GB storage. Comes with original box, charger, and case. No scratches, battery health 95%. Used for 6 months only.',
    seller: {
      name: 'Jean Paul',
      phone: '+250 788 123 456',
      memberSince: 'January 2024'
    },
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Toyota Land Cruiser V8 2020',
    price: 45000000,
    location: 'Kigali, Gasabo',
    category: 'vehicles',
    condition: 'used',
    isFeatured: true,
    isFree: false,
    image: 'toyota-landcruiser',
    images: ['toyota-landcruiser', 'toyota-landcruiser', 'toyota-landcruiser'],
    description: 'Well maintained Toyota Land Cruiser V8 2020 model. Full service history, accident-free, single owner. All documents ready for transfer.',
    seller: {
      name: 'Emmanuel Motors',
      phone: '+250 788 234 567',
      memberSince: 'March 2023'
    },
    postedDate: '1 day ago'
  },
  {
    id: '3',
    title: '3 Bedroom Apartment - Kimihurura',
    price: 65000000,
    location: 'Kigali, Kimihurura',
    category: 'property',
    condition: 'new',
    isFeatured: true,
    isFree: false,
    image: 'modern-apartment',
    images: ['modern-apartment', 'modern-apartment', 'modern-apartment'],
    description: 'Luxurious 3 bedroom apartment in prime Kimihurura location. Modern finishes, secure compound, 24/7 security, parking for 2 cars. Ready title deed.',
    seller: {
      name: 'Prime Properties Rwanda',
      phone: '+250 788 345 678',
      memberSince: 'June 2022',
      website: 'www.primepropertiesrw.com'
    },
    postedDate: '3 days ago'
  },
  {
    id: '4',
    title: 'Samsung 55" Smart TV 4K',
    price: 450000,
    location: 'Kigali, Nyarugenge',
    category: 'electronics',
    condition: 'new',
    isFeatured: false,
    isFree: true,
    image: 'samsung-tv',
    images: ['samsung-tv', 'samsung-tv', 'samsung-tv'],
    description: 'Brand new Samsung 55 inch 4K Smart TV. Still in box with warranty. Latest model with HDR and built-in streaming apps.',
    seller: {
      name: 'Tech Hub Rwanda',
      phone: '+250 788 456 789',
      memberSince: 'August 2023',
      website: 'www.techhubrwanda.com'
    },
    postedDate: '5 hours ago'
  },
  {
    id: '5',
    title: 'Experienced Driver Looking for Job',
    price: 0,
    location: 'Kigali',
    category: 'jobs',
    condition: 'new',
    isFeatured: false,
    isFree: true,
    image: 'driver-job',
    images: ['driver-job'],
    description: '10 years driving experience, clean record, valid license. Available for full-time or part-time work. References available.',
    seller: {
      name: 'Patrick Nkusi',
      phone: '+250 788 567 890',
      memberSince: 'November 2025'
    },
    postedDate: '1 week ago'
  },
  {
    id: '6',
    title: 'MacBook Pro M2 - 16GB RAM',
    price: 1200000,
    location: 'Kigali, Remera',
    category: 'electronics',
    condition: 'used',
    isFeatured: true,
    isFree: false,
    image: 'macbook-pro',
    images: ['macbook-pro', 'macbook-pro'],
    description: 'MacBook Pro M2 chip, 16GB RAM, 512GB SSD. Perfect condition, used for 4 months. Comes with charger and case.',
    seller: {
      name: 'Marie Claire',
      phone: '+250 788 678 901',
      memberSince: 'April 2024'
    },
    postedDate: '4 days ago'
  },
  {
    id: '7',
    title: 'Modern Office Space for Rent',
    price: 800000,
    location: 'Kigali, Kiyovu',
    category: 'property',
    condition: 'new',
    isFeatured: true,
    isFree: false,
    image: 'office-space',
    images: ['office-space', 'office-space'],
    description: '200 sqm modern office space in Kiyovu business district. Fully furnished, high-speed internet, parking available. Monthly rent.',
    seller: {
      name: 'Commercial Properties Ltd',
      phone: '+250 788 789 012',
      memberSince: 'January 2023'
    },
    postedDate: '2 days ago'
  },
  {
    id: '8',
    title: 'Honda CRV 2019 - Clean',
    price: 18500000,
    location: 'Kigali, Gikondo',
    category: 'vehicles',
    condition: 'used',
    isFeatured: false,
    isFree: true,
    image: 'honda-crv',
    images: ['honda-crv', 'honda-crv'],
    description: 'Honda CRV 2019 in excellent condition. Well maintained, full service history. Ready for inspection and test drive.',
    seller: {
      name: 'Auto World Rwanda',
      phone: '+250 788 890 123',
      memberSince: 'May 2023'
    },
    postedDate: '6 days ago'
  },
  {
    id: '9',
    title: 'Professional Photographer Available',
    price: 50000,
    location: 'Kigali',
    category: 'services',
    condition: 'new',
    isFeatured: false,
    isFree: true,
    image: 'photographer-service',
    images: ['photographer-service'],
    description: 'Professional photography services for weddings, events, portraits, and commercial shoots. 5 years experience. Portfolio available.',
    seller: {
      name: 'Vision Photography',
      phone: '+250 788 901 234',
      memberSince: 'July 2024',
      website: 'www.visionphoto.rw'
    },
    postedDate: '3 days ago'
  },
  {
    id: '10',
    title: 'Italian Leather Sofa Set - 7 Seater',
    price: 1800000,
    location: 'Kigali, Kimironko',
    category: 'home',
    condition: 'new',
    isFeatured: true,
    isFree: false,
    image: 'leather-sofa',
    images: ['leather-sofa', 'leather-sofa'],
    description: 'Brand new 7-seater Italian leather sofa set. Elegant design, high quality, comfortable. Delivery and installation included.',
    seller: {
      name: 'Furniture Palace',
      phone: '+250 788 012 345',
      memberSince: 'September 2023'
    },
    postedDate: '1 day ago'
  },
  {
    id: '11',
    title: 'Fresh Avocados - Wholesale',
    price: 500,
    location: 'Musanze',
    category: 'agriculture',
    condition: 'new',
    isFeatured: false,
    isFree: true,
    image: 'avocados',
    images: ['avocados'],
    description: 'Fresh avocados from Musanze. Wholesale prices available. Per kilogram. Delivery to Kigali available for large orders.',
    seller: {
      name: 'Agri Connect Rwanda',
      phone: '+250 788 123 456',
      memberSince: 'February 2024'
    },
    postedDate: '2 hours ago'
  },
  {
    id: '12',
    title: 'Designer Handbag Collection',
    price: 120000,
    location: 'Kigali, City Center',
    category: 'fashion',
    condition: 'new',
    isFeatured: false,
    isFree: true,
    image: 'designer-handbags',
    images: ['designer-handbags'],
    description: 'Authentic designer handbags. Various styles and colors available. Perfect condition, original packaging.',
    seller: {
      name: 'Fashion Boulevard',
      phone: '+250 788 234 567',
      memberSince: 'October 2024'
    },
    postedDate: '5 days ago'
  },
  {
    id: '13',
    title: 'Wedding Dress - Size M',
    price: 300000,
    location: 'Kigali, Remera',
    category: 'personal',
    condition: 'used',
    isFeatured: false,
    isFree: true,
    image: 'wedding-dress',
    images: ['wedding-dress'],
    description: 'Beautiful white wedding dress, size M. Worn once, professionally cleaned. Perfect condition with veil included.',
    seller: {
      name: 'Grace Uwase',
      phone: '+250 788 345 678',
      memberSince: 'January 2026'
    },
    postedDate: '3 days ago'
  },
  {
    id: '14',
    title: 'Baby Stroller - Excellent Condition',
    price: 85000,
    location: 'Kigali, Nyarutarama',
    category: 'personal',
    condition: 'used',
    isFeatured: false,
    isFree: true,
    image: 'baby-stroller',
    images: ['baby-stroller'],
    description: 'High-quality baby stroller, barely used. Comfortable, easy to fold, comes with rain cover and mosquito net.',
    seller: {
      name: 'Sarah Kamikazi',
      phone: '+250 788 456 789',
      memberSince: 'November 2025'
    },
    postedDate: '1 week ago'
  },
  {
    id: '15',
    title: 'Fitness Equipment Set',
    price: 150000,
    location: 'Kigali, Kicukiro',
    category: 'personal',
    condition: 'used',
    isFeatured: false,
    isFree: true,
    image: 'fitness-equipment',
    images: ['fitness-equipment'],
    description: 'Complete home fitness set including dumbbells (5-20kg), yoga mat, resistance bands, and jump rope. Great condition.',
    seller: {
      name: 'David Mugisha',
      phone: '+250 788 567 890',
      memberSince: 'August 2025'
    },
    postedDate: '2 days ago'
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'Laptop' },
  { id: 'phones', name: 'Phones', icon: 'Smartphone' },
  { id: 'vehicles', name: 'Vehicles', icon: 'Car' },
  { id: 'property', name: 'Property', icon: 'Home' },
  { id: 'jobs', name: 'Jobs', icon: 'Briefcase' },
  { id: 'services', name: 'Services', icon: 'Wrench' },
  { id: 'fashion', name: 'Fashion', icon: 'ShoppingBag' },
  { id: 'home', name: 'Home & Furniture', icon: 'Sofa' },
  { id: 'agriculture', name: 'Agriculture', icon: 'Leaf' },
  { id: 'personal', name: 'Personal', icon: 'User' },
  { id: 'other', name: 'Other', icon: 'MoreHorizontal' }
];