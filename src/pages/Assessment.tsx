import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Assessment() {
  return (
    <>
      <SEOHead
        title="Free Consultation | Visa Route BD"
        description="Get a free consultation for your visa & study abroad journey. Contact Visa Route BD for expert guidance."
        keywords="free consultation, visa consultation, study abroad consultation, visa route bd"
        canonicalUrl="https://globalconsultancy.com/free-consultation"
      />

      <main className="min-h-screen">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Page Title */}
        <section className="pt-28 pb-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold">Free Consultation</h1>
            <p className="mt-3 text-muted-foreground">
              Get expert guidance for your visa & study abroad journey — clear,
              practical and personal.
            </p>
          </div>
        </section>

        {/* ✅ Contact Us Section */}
        <ContactSection />

        {/* ✅ Footer */}
        <Footer />
      </main>
    </>
  );
}
