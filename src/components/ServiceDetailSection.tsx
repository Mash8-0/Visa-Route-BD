import { ArrowRight, Check, MessageSquare, GraduationCap, Stamp, Plane, Home, Award, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const servicesData: ServiceDetail[] = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    tagline: "Your Journey Starts Here",
    description: "Our free consultation service is designed to help you understand your options and create a personalized roadmap for your study abroad journey. We believe every student deserves expert guidance regardless of their financial situation.",
    features: [
      "One-on-one personalized counselling sessions",
      "Complete assessment of your academic profile",
      "Country and course selection guidance",
      "Budget planning and financial advice",
      "Timeline planning for applications",
      "Career pathway discussions",
    ],
    process: [
      { step: 1, title: "Book a Session", description: "Schedule a free consultation at your convenience via WhatsApp, phone, or our contact form." },
      { step: 2, title: "Profile Assessment", description: "We analyze your academic background, interests, and career goals to understand your needs." },
      { step: 3, title: "Personalized Roadmap", description: "Receive a customized study abroad plan including university recommendations and timeline." },
    ],
    color: "from-blue-500 to-cyan-500",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-cyan-500/10",
  },
  {
    icon: GraduationCap,
    title: "University Admissions",
    tagline: "Secure Your Place at Top Universities",
    description: "Our university admissions service handles every aspect of your application process. From crafting compelling SOPs to managing multiple applications, we ensure you present your best self to admissions committees.",
    features: [
      "Statement of Purpose (SOP) writing and review",
      "Letter of Recommendation (LOR) guidance",
      "Application form completion and review",
      "Document verification and organization",
      "University shortlisting based on profile",
      "Application tracking and follow-ups",
    ],
    process: [
      { step: 1, title: "Document Preparation", description: "We help gather and verify all required academic documents and transcripts." },
      { step: 2, title: "SOP & LOR Development", description: "Our experts help craft compelling personal statements and guide your referees." },
      { step: 3, title: "Application Submission", description: "We submit applications to shortlisted universities and track their progress." },
    ],
    color: "from-emerald-500 to-teal-500",
    gradientFrom: "from-emerald-500/10",
    gradientTo: "to-teal-500/10",
  },
  {
    icon: Stamp,
    title: "Visa Assistance",
    tagline: "Navigate Visa Process with Confidence",
    description: "Visa applications can be complex and stressful. Our experienced team guides you through every step, from document preparation to interview coaching, ensuring you have the best chance of approval.",
    features: [
      "Complete visa document checklist",
      "Application form filling assistance",
      "Financial documentation guidance",
      "Mock visa interview preparation",
      "Embassy appointment scheduling",
      "Application status tracking",
    ],
    process: [
      { step: 1, title: "Document Checklist", description: "Receive a comprehensive list of required documents specific to your destination country." },
      { step: 2, title: "Application Preparation", description: "We help you complete forms accurately and organize all supporting documents." },
      { step: 3, title: "Interview Coaching", description: "Practice with mock interviews and receive tips for confident visa interviews." },
    ],
    color: "from-violet-500 to-purple-500",
    gradientFrom: "from-violet-500/10",
    gradientTo: "to-purple-500/10",
  },
  {
    icon: Plane,
    title: "Air Ticketing & Travel",
    tagline: "Fly Smart, Save More",
    description: "We partner with major airlines to offer exclusive student fares and flexible travel options. Our travel experts help you find the best routes and deals for your journey abroad.",
    features: [
      "Exclusive student airfare discounts",
      "Flexible booking and cancellation options",
      "Multi-city route planning",
      "Extra baggage allowance assistance",
      "Travel insurance recommendations",
      "24/7 travel support",
    ],
    process: [
      { step: 1, title: "Route Planning", description: "We help plan your travel route considering cost, convenience, and your schedule." },
      { step: 2, title: "Fare Comparison", description: "Compare student fares across airlines to find the best deal for your budget." },
      { step: 3, title: "Booking & Support", description: "Book your tickets with flexible options and get support throughout your journey." },
    ],
    color: "from-orange-500 to-amber-500",
    gradientFrom: "from-orange-500/10",
    gradientTo: "to-amber-500/10",
  },
  {
    icon: Home,
    title: "Accommodation & Arrival",
    tagline: "Your Home Away from Home",
    description: "Starting life in a new country is easier when you have a comfortable place to stay. We arrange accommodation and ensure a smooth arrival experience with airport pickup and orientation support.",
    features: [
      "University hostel booking assistance",
      "Private accommodation search",
      "Virtual property tours arrangement",
      "Airport pickup coordination",
      "City orientation and local guidance",
      "SIM card and bank account setup help",
    ],
    process: [
      { step: 1, title: "Accommodation Search", description: "We help find suitable housing options based on your preferences and budget." },
      { step: 2, title: "Booking Confirmation", description: "Secure your accommodation before arrival with our booking assistance." },
      { step: 3, title: "Arrival Support", description: "Get picked up from the airport and receive orientation in your new city." },
    ],
    color: "from-pink-500 to-rose-500",
    gradientFrom: "from-pink-500/10",
    gradientTo: "to-rose-500/10",
  },
  {
    icon: Award,
    title: "Scholarships & Funding",
    tagline: "Make Education Affordable",
    description: "Don't let finances hold you back. We help you discover and apply for scholarships, grants, and funding opportunities that can significantly reduce your education costs abroad.",
    features: [
      "Scholarship opportunity research",
      "Eligibility assessment and matching",
      "Application essay assistance",
      "Financial aid documentation",
      "Education loan guidance",
      "Part-time work opportunities info",
    ],
    process: [
      { step: 1, title: "Opportunity Discovery", description: "We research and identify scholarships you're eligible for based on your profile." },
      { step: 2, title: "Application Support", description: "Get help with scholarship essays and required documentation." },
      { step: 3, title: "Funding Strategy", description: "Create a comprehensive funding plan combining scholarships, loans, and other sources." },
    ],
    color: "from-amber-500 to-yellow-500",
    gradientFrom: "from-amber-500/10",
    gradientTo: "to-yellow-500/10",
  },
];

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
  isReversed: boolean;
}

const ServiceCard = ({ service, index, isReversed }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <section 
      id={service.title.toLowerCase().replace(/\s+/g, '-')} 
      className={`py-12 sm:py-16 lg:py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start`}>
          {/* Left/Right Content */}
          <div className="flex-1 w-full">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} mb-4`}>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{service.tagline}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                {service.title}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">What We Offer</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5`}>
                Get Started Today
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Right/Left Process */}
          <div className="flex-1 w-full">
            <div className={`bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50`}>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6">How It Works</h3>
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg`}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceDetailSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From your first consultation to your arrival abroad, we provide comprehensive support 
            at every step of your educational journey. Explore our services and let us help you 
            achieve your dreams.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {servicesData.map((service) => (
              <a
                key={service.title}
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-indigo-500/50 hover:shadow-md transition-all text-sm sm:text-base`}
              >
                <service.icon className="w-4 h-4" />
                <span>{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {servicesData.map((service, index) => (
        <ServiceCard 
          key={service.title} 
          service={service} 
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation. Our expert team is ready to guide you 
            through every step of your study abroad journey.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-indigo-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailSection;
