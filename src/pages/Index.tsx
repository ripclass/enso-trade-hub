import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import WhyEnso from "@/components/WhyEnso";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <WhyEnso />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
