import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main className="min-h-screen">
    <Header />
    <Hero />
    <MenuSection />
    <ContactSection />
    <MapSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default Index;
