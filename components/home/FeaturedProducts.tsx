export default function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: '/images/headphones.jpg', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: '$199.99', image: '/images/watch.jpg', rating: 4.8 },
    { id: 3, name: 'Laptop Stand', price: '$49.99', image: '/images/stand.jpg', rating: 4.3 },
    { id: 4, name: 'Bluetooth Speaker', price: '$79.99', image: '/images/speaker.jpg', rating: 4.6 },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-200 rounded-t-lg mb-4"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}