import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import ImageGallery from "@/components/ImageGallery";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveLetter />
      <ImageGallery />
      <WishesSection />
      <Footer />
    </div>
  );
};

export default Index;
