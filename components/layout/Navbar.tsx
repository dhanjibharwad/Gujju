'use client';

import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo - Replace src with your image path */}
          <a href="/" className="flex items-center">
            <img 
              src="/images/lg.png" 
              alt="GujjueMarket Logo" 
              className="h-18 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Wishlist */}
            <a href="/wishlist" className="hidden sm:flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </a>

            {/* Account */}
            <a href="/account" className="hidden sm:flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Account</span>
            </a>

            {/* Cart */}
            <a href="/cart" className="relative flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">Cart</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <a
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/products"
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="/deals"
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </a>
            <a
              href="/account"
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
}