export default function DealsSection() {
  const deals = [
    { id: 1, name: 'Flash Sale', discount: '70% OFF', timeLeft: '2h 15m', bgColor: 'bg-red-500' },
    { id: 2, name: 'Daily Deal', discount: '40% OFF', timeLeft: '12h 30m', bgColor: 'bg-orange-500' },
    { id: 3, name: 'Weekend Special', discount: '25% OFF', timeLeft: '1d 8h', bgColor: 'bg-green-500' },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Limited Time Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className={`${deal.bgColor} rounded-lg p-6 text-center`}>
              <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
              <div className="text-3xl font-bold mb-4">{deal.discount}</div>
              <div className="text-sm mb-4">Ends in: {deal.timeLeft}</div>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}