'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Categories</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Deals</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Contact</a>
            <div className="pt-2 border-t">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}