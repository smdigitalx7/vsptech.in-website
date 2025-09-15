import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  Award,
  ArrowRight,
  BookOpen,
  Target,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    {
      number: "200K+",
      label: "Students Trained Across Institutions",
      icon: Users,
    },
    {
      number: "17+",
      label: "Years Serving Educational Partners",
      icon: Calendar,
    },
    { number: "100%", label: "Partner Satisfaction Rate", icon: Award },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background "
      ref={heroRef}
      data-testid="section-hero"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle brand accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/3 to-transparent"></div>

        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="professional-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#professional-grid)"
              className="text-foreground"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 max-w-7xl ">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
          {/* Main Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className={`${heroVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold mb-8 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Trusted by Leading Educational Institutions
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight"
                data-testid="text-hero-title"
              >
                Prepare Students for
                <span className="block text-primary mt-2">
                  Successful Careers
                </span>
              </h1>
            </div>

            <div
              className={`${
                heroVisible ? "animate-fade-in" : "opacity-0"
              } delay-200`}
            >
              <p
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl lg:max-w-none leading-relaxed"
                data-testid="text-hero-description"
              >
                Partner with VSP Technologies to deliver comprehensive campus
                recruitment training that transforms your students into
                industry-ready professionals. Our proven programs ensure higher
                placement rates and better career outcomes for your graduates.
              </p>
            </div>

            <div
              className={`${
                heroVisible ? "animate-fade-in" : "opacity-0"
              } delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center`}
            >
              <button
                onClick={() => scrollToSection("about")}
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 flex items-center"
                data-testid="button-learn-more"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                Partner With Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center"
                data-testid="button-get-started"
              >
                <Target className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                View Our Services
              </button>
            </div>
          </div>

          {/* Professional Stats Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className={`${
                heroVisible ? "animate-slide-in-right" : "opacity-0"
              } delay-600 w-full max-w-md`}
            >
              {/* VSP Logo Display
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-6">
                <div className="text-center">
                  <img
                    src="@assets/download_1757855394752.png"
                    alt="VSP Technologies Logo"
                    className="h-20 w-auto mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Campus Recruitment Training
                  </h3>
                  <p className="text-muted-foreground">
                    Your Trusted Educational Partner
                  </p>
                </div>
              </div> */}

              {/* Current Stat Display */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                    {(() => {
                      const IconComponent = stats[currentStat].icon;
                      return (
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      );
                    })()}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-500">
                    {stats[currentStat].number}
                  </div>
                  <div className="text-muted-foreground font-medium text-lg mb-6">
                    {stats[currentStat].label}
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2">
                    {stats.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentStat
                            ? "w-8 bg-primary"
                            : "w-1.5 bg-border"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-secondary/10 rounded-xl p-4 text-center border border-secondary/20">
                  <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">
                    Excellence
                  </div>
                </div>
                <div className="bg-accent/10 rounded-xl p-4 text-center border border-accent/20">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">
                    Community
                  </div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">
                    Results
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        {/* <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div> */}
        <ArrowDown className="w-6 h-6 text-primary mx-auto mb-2" />
        <p className="text-muted-foreground text-xs mt-2 font-medium text-center">
          Scroll to Explore
        </p>
      </div>
    </section>
  );
}
