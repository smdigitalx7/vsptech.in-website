import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useScrollAnimation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > heroHeight * 0.1); // Start transition after 10% of hero height
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMobileMenu();
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "mission-vision", label: "Mission & Vision" },
    { id: "why-vsp", label: "Why VSP?" },
    { id: "team", label: "Team" },
    { id: "crt-services", label: "CRT Services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="navbar-main"
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl ">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-28"
          }`}
        >
          {/* Logo */}
          <div
            className="flex items-center space-x-3"
            data-testid="navbar-logo"
          >
            <img
              src="/assets/VSP_Logo.png"
              alt="VSP Technologies Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-16" : "h-32"
              }`}
            />
            {/* <span className="font-bold text-xl text-foreground hidden sm:block">
              VSP Technologies
            </span> */}
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center space-x-8"
            data-testid="navbar-desktop-menu"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  isScrolled ? "text-foreground" : "text-gray-900"
                } hover:text-primary transition-colors duration-200 font-medium ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className={`bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium ${
                activeSection === "contact" ? "bg-primary/90" : ""
              }`}
              data-testid="nav-link-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${
              isScrolled ? "text-foreground" : "text-white"
            } hover:text-primary transition-colors duration-200`}
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-16 right-0 w-80 h-full bg-card border-l border-border lg:hidden ${
          isMobileMenuOpen ? "open" : ""
        }`}
        data-testid="navbar-mobile-menu"
      >
        <div className="flex flex-col p-6 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium text-left ${
                activeSection === item.id ? "text-primary" : ""
              }`}
              data-testid={`mobile-nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className={`bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium text-center ${
              activeSection === "contact" ? "bg-primary/90" : ""
            }`}
            data-testid="mobile-nav-link-contact"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-[-1]"
          onClick={closeMobileMenu}
          data-testid="mobile-menu-overlay"
        />
      )}
    </nav>
  );
}
