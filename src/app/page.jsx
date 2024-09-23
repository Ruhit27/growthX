import HeroSection from "@/app/_components/Hero";
import Marque from "./_components/Marque";
import Service from "./_components/Service";
import Banner from "./_components/Banner";
import NewsLetter from "./_components/NewsLetter";
import FAQComponent from "./_components/Faq";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Marque />
      <Service />
      <Banner />
      <FAQComponent />
      <NewsLetter />
    </div>
  );
}
