import React from 'react';
import { CreditCard, Grid3x3, RefreshCcw, MessageSquare } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => (
  <div className="flex items-start gap-3">
    <div className="text-amber-800 flex-shrink-0">
      {icon}
    </div>
    <p className="text-gray-900 text-sm md:text-base">{title}</p>
  </div>
);

const BusinessConsultationSection: React.FC = () => {
  return (
    // <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#1a3a5c] py-16 px-4 md:px-8 lg:px-16">
    <section
  className="relative py-10 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
>
  <div
    className="absolute inset-0 opacity-35"
    // style={{
    //   backgroundImage:
    //     "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 512 512'%3E%3Cpath fill='%23e4c6b0' d='M256 32c-22 42-58 63-103 63-5 0-10 0-15-1 1 63 44 116 118 128-78 14-118 68-118 128 5-1 10-1 15-1 45 0 81 21 103 63 22-42 58-63 103-63 5 0 10 0 15 1-1-60-40-114-118-128 74-12 117-65 118-128-5 1-10 1-15 1-45 0-81-21-103-63z'/%3E%3C/svg%3E\")",
    //   backgroundSize: "80px 120px",
    // }}
  />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-amber-800 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Need help finding the perfect electronics or fashion items? We're here to help!
            </h2>
            
            <p className="text-gray-900 text-base md:text-lg leading-relaxed">
              We offer expert product recommendations, personalized shopping guidance, and curated selections to help you find the best electronics and fashion items that match your needs, style, and budget.
            </p>

            {/* CTA Buttons */}
            <div className="z-999 flex flex-wrap gap-4 pt-3">
              <button className="bg-amber-800 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded transition-colors duration-200">
                Get product recommendations
              </button>
              {/* <button className="text-white hover:text-yellow-400 font-medium px-6 py-3 rounded flex items-center gap-2 transition-colors duration-200">
                Shop online guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-end">
            {/* Main Container with rounded border */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Top Image - Office workspace with rounded border */}
              <div className="relative rounded-[40px] overflow-hidden border-[6px] border-amber-800 bg-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop" 
                  alt="Fashion and electronics shopping" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom Right Image - Electronics and fashion products */}
              <div className="absolute -bottom-8 -right-32 w-[280px] h-[250px] rounded-[30px] overflow-hidden border-[6px] border-amber-800 bg-white shadow-2xl">
                <img 
                  src="https://campussutra.com/cdn/shop/files/SRM23_CSMSSRT5658_1.webp?v=1708760466" 
                  alt="Electronics and gadgets" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Feature
            icon={<CreditCard className="w-8 h-8" />}
            title="Secure payment options for all purchases"
          />
          <Feature
            icon={<Grid3x3 className="w-8 h-8" />}
            title="Wide range of electronics and fashion products"
          />
          <Feature
            icon={<RefreshCcw className="w-8 h-8" />}
            title="Easy returns and exchange policy"
          />
          <Feature
            icon={<MessageSquare className="w-8 h-8" />}
            title="24/7 customer support for all queries"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessConsultationSection;