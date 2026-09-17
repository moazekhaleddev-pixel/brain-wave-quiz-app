import FeaturesSection from "../components/home/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import HomeHeader from "../components/home/HomeHeader";
import MainContent from "../components/home/MainContent";
import ReadySection from "../components/home/ReadySection";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <MainContent>
        <HeroSection />
        <FeaturesSection />
        <ReadySection/>
      </MainContent>
      <Footer />
    </>
  );
}
