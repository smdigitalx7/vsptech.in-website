import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import WhyVSP from "@/components/WhyVSP";
import Team from "@/components/Team";
import CRTServices from "@/components/CRTServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector(
        '[data-testid="navbar-mobile-menu"]'
      );
      const mobileMenuBtn = (event.target as Element)?.closest(
        '[data-testid="button-mobile-menu"]'
      );

      if (
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        !mobileMenuBtn
      ) {
        mobileMenu.classList.remove("open");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground ">
          <Navbar />
          <main>
            <Hero />
            <About />
            <MissionVision />
            <WhyVSP />
            <Team />
            <CRTServices />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
