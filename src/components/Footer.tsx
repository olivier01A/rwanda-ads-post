import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2 w-fit">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RA</span>
                </div>
                <span className="text-xl font-bold">Rwanda Ads</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Rwanda's leading platform to buy and sell anything. Post your ads for free and reach thousands of buyers across the country.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-green-500 transition-colors">About Rwanda Ads Post</Link>
              </li>
              <li>
                <Link to="/post-ad" className="hover:text-green-500 transition-colors">Post a Free Ad</Link>
              </li>
              <li>
                <Link to="/ads" className="hover:text-green-500 transition-colors">Browse All Ads</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-green-500 transition-colors">Pricing & Plans</Link>
              </li>
              <li>
                <Link to="/safety-tips" className="hover:text-green-500 transition-colors">Safety Tips</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/terms" className="hover:text-green-500 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-green-500 transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-green-500 transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@rwandaadspost.rw" className="hover:text-green-500 transition-colors">
                  support@rwandaadspost.rw
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+250788000000" className="hover:text-green-500 transition-colors">
                  +250 788 000 000
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2026 Rwanda Ads Post. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>in Rwanda 🇷🇼</span>
          </div>
        </div>
      </div>
    </footer>
  );
}