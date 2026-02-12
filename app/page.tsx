import FeatureSection from "@/components/section/FeatureSection";
import HeroSection from "@/components/section/HeroSection";
import HowItWorksSection from "@/components/section/HowItWorksSection";

export default function Home() {
  return (
   <main className="w-full min-h-full">
    <HeroSection/>
    <FeatureSection/>
    <HowItWorksSection/>
   </main>
  );
}
