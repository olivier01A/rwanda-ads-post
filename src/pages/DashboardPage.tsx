import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Star, 
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  Settings as SettingsIcon
} from 'lucide-react';
import { mockAds } from '../data/mockData';
import { imageMap } from '../utils/imageMap';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Tab = 'active' | 'pending' | 'expired' | 'payments' | 'settings';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('active');
  
  // Mock user ads (using first 3 from mockAds)
  const userAds = mockAds.slice(0, 3);
  const activeAds = userAds.filter((_, i) => i < 2);
  const expiredAds = userAds.filter((_, i) => i === 2);

  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    return `${price.toLocaleString()} RWF`;
  };

  const tabs = [
    { id: 'active' as Tab, label: 'Active Ads', count: activeAds.length },
    { id: 'pending' as Tab, label: 'Pending', count: 0 },
    { id: 'expired' as Tab, label: 'Expired', count: expiredAds.length },
    { id: 'payments' as Tab, label: 'Payments', count: 2 },
    { id: 'settings' as Tab, label: 'Settings', count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your ads and account</p>
          </div>
          <Link
            to="/post-ad"
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            <Plus className="w-5 h-5" />
            <span>Post New Ad</span>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Ads</p>
                <p className="text-2xl font-bold text-gray-900">{activeAds.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Featured Ads</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Response Rate</p>
                <p className="text-2xl font-bold text-gray-900">85%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-1 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors
                    ${activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <span className={`
                      ml-2 px-2 py-0.5 rounded-full text-xs
                      ${activeTab === tab.id
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Active Ads */}
            {activeTab === 'active' && (
              <div className="space-y-4">
                {activeAds.length > 0 ? (
                  activeAds.map((ad) => (
                    <div key={ad.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to={`/ads/${ad.id}`} className="flex-shrink-0">
                          <ImageWithFallback
                            src={imageMap[ad.image]}
                            alt={ad.title}
                            className="w-full sm:w-32 h-32 object-cover rounded-lg"
                          />
                        </Link>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <Link to={`/ads/${ad.id}`} className="text-lg font-semibold text-gray-900 hover:text-green-600">
                                {ad.title}
                              </Link>
                              <p className="text-xl font-bold text-green-600 mt-1">
                                {formatPrice(ad.price)}
                              </p>
                            </div>
                            {ad.isFeatured && (
                              <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Featured</span>
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              234 views
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {ad.postedDate}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Link
                              to={`/ads/${ad.id}`}
                              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold"
                            >
                              View Ad
                            </Link>
                            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold">
                              <Edit className="w-4 h-4" />
                              <span>Edit</span>
                            </button>
                            {!ad.isFeatured && (
                              <Link
                                to={`/payment/${ad.id}`}
                                className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-semibold"
                              >
                                <Star className="w-4 h-4" />
                                <span>Promote</span>
                              </Link>
                            )}
                            <button className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-semibold">
                              <Trash2 className="w-4 h-4" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No active ads</h3>
                    <p className="text-gray-600 mb-6">Start selling by posting your first ad</p>
                    <Link
                      to="/post-ad"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Post an Ad</span>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Pending */}
            {activeTab === 'pending' && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No pending ads</h3>
                <p className="text-gray-600">All your ads are either active or expired</p>
              </div>
            )}

            {/* Expired */}
            {activeTab === 'expired' && (
              <div className="space-y-4">
                {expiredAds.map((ad) => (
                  <div key={ad.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <ImageWithFallback
                        src={imageMap[ad.image]}
                        alt={ad.title}
                        className="w-full sm:w-32 h-32 object-cover rounded-lg opacity-75"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-700">{ad.title}</h3>
                            <p className="text-xl font-bold text-gray-600 mt-1">
                              {formatPrice(ad.price)}
                            </p>
                          </div>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                            <XCircle className="w-4 h-4" />
                            <span>Expired</span>
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          This ad expired on January 15, 2026
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                            Repost Ad
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-semibold">
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Payments */}
            {activeTab === 'payments' && (
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Featured Ad Promotion</h3>
                      <p className="text-sm text-gray-600">iPhone 14 Pro Max - 256GB</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Paid
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Amount</p>
                      <p className="font-semibold text-gray-900">5,000 RWF</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-semibold text-gray-900">Feb 1, 2026</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Method</p>
                      <p className="font-semibold text-gray-900">MTN MoMo</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status</p>
                      <p className="font-semibold text-green-600">Completed</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Top Ad Promotion</h3>
                      <p className="text-sm text-gray-600">Toyota Land Cruiser V8 2020</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Paid
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Amount</p>
                      <p className="font-semibold text-gray-900">10,000 RWF</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-semibold text-gray-900">Jan 28, 2026</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Method</p>
                      <p className="font-semibold text-gray-900">Visa Card</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status</p>
                      <p className="font-semibold text-green-600">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+250 788 123 456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}