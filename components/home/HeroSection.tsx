export default function Page() {
  const categories = [
    { name: "Today's Deal", badge: "NEW", image: "/images/gift.png", link: "/product" },
    { name: "Mobiles & Tablets", badge: null, image: "/images/phone.png", link: "/category/mobiles-tablets" },
    { name: "Men", badge: null, image: "/images/men.png", link: "/category/men" },
    { name: "Women", badge: null, image: "/images/women.png", link: "/category/women" },
    { name: "Kids", badge: null, image: "/images/kid.png", link: "/category/kids" },
    { name: "Electronics", badge: null, image: "/images/electronic.png", link: "/category/electronics" },
    { name: "Home & Furniture", badge: null, image: "/images/home-furniture.png", link: "/category/home-furniture" },
    { name: "TVs & Appliances", badge: null, image: "/images/tv.png", link: "/category/tv-appliances" },
    { name: "Gifts & Toys", badge: null, image: "/images/teddy.png", link: "/category/gifts-toys" },
    { name: "Laptops", badge: null, image: "/images/laptop.png", link: "/category/laptops" },
  ];

  return (
    <div className="w-full py-2 px-2">
      <div className="mx-auto">
        <div className="flex items-center justify-between gap-4 pb-2">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="flex flex-col items-center cursor-pointer group relative"
            >
              <div className="w-32 h-32 bg-gray-100 rounded-full flex flex-col items-center justify-center p-4">
                <div className="relative mb-2">
                  {/* Category icon/image */}
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-14 h-14 object-contain"
                  />
                  
                  {/* NEW Badge */}
                  {category.badge && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1 py-0.5 rounded shadow-lg animate-pulse">
                      {category.badge}
                    </div>
                  )}
                </div>
                
                {/* Category Name */}
                <p className="text-sm font-medium text-gray-800 text-center leading-tight">
                  {category.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}