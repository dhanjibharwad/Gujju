export default function Page() {
  const categories = [
    { name: "Today's Deal", badge: "NEW", image: "/images/gift.png" },
    { name: "Mobiles & Tablets", badge: null, image: "/images/phone.png" },
    { name: "Men", badge: null, image: "/images/men.png" },
    { name: "Women", badge: null, image: "/images/women.png" },
    { name: "Kids", badge: null, image: "/images/kid.png" },
    { name: "Electronics", badge: null, image: "/images/electronic.png" },
    { name: "Home & Furniture", badge: null, image: "/images/home-furniture.png" },
    { name: "TVs & Appliances", badge: null, image: "/images/tv.png" },
    { name: "Gifts & Toys", badge: null, image: "/images/teddy.png" },
    { name: "Laptops", badge: null, image: "/images/laptop.png" },
  ];

  return (
    <div className="w-full py-2 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] cursor-pointer group relative"
            >
              <div className="relative mb-2 mt-3">
                {/* Category icon/image */}
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-16 h-16 object-contain"
                />
                
                {/* NEW Badge */}
                {category.badge && (
                  <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-pulse">
                    {category.badge}
                  </div>
                )}
              </div>
              
              {/* Category Name */}
              <p className="text-sm font-medium text-gray-800 text-center whitespace-nowrap">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}