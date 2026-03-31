import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { SiTiktok } from "react-icons/si"; // ✅ REAL TikTok icon
import { Link } from "react-router-dom";
import logo from "@/assets/visaroutebd logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Universities", href: "/universities" },
    { name: "Services", href: "/services" },
    { name: "Processing", href: "/processing" },
    { name: "Success Story", href: "/success-story" },
    { name: "About Us", href: "/about" },
  ];

  const services = [
    "Free Consultation",
    "Visa Assistance",
    "University Admissions",
    "Air Ticketing & Travel",
  ];

  // ✅ Social Links (TikTok added properly)
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/visaroutebd" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/visaroute.bd?igsh=a3NxcDQxdHl5dm53",
    },
    { icon: SiTiktok, href: "https://www.tiktok.com/@vrbd26?lang=en" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mashrur-mondal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* ✅ Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 90L60 80C120 70 240 50 360 45C480 40 600 50 720 57.5C840 65 960 70 1080 67.5C1200 65 1320 55 1380 50L1440 45V0H0V90Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      {/* ✅ Custom Gradient Background (#1c1c3b → #6c46bf) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1c1c3b 0%, #6c46bf 100%)",
        }}
      />

      {/* Soft highlights */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,white,transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,white,transparent_55%)]" />

      <div className="relative z-10 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="VisaRoute BD Logo"
                  className="h-16 md:h-20 object-contain bg-white/90 px-4 py-3 rounded-2xl shadow-lg"
                />
              </Link>

              <p className="text-white/80 leading-relaxed">
                Your trusted partner for visa and education consultancy. Making
                global education accessible since 2025.
              </p>

              {/* ✅ Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon as any;

                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-12 h-12 rounded-full 
                        bg-white/15 flex items-center justify-center
                        transition-all duration-300
                        hover:bg-white/25 hover:scale-110
                        hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                      "
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </a>
                  );
                })}
              </div>

            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a
                    href="https://wa.me/601114227214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    +60-11 1422 7214
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@visaroutebd.com" className="hover:underline">
                    info@visaroutebd.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-7 h-7 mt-0.5" />
                  <span>
                    Jalan Ipoh, 51200 Kuala Lumpur, Wilayah Persekutuan Kuala
                    Lumpur
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} VisaRoute BD. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/70">
              <Link to="/admin/auth" className="hover:text-white transition-colors">
                Admin
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
