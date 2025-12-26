import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useScrollAnimation";
import { useLocation } from "wouter";
import { Menu, X, ChevronRight, ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const mobileMenu = document.querySelector('[data-testid="navbar-mobile-menu"]');
      const mobileMenuButton = document.querySelector('[data-testid="button-mobile-menu"]');
      if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(target) && !mobileMenuButton?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "team") {
      if (location !== "/team") setLocation("/team");
      closeMobileMenu();
      return;
    }
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMobileMenu();
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    closeMobileMenu();
  };

  interface NavItem {
    id: string;
    label: string;
    isExternal?: boolean;
    url?: string;
    customIcon?: string;
  }

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "achievements", label: "Achievements" },
    { id: "colleges", label: "Partner Colleges" },
    { id: "gallery", label: "Gallery" },
    { id: "team", label: "Our Experts" },
    { id: "crt-services", label: "Programs" },
  ];

  const testverseItem: NavItem = { 
    id: "testverse", 
    label: "Testverse", 
    isExternal: true, 
    url: "https://testverse.vsptech.in", 
    customIcon: "/testverse_logo_icon.png" 
  };

  return (
    <TooltipProvider delayDuration={0}>
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/40 shadow-sm z-[100]"
          : "bg-transparent z-[50]"
      }`}
      data-testid="navbar-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20 lg:h-28"
          }`}
        >
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
            data-testid="navbar-logo"
          >
            <img
              src="/VSP_Logo.png"
              alt="VSP Technologies Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12 lg:h-14" : "h-14 md:h-16 lg:h-24"
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center space-x-1"
            data-testid="navbar-desktop-menu"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 group/nav flex items-center gap-2 ${
                  isScrolled ? "text-slate-700" : "text-slate-600"
                } ${
                  activeSection === item.id
                    ? "text-primary"
                    : "hover:text-primary hover:bg-slate-50"
                }`}
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 bg-gradient-to-r from-primary to-accent text-white"
              data-testid="nav-link-contact"
            >
              Contact Us
            </button>

            {/* Testverse Portal Icon - Placed after Contact */}
            <div className="pl-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleExternalLink(testverseItem.url!)}
                    className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/50 hover:shadow-xl hover:ring-blue-400/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/testverse"
                    aria-label="Testverse Portal"
                  >
                    <img 
                      src={testverseItem.customIcon} 
                      alt="" 
                      className="w-7 h-7 object-contain transition-transform duration-500 group-hover/testverse:scale-110 drop-shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={15} className="bg-white text-slate-800 border border-slate-200 p-4 shadow-xl rounded-xl w-56 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col gap-1.5">
                    {/* <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Secure Access</span> */}
                    <h4 className="text-sm font-bold tracking-tight">VSP Testverse Portal</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Enter the official assessment portal for corporate and technical testing.
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-blue-600">
                       <span className="text-[9px] font-bold">LAUNCH NOW</span>
                       <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden relative z-[110] p-2 rounded-lg transition-all duration-200 ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-slate-800 hover:bg-white/30 backdrop-blur-sm "
            } ${isMobileMenuOpen ? "text-primary bg-slate-100 shadow-inner" : ""}`}
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md lg:hidden z-[101] transition-opacity duration-300"
          onClick={closeMobileMenu}
          data-testid="mobile-menu-overlay"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-[280px] sm:w-80 max-w-[85vw] bg-white lg:hidden z-[105] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-testid="navbar-mobile-menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-50 mt-2">
          <img
            src="/VSP_Logo.png"
            alt="VSP Technologies Logo"
            className="h-9 w-auto"
          />
          <button
            onClick={closeMobileMenu}
            className="p-2.5 rounded-full bg-slate-50 text-slate-400 hover:text-primary transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Items - Professional Sequential List */}
        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-1 custom-scrollbar">
          {[...navItems, testverseItem].map((item, idx) => (
            <button
              key={item.id}
              onClick={() => item.isExternal ? handleExternalLink(item.url!) : scrollToSection(item.id)}
              className={`w-full text-left px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-4 relative group ${
                item.id === 'testverse'
                  ? "text-blue-600 bg-blue-50 border-l-4 border-l-blue-600 border-r-4 border-r-transparent"
                  : activeSection === item.id
                    ? "text-primary bg-primary/5"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
              }`}
              data-testid={`mobile-nav-link-${item.id}`}
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Index Number */}
                <span className={`text-[10px] font-mono ${activeSection === item.id ? "text-primary" : "text-slate-300 group-hover:text-primary/40"}`}>
                  0{idx + 1}
                </span>
                  <div className="flex items-center justify-between w-full">
                    <span className="flex items-center gap-2.5">
                       {item.customIcon && <img src={item.customIcon} alt="" className="w-5 h-5 object-contain" />}
                       {item.label}
                    </span>
                    {item.isExternal ? (
                      <ExternalLink className="w-4 h-4 text-slate-300" />
                    ) : (
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === item.id ? "text-primary translate-x-1" : "text-slate-200"}`} />
                    )}
                  </div>
              </div>
              
              {/* Active Indicator Bar */}
              {activeSection === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Contact Button - Premium Action */}
        <div className="p-8 pb-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-lg shadow-slate-200 active:scale-95 transition-all text-center flex items-center justify-center gap-3"
            data-testid="mobile-nav-link-contact"
          >
            Contact Now
          </button>
        </div>
      </div>
    </nav>
    </TooltipProvider>
  );
}
