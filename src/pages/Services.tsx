import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailSection from "@/components/ServiceDetailSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServiceDetailSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
