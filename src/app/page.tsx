import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import MenuCarousel from "@/components/menu/MenuCarousel";
import FAQSection from "@/components/home/FAQSection";
import LocationContactSection from "@/components/home/LocationContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StorySection />
      <MenuCarousel />
      <ReviewsSection />
      <FAQSection />
      <LocationContactSection />
    </div>
  );
}
