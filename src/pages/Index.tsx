import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicePackages from "@/components/ServicePackages";
import GallerySection from "@/components/GallerySection";
import BookingCalendar from "@/components/BookingCalendar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleBookNowClick = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection onBookNowClick={handleBookNowClick} />
      <div id="services">
        <ServicePackages onSelectPackage={handleSelectPackage} />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <BookingCalendar selectedPackage={selectedPackage} />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <Footer />

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 text-2xl sm:text-3xl md:text-4xl animate-float opacity-40 pointer-events-none">
        🎈
      </div>
      <div
        className="fixed top-60 right-10 text-2xl sm:text-3xl md:text-4xl animate-float opacity-40 pointer-events-none"
        style={{ animationDelay: "1s" }}
      >
        🎊
      </div>
      <div
        className="fixed bottom-20 left-12 text-2xl sm:text-3xl md:text-4xl animate-float opacity-40 pointer-events-none"
        style={{ animationDelay: "2s" }}
      >
        🎁
      </div>
    </div>
  );
};

export default Index;
