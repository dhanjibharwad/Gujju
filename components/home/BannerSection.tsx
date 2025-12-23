export default function BannerSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Summer Sale</h3>
            <p className="mb-6">Up to 50% off on selected items</p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Shop Sale
            </button>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">New Arrivals</h3>
            <p className="mb-6">Check out the latest products</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Explore New
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}