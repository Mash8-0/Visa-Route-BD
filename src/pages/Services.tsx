import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesDetails from "@/components/ServicesDetails"; // ✅ FULL DESIGN PAGE (pic 2)

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
