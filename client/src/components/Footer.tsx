import {
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { id: "about", label: "Our Story" },
    { id: "mission-vision", label: "Mission & Values" },
    { id: "crt-services", label: "Training Modules" },
    { id: "achievements", label: "Success Stories" },
    { id: "gallery", label: "Media Gallery" },
  ];

  const services = [
    "Aptitude Mastery",
    "Soft Skills Excellence",
    "Technical Proficiency",
    "Mock Interview Panels",
    "Institutional LMS",
  ];

  return (
    <footer className="bg-white border-t border-border pt-16 md:pt-24 pb-8 md:pb-12" data-testid="footer-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20 text-center md:text-left">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0" data-testid="footer-logo">
              <img src="/VSP_Logo.png" alt="VSP Technologies Logo" className="h-14 w-auto drop-shadow-sm" />
              <div className="hidden md:block h-8 w-[1px] bg-border mx-2"></div>
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-foreground">
                VSP <span className="text-primary italic">Technologies</span>
              </span>
            </div>
            
            <p className="text-sm md:text-lg text-muted-foreground font-medium leading-relaxed max-w-md mx-auto md:mx-0">
              The premier partner for Indian academic institutions, delivering result-oriented training that bridges the gap between potential and placement.
            </p>

            <div className="space-y-4 pt-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center space-x-4 text-foreground/70 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              
              <a href="mailto:contact@vsptech.in" className="flex items-center space-x-4 text-foreground/70 group hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">contact@vsptech.in</span>
              </a>

              <a href="https://vsptech.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground/70 group hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-all shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">www.vsptech.in</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            <div className="space-y-8">
              <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wider mb-6 md:mb-8">Navigation</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground font-bold text-sm hover:text-primary transition-all flex items-center group mx-auto md:mx-0"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 mr-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wider mb-6 md:mb-8">Specializations</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground font-bold text-sm cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 flex flex-col items-center md:items-start">
              <h4 className="text-sm font-extrabold text-foreground uppercase tracking-wider mb-6 md:mb-8">Connect</h4>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-white transition-all shadow-sm group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <div className="p-6 md:p-8 bg-primary/5 rounded-[2rem] border border-primary/10 w-full max-w-sm">
                <p className="text-xs font-bold text-primary mb-2 uppercase">Institutional Advisory</p>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Trusted by 50+ premier institutions across India for student career excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Credits */}
        <div className="pt-8 md:pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <div>
            <p className="text-sm font-bold text-muted-foreground">
              © 2024 VSP Technologies Private Limited.
            </p>
            <p className="text-[10px] text-muted-foreground/60 font-medium mt-1">
              Registered in Andhra Pradesh, India. All rights reserved.
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="text-sm font-bold text-muted-foreground">
              Handcrafted by <a href="https://www.smdigitalx.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">SMDigitalX</a>
            </p>
            <p className="text-[10px] text-muted-foreground/60 font-medium mt-1 flex items-center justify-center md:justify-end">
              Built with Precision and <span className="text-red-500 mx-1">❤️</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
