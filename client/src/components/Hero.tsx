import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const partnerLogos = [
    "/BAPATLA.jpg",
    "/RAGHU.jpg",
    "/VIGNAN'S.png",
    "/TKR.png",
    "/KVSubbareddy.png",
    "/Rise.png",
    "/Santhiram.jpg",
    "/Vaageswari.jpg",
    "/Ideal.jpg",
    "/KLR.jpg",
    "/Mother Theresa.jpg",
    "/Srinivasa.jpg",
    "/International-school.jpg",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-x-hidden pt-20 pb-12 md:pt-36 md:pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 md:w-80 h-64 md:h-80 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 md:w-96 h-80 md:h-96 bg-indigo-400/15 rounded-full blur-3xl" />
        
        {/* Simplified Grid Pattern for Performance */}
        <div className="absolute inset-0 opacity-[0.03] hero-pattern" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 md:space-y-8 text-center lg:text-left w-full max-w-full overflow-hidden"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-md rounded-full border border-blue-100 text-[#1a7bc1] text-[10px] md:text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0 shadow-sm w-fit">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
              <span>Campus Recruitment Experts</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111827] leading-[1.2] lg:leading-[1.1] tracking-tight">
                Bridging the Gap <br className="hidden sm:block" />
                Between{" "}
                <span className="text-primary italic font-serif">
                  Education
                </span>{" "}
                <br className="hidden sm:block" />
                and <span className="text-[#f59e0b]">Careers</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed px-2 md:px-0">
                Empowering institutions with industry-aligned training programs
                that transform students into high-performing professionals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 px-4 sm:px-0 lg:mx-0 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("crt-services")}
                className="bg-primary text-white px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-slate-700 px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg border border-slate-200 transition-all hover:border-primary/50 hover:text-primary active:scale-95"
              >
                Partner With Us
              </button>
            </div>

            {/* Partner Logos Slider */}
            <div className="pt-8 md:pt-10 border-t border-slate-200/50 mt-4 md:mt-0 w-full max-w-[calc(100vw-32px)] sm:max-w-full">
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Trusted by 500+ Institutions
              </p>
              <div className="relative overflow-hidden w-full group">
                <div className="flex items-center gap-8 md:gap-12 animate-scroll whitespace-nowrap py-2 w-max">
                  {[...partnerLogos, ...partnerLogos].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="h-6 sm:h-8 md:h-10 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
                      alt="Partner"
                    />
                  ))}
                </div>
                {/* Gradient Fades for Slider */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:mt-0 px-2 sm:px-8 lg:px-0"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative shapes */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] md:rounded-[4rem] blur-2xl" />

              {/* Legacy Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl p-3 md:p-5 shadow-xl border border-slate-50 flex flex-col items-center animate-subtle-float">
                <span className="text-2xl md:text-4xl font-extrabold text-primary leading-none">17+</span>
                <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">Years Legacy</span>
              </div>

              {/* Image Container */}
              <div className="relative bg-white rounded-[2rem] md:rounded-[3.5rem] p-2 md:p-3 shadow-2xl border border-white/50 overflow-hidden group">
                <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[1.8rem] md:rounded-[3rem] overflow-hidden">
                  <img
                    src="/hero-ultra-realistic.png"
                    alt="VSP Technologies Training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Success Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-5 shadow-xl border border-white flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f59e0b] rounded-xl flex items-center justify-center text-white shrink-0">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-lg md:text-2xl font-extrabold text-slate-900 leading-none">200K+</div>
                      <div className="text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Placements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
