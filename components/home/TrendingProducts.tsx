export default function TrendingProducts() {
  const trendingProducts = [
    { id: 1, name: 'Gaming Mouse', price: '$59.99', trend: '+15%' },
    { id: 2, name: 'Wireless Charger', price: '$29.99', trend: '+23%' },
    { id: 3, name: 'Phone Case', price: '$19.99', trend: '+8%' },
    { id: 4, name: 'USB Cable', price: '$12.99', trend: '+12%' },
    { id: 5, name: 'Desk Lamp', price: '$39.99', trend: '+18%' },
    { id: 6, name: 'Water Bottle', price: '$24.99', trend: '+9%' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
              <div className="text-green-600 font-semibold text-sm">
                {product.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}