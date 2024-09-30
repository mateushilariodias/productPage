import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OneNewArrivals from "@/components/OneNewArrivals";
import OurCategories from "@/components/OurCategories";
import TwoNewArrivals from "@/components/TwoNewArrivals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection/>
      <OneNewArrivals/>
      <OurCategories/>
      <TwoNewArrivals/>
      <Footer/>
    </main>
  );
}
