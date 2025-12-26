import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [scrollState, setScrollState] = useState<"top" | "middle" | "bottom">("top");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrollY < 300) {
        setScrollState("top");
      } else if (scrollY + windowHeight > documentHeight - 300) {
        setScrollState("bottom");
      } else {
        setScrollState("middle");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919876543210"; 
    const message = "Hi! I'm interested in learning more about VSP Technologies.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getButtonConfig = () => {
    switch (scrollState) {
      case "top":
        return {
          icon: <ChevronDown className="w-7 h-7" />,
          label: "Scroll to Bottom",
          color: "bg-primary shadow-primary/20 hover:shadow-primary/40",
          onClick: scrollToBottom,
        };
      case "bottom":
        return {
          icon: <ChevronUp className="w-7 h-7" />,
          label: "Scroll to Top",
          color: "bg-primary shadow-primary/20 hover:shadow-primary/40",
          onClick: scrollToTop,
        };
      case "middle":
      default:
        return {
          icon: <MessageCircle className="w-7 h-7" />,
          label: "Chat on WhatsApp",
          color: "bg-green-500 shadow-green-500/20 hover:shadow-green-500/40",
          onClick: handleWhatsAppClick,
        };
    }
  };

  const config = getButtonConfig();

  return (
    <div className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 ${isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-20"}`}>
      <div className="relative group">
        {scrollState === "middle" && (
           <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-25"></div>
        )}
        
        <button
          onClick={config.onClick}
          className={`relative w-14 h-14 rounded-full text-white flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 shadow-2xl overflow-hidden ${config.color}`}
          aria-label={config.label}
        >
          {/* Keyframe animation for icon change */}
          <div key={scrollState} className="animate-in fade-in zoom-in spin-in-12 duration-500">
            {config.icon}
          </div>
        </button>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold py-2 px-4 rounded-xl shadow-2xl whitespace-nowrap pointer-events-none ring-1 ring-white/10 uppercase tracking-wider">
          {config.label}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-slate-900/90"></div>
        </div>
      </div>
    </div>
  );
}

