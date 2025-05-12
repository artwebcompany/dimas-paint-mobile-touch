
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import VideoSection from "@/components/VideoSection";
import FeaturedProjects from "@/components/FeaturedProjects";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <FeaturedProjects />
      <VideoSection />
      <Portfolio />
      <Testimonials />
      <ContactSection />
      <WhatsAppButton phoneNumber="6281573635143" />
    </div>
  );
};

export default HomePage;
