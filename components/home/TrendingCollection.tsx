import React from 'react';

interface CollectionCard {
  id: number;
  title: string;
  image: string;
}

const collections: CollectionCard[] = [
  { id: 1, title: 'MOBILES', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop' },
  { id: 2, title: 'LAPTOPS', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' },
  { id: 3, title: 'HEADPHONES', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop' },
  { id: 4, title: 'CAMERAS', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop' },
  { id: 5, title: 'MENS CLOTHING', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 6, title: 'WOMENS CLOTHING', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop' },
  { id: 7, title: 'WATCHES', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop' },
  { id: 8, title: 'SHOES', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' },
  { id: 9, title: 'HOME DECOR', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
  { id: 10, title: 'BOOKS', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop' },
  { id: 11, title: 'SPORTS', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
  { id: 12, title: 'BEAUTY', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop' },
];

const CollectionCard: React.FC<{ collection: CollectionCard }> = ({ collection }) => {
  return (
    <div className="group relative overflow-hidden shadow-md cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="transform transition-all duration-500 group-hover:scale-110">
          <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] text-center drop-shadow-lg">
            {collection.title}
          </h3>
          <div className="w-16 h-px bg-amber-400 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <p className="text-white/90 text-xs md:text-sm tracking-widest text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            COLLECTIONS
          </p>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
    </div>
  );
};

const TrendingCollection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Trending Categories
          </h1>
          <p className="text-base text-slate-500 font-light">
            Discover the best products across all categories
          </p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;