'use client';

import { useState, useEffect } from 'react';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: 'Electronic sale',
      description: 'Have your new set of wardrobe.',
      imageUrl: '/images/ban2.png', // Replace with your image
    },
    {
      id: 2,
      title: 'Premium Quality Products',
      description: 'Discover our selection of premium choices for all types.',
      imageUrl: '/images/ban3.png', // Replace with your image
    },
    {
      id: 3,
      title: 'Expert Installation Services',
      description: 'Professional installation by certified technicians near you.',
      imageUrl: '/images/ban4.png', // Replace with your image
    },
    // {
    //   id: 4,
    //   title: 'Best Prices Guaranteed',
    //   description: 'Get the best deals on top tire brands with price match guarantee.',
    //   buttonText: 'View deals',
    //   imageUrl: '/placeholder-4.jpg', // Replace with your image
    // },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="p-2 md:p-8">
      <div className="mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Carousel Container */}
          <div className="relative h-[300px] md:h-[350px] lg:h-[400px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                      backgroundPosition: 'center right',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-10 group"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-slate-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-10 group"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-slate-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Play/Pause Button */}
          {/* <button
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 mr-14 md:mr-16 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Play/Pause"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-slate-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button> */}

          {/* Dot Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-white w-8 md:w-10 h-2 md:h-2.5'
                    : 'bg-white/50 w-2 md:w-2.5 h-2 md:h-2.5 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}