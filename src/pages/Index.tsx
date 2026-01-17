import StarField from "@/components/StarField";
import MoonHero from "@/components/MoonHero";
import LoveMessage from "@/components/LoveMessage";
import MemoryGallery from "@/components/MemoryGallery";
import BirthdayWishes from "@/components/BirthdayWishes";
import CelestialFooter from "@/components/CelestialFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-night relative overflow-x-hidden">
      <StarField />
      <MoonHero />
      <LoveMessage />
      <MemoryGallery />
      <BirthdayWishes />
      <CelestialFooter />
    </div>
  );
};

export default Index;
