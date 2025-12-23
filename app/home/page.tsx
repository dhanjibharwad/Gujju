
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BannerSection from "@/components/home/BannerSection";
import DealsSection from "@/components/home/DealsSection";
import JewelryCollections from "@/components/home/TrendingCollection";
import BusinessConsultationSection from "@/components/home/Bsol";



export default function HomePage() {
  return (
    <main className="dark:bg-black text-zinc-900 dark:text-white">
      
      {/* Top Navigation */}

      {/* Hero / Banner */}
      <HeroSection />

      {/* Categories */}
      <CategorySection />

      <JewelryCollections/>

      <BusinessConsultationSection/>

      {/* Featured Products */}
      {/* <FeaturedProducts /> */}

      {/* Promotional Banner */}
      {/* <BannerSection /> */}

      {/* Deals / Offers */}
      {/* <DealsSection /> */}

      {/* Reviews */}

      {/* Footer */}

    </main>
  );
}
