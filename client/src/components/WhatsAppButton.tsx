import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollMode, setScrollMode] = useState<"to-bottom" | "to-top" | "hidden">("to-bottom");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY < 200) {
        setScrollMode("to-bottom");
      } else if (scrollY + windowHeight > documentHeight - 600) {
        setScrollMode("to-top");
      } else {
        setScrollMode("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919876543210"; // Replace with actual VSP Technologies WhatsApp number
    const message =
      "Hi! I'm interested in learning more about VSP Technologies' campus recruitment training programs. Can you provide more details?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: "smooth" 
    });
  };

  return (
    <>
      {/* WhatsApp Button */}
      {/* ... previous content ... */}
      
      {/* Dynamic Scroll Button */}
      <div
        className={`fixed bottom-24 right-7 z-40 transition-all duration-700 transform flex flex-col items-center gap-2 ${
          scrollMode !== "hidden" && isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] [writing-mode:vertical-lr] mb-1 animate-pulse">
          {scrollMode === "to-bottom" ? "Explore" : "To Top"}
        </span>
        <button
          onClick={scrollMode === "to-bottom" ? scrollToBottom : scrollToTop}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-sm flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
          aria-label={scrollMode === "to-bottom" ? "Scroll to bottom" : "Scroll to top"}
        >
          {scrollMode === "to-bottom" ? (
            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          ) : (
            <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          )}
        </button>
      </div>

      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
        data-testid="whatsapp-button-container"
      >
        <div className="relative group">
          {/* Pulsing Background Effect */}
          {/* <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div> */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></div>

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform ${
              isHovered ? "scale-110" : "scale-100"
            } hover:from-green-400 hover:to-green-500 group`}
            data-testid="button-whatsapp"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.69" />
            </svg>
          </button>

          {/* Tooltip */}
          <div
            className={`absolute right-20 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 pointer-events-none"
            }`}
          >
            <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap">
              Chat with us on WhatsApp!
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Message Bubble */}
      {/* <div
        className={`fixed bottom-24 right-6 z-40 lg:hidden transition-all duration-700 transform ${
          isVisible && !isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
        data-testid="whatsapp-mobile-message"
      >
        <div className="bg-white rounded-2xl shadow-lg p-4 max-w-xs border border-gray-100">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 mb-1">VSP Technologies</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Need help with our training programs? Click to chat with us!
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 right-8">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}
