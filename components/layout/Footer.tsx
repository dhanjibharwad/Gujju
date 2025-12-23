import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Shop By Category */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              SHOP BY CATEGORY
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Mobile & Tablets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Laptops & Computers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Men's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Women's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Kids Section
                </a>
              </li>
            </ul>
          </div>

          {/* Gujjuemarket Advantage */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              GUJJUEMARKET ADVANTAGE
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  30-day returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Free shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Easy EMI options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Product exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Warranty support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Gift cards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Loyalty rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Return policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Shipping info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Size guide
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              ABOUT US
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Our story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Become a seller
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              CONTACT US
            </h3>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-gray-900 font-medium">
                **Gujjuemarket E-commerce Pvt Ltd**
              </p>
              <p className="text-sm text-gray-600">Gujarat, India - 380001</p>
              
              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  24X7 CUSTOMER SUPPORT
                </p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    General : <a href="mailto:support@gujjuemarket.com" className="text-amber-700 hover:underline">support@gujjuemarket.com</a>
                  </p>
                  <p>
                    Corporate : <a href="mailto:business@gujjuemarket.com" className="text-amber-700 hover:underline">business@gujjuemarket.com</a>
                  </p>
                  <p>
                    HR : <a href="mailto:careers@gujjuemarket.com" className="text-amber-700 hover:underline">careers@gujjuemarket.com</a>
                  </p>
                  <p>
                    Grievance : <a href="#" className="text-amber-700 hover:underline">click here</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-4 mb-6">
              <a href="tel:" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full border-2 border-amber-700 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Phone className="w-5 h-5 text-amber-700 group-hover:text-white" />
                </div>
                <span className="text-xs text-gray-600 mt-1">Call Us</span>
              </a>
              <a href="#" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full border-2 border-amber-700 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <MessageCircle className="w-5 h-5 text-amber-700 group-hover:text-white" />
                </div>
                <span className="text-xs text-gray-600 mt-1">Chat</span>
              </a>
              <a href="mailto:" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full border-2 border-amber-700 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Mail className="w-5 h-5 text-amber-700 group-hover:text-white" />
                </div>
                <span className="text-xs text-gray-600 mt-1">Email</span>
              </a>
            </div>

            {/* Explore Store Button */}
            <a
              href="#"
              className="inline-block px-6 py-2 border-2 border-amber-700 text-amber-700 text-sm font-medium hover:bg-amber-700 hover:text-white transition-colors"
            >
              Explore our STORE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;