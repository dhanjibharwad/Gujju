// "use client"


// import React, { useState } from 'react';
// import { Heart, ChevronDown } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   hoverImage?: string;
//   colors?: string[];
//   badge?: string;
// }

// const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[200px] mx-auto"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Product Image */}
//       <div className="relative bg-gray-50 h-32 sm:h-36 overflow-hidden">
//         <button
//           onClick={() => setIsFavorite(!isFavorite)}
//           className="absolute top-1.5 right-1.5 bg-white rounded-full p-1 hover:bg-gray-50 transition-colors shadow-sm z-10"
//         >
//           <Heart
//             size={12}
//             className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
//           />
//         </button>
        
//         {/* Default Image */}
//         <img
//           src={product.image}
//           alt={product.name}
//           className={`w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-500 ease-in-out ${
//             isHovered ? '-translate-x-full' : 'translate-x-0'
//           }`}
//         />
        
//         {/* Hover Image */}
//         {product.hoverImage && (
//           <img
//             src={product.hoverImage}
//             alt={`${product.name} alternate view`}
//             className={`w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-500 ease-in-out ${
//               isHovered ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           />
//         )}
//       </div>

//       {/* Product Title and Price */}
//       <div className="p-2 text-center border-b border-gray-100">
//         <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
//         <p className="text-xs">
//           <span className="text-amber-800 font-medium">₹</span>
//           <span className="text-gray-900 font-semibold">{product.price.toLocaleString('en-IN')}</span>
//         </p>
//       </div>

//       {/* Action Buttons */}
//       <div className="p-2 flex flex-col gap-1">
//         <button className="text-amber-800 font-medium text-xs py-1 px-2 border border-amber-800 rounded hover:bg-amber-50 transition-colors">
//           Buy Now
//         </button>
//         <button className="text-gray-700 font-medium text-xs py-1 px-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
//           Details
//         </button>
//       </div>

//       {/* Color Options */}
//       {product.colors && (
//         <div className="px-2 pb-2 flex gap-1 justify-center">
//           {product.colors.map((color, idx) => (
//             <button
//               key={idx}
//               className={`w-4 h-4 rounded-full border ${
//                 idx === 0 ? 'border-gray-800' : 'border-gray-300'
//               }`}
//               style={{ backgroundColor: color }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const FilterSection: React.FC = () => {

//   return (
//     <div className="w-full lg:w-80 bg-white p-4 lg:p-6 border-b lg:border-r lg:border-b-0 border-gray-200 lg:h-screen overflow-y-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-gray-800 font-semibold flex items-center gap-2">
//           FILTERS <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">2</span>
//         </h2>
//         <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
//           CLEAR ALL
//         </button>
//       </div>

//       {/* Price Filter */}
//       <div className="mb-6 pb-6 border-b border-gray-200">
//         <h3 className="text-gray-800 font-semibold mb-4">Price</h3>
//         <div className="space-y-3">
//           {[
//             { label: '₹10,001 - ₹15,000', count: 194 },
//             { label: '₹20,001 - ₹30,000', count: 303 },
//             { label: 'Under ₹5,000', count: 11 },
//             { label: '₹5,001 - ₹10,000', count: 256 },
//           ].map((option, idx) => (
//             <label key={idx} className="flex items-center gap-3 cursor-pointer group">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//               />
//               <span className="text-sm text-gray-700 group-hover:text-gray-900">
//                 {option.label} <span className="text-gray-400">({option.count})</span>
//               </span>
//             </label>
//           ))}
//         </div>
//         <button className="flex items-center gap-1 text-purple-600 text-sm font-medium mt-3 hover:text-purple-700">
//           <ChevronDown size={16} />
//           10 More
//         </button>
//       </div>

//       {/* Discounts Filter */}
//       <div className="mb-6 pb-6 border-b border-gray-200">
//         <h3 className="text-gray-800 font-semibold mb-4">Discounts</h3>
//         <div className="space-y-3">
//           {[
//             { label: 'Up to 50% off on Electronics', count: 245 },
//             { label: 'Flat 30% off on Fashion', count: 890 },
//             { label: 'Buy 2 Get 1 Free', count: 156 },
//             { label: 'Extra 10% off on Prepaid', count: 78 },
//           ].map((option, idx) => (
//             <label key={idx} className="flex items-center gap-3 cursor-pointer group">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//               />
//               <span className="text-sm text-gray-700 group-hover:text-gray-900">
//                 {option.label} <span className="text-gray-400">({option.count})</span>
//               </span>
//             </label>
//           ))}
//         </div>
//         <button className="flex items-center gap-1 text-purple-600 text-sm font-medium mt-3 hover:text-purple-700">
//           <ChevronDown size={16} />
//           4 More
//         </button>
//       </div>

//       {/* Product Type Filter */}
//       <div className="mb-6">
//         <h3 className="text-gray-800 font-semibold mb-4">Category</h3>
//         <div className="space-y-3">
//           {[
//             { label: 'Electronics', count: 1245 },
//             { label: 'Fashion', count: 2890 },
//             { label: 'Mobiles', count: 567 },
//             { label: 'Laptops', count: 234 },
//             { label: 'Cameras', count: 189 },
//           ].map((option, idx) => (
//             <label key={idx} className="flex items-center gap-3 cursor-pointer group">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//               />
//               <span className="text-sm text-gray-700 group-hover:text-gray-900">
//                 {option.label} <span className="text-gray-400">({option.count})</span>
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const EcommerceProductPage: React.FC = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       name: 'Men\'s Casual Cotton Shirt',
//       price: 1299,
//       image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
//       colors: ['#3b82f6', '#ef4444', '#22c55e'],
//     },
//     {
//       id: 2,
//       name: 'Women\'s Floral Summer Dress',
//       price: 2499,
//       image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop',
//     },
//     {
//       id: 3,
//       name: 'MacBook Air M2 13-inch',
//       price: 114900,
//       image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
//     },
//     {
//       id: 4,
//       name: 'Canon EOS R6 Mark II',
//       price: 219999,
//       image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
//     },
//     {
//       id: 5,
//       name: 'iPhone 15 Pro Max',
//       price: 159900,
//       image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
//       colors: ['#000000', '#3b82f6', '#ef4444'],
//     },
//     {
//       id: 6,
//       name: 'Men\'s Leather Jacket',
//       price: 4999,
//       image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
//     },
//     {
//       id: 7,
//       name: 'Women\'s Designer Handbag',
//       price: 3299,
//       image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
//     },
//     {
//       id: 8,
//       name: 'Gaming Laptop RTX 4060',
//       price: 89999,
//       image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
//       hoverImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex flex-col lg:flex-row">
//         <FilterSection />
        
//         <div className="flex-1 p-3 sm:p-4 lg:p-6">
//           <div className="mx-auto">
//             <div className="mb-4 lg:mb-6 text-center lg:text-left">
//               <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Featured Products</h1>
//               <p className="text-gray-600 text-sm lg:text-base">Showing {products.length} products</p>
//             </div>
            
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
//               {products.map(product => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EcommerceProductPage;


"use client"

import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  colors?: string[];
  badge?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-[200px] mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative bg-gray-50 h-32 sm:h-36 overflow-hidden">
        {product.badge && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md z-10">
            {product.badge}
          </div>
        )}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-1.5 right-1.5 bg-white rounded-full p-1.5 hover:bg-gray-50 transition-all duration-200 shadow-md z-10 hover:scale-110"
        >
          <Heart
            size={14}
            className={`transition-all duration-200 ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-400'}`}
          />
        </button>
        
        {/* Default Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-500 ease-in-out ${
            isHovered ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={`w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-500 ease-in-out ${
              isHovered ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
        )}
      </div>

      {/* Product Title and Price */}
      <div className="p-2 text-center border-b border-gray-100">
        <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">{product.name}</h3>
        <p className="text-xs flex items-center justify-center gap-1">
          <span className="text-amber-800 font-medium">₹</span>
          <span className="text-gray-900 font-semibold text-base">{product.price.toLocaleString('en-IN')}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="p-2 flex flex-col gap-1.5">
        <button className="bg-purple-600 text-white font-medium text-xs py-2 px-2 rounded-md hover:bg-purple-700 transition-all duration-200 hover:shadow-md active:scale-95">
          Add to Cart
        </button>
        <button className="text-purple-600 font-medium text-xs py-1.5 px-2 border border-purple-600 rounded-md hover:bg-purple-50 transition-all duration-200 active:scale-95">
          Quick View
        </button>
      </div>

      {/* Color Options */}
      {product.colors && (
        <div className="px-2 pb-2 flex gap-1.5 justify-center items-center">
          <span className="text-xs text-gray-500 mr-1">Colors:</span>
          {product.colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedColor(idx)}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                idx === selectedColor ? 'border-purple-600 ring-2 ring-purple-200' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSection: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['price', 'category']));

  const toggleFilter = (filter: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }
    setActiveFilters(newFilters);
  };

  const toggleSection = (section: string) => {
    const newSections = new Set(expandedSections);
    if (newSections.has(section)) {
      newSections.delete(section);
    } else {
      newSections.add(section);
    }
    setExpandedSections(newSections);
  };

  return (
    <div className="w-full lg:w-80 bg-white p-4 lg:p-6 border-b lg:border-r lg:border-b-0 border-gray-200 lg:h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-800 font-semibold flex items-center gap-2">
          FILTERS {activeFilters.size > 0 && <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">{activeFilters.size}</span>}
        </h2>
        <button 
          onClick={() => setActiveFilters(new Set())}
          className="text-purple-600 text-sm font-medium hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={activeFilters.size === 0}
        >
          CLEAR ALL
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full mb-4 text-gray-800 font-semibold hover:text-purple-600 transition-colors"
        >
          <span>Price</span>
          <ChevronDown size={18} className={`transition-transform duration-200 ${expandedSections.has('price') ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.has('price') && (
          <div className="space-y-3">
            {[
              { label: '₹10,001 - ₹15,000', count: 194, id: 'price-1' },
              { label: '₹20,001 - ₹30,000', count: 303, id: 'price-2' },
              { label: 'Under ₹5,000', count: 11, id: 'price-3' },
              { label: '₹5,001 - ₹10,000', count: 256, id: 'price-4' },
            ].map((option) => (
              <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={activeFilters.has(option.id)}
                  onChange={() => toggleFilter(option.id)}
                  className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {option.label} <span className="text-gray-400">({option.count})</span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Discounts Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('discounts')}
          className="flex justify-between items-center w-full mb-4 text-gray-800 font-semibold hover:text-purple-600 transition-colors"
        >
          <span>Discounts</span>
          <ChevronDown size={18} className={`transition-transform duration-200 ${expandedSections.has('discounts') ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.has('discounts') && (
          <div className="space-y-3">
            {[
              { label: 'Up to 50% off on Electronics', count: 245, id: 'discount-1' },
              { label: 'Flat 30% off on Fashion', count: 890, id: 'discount-2' },
              { label: 'Buy 2 Get 1 Free', count: 156, id: 'discount-3' },
              { label: 'Extra 10% off on Prepaid', count: 78, id: 'discount-4' },
            ].map((option) => (
              <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={activeFilters.has(option.id)}
                  onChange={() => toggleFilter(option.id)}
                  className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {option.label} <span className="text-gray-400">({option.count})</span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Product Type Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex justify-between items-center w-full mb-4 text-gray-800 font-semibold hover:text-purple-600 transition-colors"
        >
          <span>Category</span>
          <ChevronDown size={18} className={`transition-transform duration-200 ${expandedSections.has('category') ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.has('category') && (
          <div className="space-y-3">
            {[
              { label: 'Electronics', count: 1245, id: 'cat-1' },
              { label: 'Fashion', count: 2890, id: 'cat-2' },
              { label: 'Mobiles', count: 567, id: 'cat-3' },
              { label: 'Laptops', count: 234, id: 'cat-4' },
              { label: 'Cameras', count: 189, id: 'cat-5' },
            ].map((option) => (
              <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={activeFilters.has(option.id)}
                  onChange={() => toggleFilter(option.id)}
                  className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {option.label} <span className="text-gray-400">({option.count})</span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const EcommerceProductPage: React.FC = () => {
  const [sortBy, setSortBy] = useState('featured');

  const products: Product[] = [
    {
      id: 1,
      name: 'Men\'s Casual Cotton Shirt',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      colors: ['#3b82f6', '#ef4444', '#22c55e'],
      badge: '30% OFF',
    },
    {
      id: 2,
      name: 'Women\'s Floral Summer Dress',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop',
      badge: 'NEW',
    },
    {
      id: 3,
      name: 'MacBook Air M2 13-inch',
      price: 114900,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Canon EOS R6 Mark II',
      price: 219999,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
      badge: 'SALE',
    },
    {
      id: 5,
      name: 'iPhone 15 Pro Max',
      price: 159900,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      colors: ['#000000', '#3b82f6', '#ef4444'],
    },
    {
      id: 6,
      name: 'Men\'s Leather Jacket',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      badge: '50% OFF',
    },
    {
      id: 7,
      name: 'Women\'s Designer Handbag',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    },
    {
      id: 8,
      name: 'Gaming Laptop RTX 4060',
      price: 89999,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
      badge: 'HOT',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col lg:flex-row">
        <FilterSection />
        
        <div className="flex-1 p-3 sm:p-4 lg:p-6">
          <div className="mx-auto">
            <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">Featured Products</h1>
                <p className="text-gray-600 text-sm lg:text-base">Showing {products.length} products</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProductPage;