import {
  GraduationCap,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { id: "about", label: "About Us" },
    { id: "mission-vision", label: "Mission & Vision" },
    { id: "team", label: "Our Team" },
    { id: "crt-services", label: "CRT Services" },
  ];

  const services = [
    "Technical Training",
    "Aptitude & Reasoning",
    "Soft Skills",
    "Interview Preparation",
  ];

  return (
    <footer
      className="bg-card border-t border-border py-12"
      data-testid="footer-main"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2" data-testid="footer-company-info">
              <div
                className="flex items-center space-x-2 mb-4"
                data-testid="footer-logo"
              >
                <img
                  src="/VSP_Logo.png"
                  alt="VSP Technologies Logo"
                  className="h-10 w-auto"
                />
                <span className="font-bold text-xl text-card-foreground">
                  VSP Technologies
                </span>
              </div>
              <p
                className="text-muted-foreground mb-4 leading-relaxed max-w-md"
                data-testid="text-company-description"
              >
                Transforming students into industry-ready professionals through
                comprehensive campus recruitment training programs.
              </p>
              <div
                className="flex items-center space-x-2 text-muted-foreground"
                data-testid="footer-location"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>Visakhapatnam, India</span>
              </div>
              <div
                className="flex items-center space-x-2 text-muted-foreground mt-2"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:contact@vsptech.in"
                  className="hover:text-primary transition-colors"
                >
                  contact@vsptech.in
                </a>
              </div>
              <div
                className="flex items-center space-x-2 text-muted-foreground mt-2"
                data-testid="footer-website"
              >
                <span className="text-sm">🌐</span>
                <a
                  href="https://vsptech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  vsptech.in
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-testid="footer-quick-links">
              <h4 className="font-semibold text-card-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                      data-testid={`footer-link-${link.id}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div data-testid="footer-services">
              <h4 className="font-semibold text-card-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span
                      className="text-muted-foreground"
                      data-testid={`footer-service-${index + 1}`}
                    >
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              className="text-muted-foreground text-sm text-center md:text-left"
              data-testid="footer-copyright"
            >
              <div>© 2024 VSP Technologies. All rights reserved.</div>
              <div className="mt-1 text-xs">
                Developed with{" "}
                <span className="text-red-500">❤️</span> by{" "}
                <a
                  href="https://www.smdigitalx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  SMDigitalX
                </a>
              </div>
            </div>
            <div
              className="flex space-x-6 mt-4 md:mt-0"
              data-testid="footer-social-links"
            >
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="social-link-facebook"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="social-link-twitter"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="social-link-linkedin"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="social-link-instagram"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
