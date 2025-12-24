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
//           <div className="max-w-6xl mx-auto">
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


// "use client"

// import React, { useState } from 'react';
// import { Heart, ChevronDown, ShoppingBag, Star, Eye } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice?: number;
//   rating: number;
//   reviews: number;
//   image: string;
//   hoverImage?: string;
//   colors?: string[];
//   badge?: string;
//   isNew?: boolean;
// }

// const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(0);

//   const discount = product.originalPrice 
//     ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
//     : 0;

//   return (
//     <div 
//       className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Product Image Container */}
//       <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        
//         {/* Badges */}
//         <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
//           {product.isNew && (
//             <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
//               New
//             </span>
//           )}
//           {discount > 0 && (
//             <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
//               -{discount}%
//             </span>
//           )}
//         </div>

//         {/* Wishlist Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             setIsFavorite(!isFavorite);
//           }}
//           className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-sm hover:bg-white hover:scale-110 transition-all duration-200 group-hover:opacity-100 opacity-0 translate-y-[-10px] group-hover:translate-y-0"
//         >
//           <Heart
//             size={18}
//             className={`transition-colors duration-300 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
//           />
//         </button>

//         {/* Images */}
//         <div className="w-full h-full relative">
//             <img
//             src={product.image}
//             alt={product.name}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
//                 isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
//             }`}
//             />
//             {product.hoverImage && (
//             <img
//                 src={product.hoverImage}
//                 alt={product.name}
//                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
//                 isHovered ? 'opacity-100' : 'opacity-0'
//                 }`}
//             />
//             )}
//         </div>

//         {/* Quick Action Overlay (Desktop) */}
//         <div className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10 hidden lg:block`}>
//           <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-xl shadow-lg hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
//             <ShoppingBag size={18} />
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-5 flex flex-col flex-grow">
//         {/* Category & Rating */}
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{product.category}</span>
//           <div className="flex items-center gap-1">
//             <Star size={12} className="fill-amber-400 text-amber-400" />
//             <span className="text-xs font-medium text-gray-600">{product.rating}</span>
//             <span className="text-xs text-gray-400">({product.reviews})</span>
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-gray-900 font-bold text-lg leading-tight mb-2 group-hover:text-purple-700 transition-colors line-clamp-2 cursor-pointer">
//           {product.name}
//         </h3>

//         {/* Price Section */}
//         <div className="mt-auto pt-2 flex items-baseline gap-2">
//           <span className="text-xl font-bold text-gray-900">
//             ₹{product.price.toLocaleString('en-IN')}
//           </span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-400 line-through">
//               ₹{product.originalPrice.toLocaleString('en-IN')}
//             </span>
//           )}
//         </div>

//         {/* Color Options */}
//         {product.colors && (
//           <div className="mt-4 flex gap-2">
//             {product.colors.map((color, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedColor(idx)}
//                 className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
//                   selectedColor === idx ? 'border-purple-600 scale-110' : 'border-transparent hover:scale-110'
//                 }`}
//                 style={{ backgroundColor: color, boxShadow: '0 0 0 1px #e5e7eb' }}
//                 aria-label={`Select color ${idx + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* Mobile Button (Visible only on small screens) */}
//         <button className="mt-4 w-full lg:hidden bg-gray-900 text-white font-medium py-2.5 rounded-lg active:scale-95 transition-transform flex items-center justify-center gap-2 text-sm">
//           <ShoppingBag size={16} />
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// const FilterSection: React.FC = () => {
//   return (
//     <div className="hidden lg:block w-72 flex-shrink-0 bg-white p-6 border-r border-gray-100 min-h-screen sticky top-0 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-xl font-bold text-gray-900 tracking-tight">Filters</h2>
//         <button className="text-xs font-medium text-gray-400 hover:text-purple-600 uppercase tracking-wide transition-colors">
//           Clear All
//         </button>
//       </div>

//       {/* Categories */}
//       <div className="mb-8">
//         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Categories</h3>
//         <ul className="space-y-3">
//           {['All Products', 'Electronics', 'Fashion', 'Home & Living', 'Accessories'].map((cat, i) => (
//             <li key={i}>
//               <label className="flex items-center gap-3 cursor-pointer group">
//                 <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${i === 0 ? 'border-purple-600' : 'border-gray-300 group-hover:border-purple-400'}`}>
//                     {i === 0 && <div className="w-2 h-2 rounded-full bg-purple-600" />}
//                 </div>
//                 <span className={`text-sm ${i === 0 ? 'font-medium text-purple-700' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Price Range */}
//       <div className="mb-8 border-t border-gray-100 pt-8">
//         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Price Range</h3>
//         <div className="space-y-3">
//           {[
//             { label: 'Under ₹2,000', count: 120 },
//             { label: '₹2,000 - ₹5,000', count: 85 },
//             { label: '₹5,000 - ₹10,000', count: 42 },
//             { label: 'Above ₹10,000', count: 28 },
//           ].map((option, idx) => (
//             <label key={idx} className="flex items-center justify-between cursor-pointer group">
//               <div className="flex items-center gap-3">
//                 <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 transition-colors" />
//                 <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{option.label}</span>
//               </div>
//               <span className="text-xs text-gray-400 font-medium">{option.count}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//        {/* Brands */}
//        <div className="mb-8 border-t border-gray-100 pt-8">
//         <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Brands</h3>
//         <div className="space-y-3">
//           {['Nike', 'Apple', 'Samsung', 'Zara', 'H&M'].map((brand, idx) => (
//             <label key={idx} className="flex items-center gap-3 cursor-pointer group">
//               <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
//               <span className="text-sm text-gray-600 group-hover:text-gray-900">{brand}</span>
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
//       name: 'Premium Cotton Oxford Shirt',
//       category: 'Fashion',
//       price: 1299,
//       originalPrice: 2499,
//       rating: 4.5,
//       reviews: 128,
//       image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
//       hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
//       colors: ['#3b82f6', '#ef4444', '#22c55e'],
//       isNew: true,
//     },
//     {
//       id: 2,
//       name: 'Summer Floral Maxi Dress',
//       category: 'Women',
//       price: 2499,
//       rating: 4.8,
//       reviews: 84,
//       image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
//       hoverImage: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80',
//       colors: ['#f472b6', '#fbbf24'],
//     },
//     {
//       id: 3,
//       name: 'MacBook Air M2 Midnight',
//       category: 'Electronics',
//       price: 114900,
//       originalPrice: 124900,
//       rating: 4.9,
//       reviews: 1056,
//       image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
//       hoverImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
//       badge: 'Best Seller',
//     },
//     {
//       id: 4,
//       name: 'Professional Camera EOS R6',
//       category: 'Photography',
//       price: 219999,
//       rating: 5.0,
//       reviews: 42,
//       image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
//       hoverImage: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80',
//       isNew: true,
//     },
//     {
//       id: 5,
//       name: 'iPhone 15 Pro Titanium',
//       category: 'Mobiles',
//       price: 159900,
//       originalPrice: 169900,
//       rating: 4.7,
//       reviews: 890,
//       image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
//       hoverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
//       colors: ['#000000', '#52525b', '#e4e4e7'],
//     },
//     {
//       id: 6,
//       name: 'Urban Leather Biker Jacket',
//       category: 'Men',
//       price: 4999,
//       originalPrice: 8999,
//       rating: 4.4,
//       reviews: 215,
//       image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
//       hoverImage: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
//     },
//     {
//         id: 7,
//         name: 'Classic Designer Handbag',
//         category: 'Accessories',
//         price: 3299,
//         originalPrice: 4599,
//         rating: 4.6,
//         reviews: 67,
//         image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
//         hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
//       },
//       {
//         id: 8,
//         name: 'Pro Gaming Laptop RTX 4060',
//         category: 'Computers',
//         price: 89999,
//         originalPrice: 109999,
//         rating: 4.8,
//         reviews: 334,
//         image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
//         hoverImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
//       },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Mobile Header */}
//       <div className="lg:hidden p-4 border-b bg-white sticky top-0 z-40 flex justify-between items-center">
//         <h1 className="font-bold text-lg">Shop</h1>
//         <button className="flex items-center gap-2 text-sm font-medium bg-gray-100 px-4 py-2 rounded-full">
//             <span className="w-2 h-2 rounded-full bg-purple-600"></span>
//             Filters
//         </button>
//       </div>

//       <div className="flex">
//         <FilterSection />
        
//         <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50/50">
//           <div className="max-w-[1600px] mx-auto">
            
//             {/* Page Header */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">New Arrivals</h1>
//                 <p className="text-gray-500">Discover the latest trends in fashion and technology</p>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
//                     <span>Sort by:</span>
//                     <select className="bg-transparent font-medium text-gray-900 focus:outline-none cursor-pointer">
//                         <option>Recommended</option>
//                         <option>Price: Low to High</option>
//                         <option>Price: High to Low</option>
//                         <option>Newest First</option>
//                     </select>
//                 </div>
//               </div>
//             </div>
            
//             {/* Products Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
//               {products.map(product => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>

//             {/* Pagination / Load More */}
//             <div className="mt-16 text-center">
//                 <button className="bg-white border border-gray-300 text-gray-900 font-medium px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm">
//                     Load More Products
//                 </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default EcommerceProductPage;