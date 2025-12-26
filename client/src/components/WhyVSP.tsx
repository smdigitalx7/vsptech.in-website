import { motion } from "framer-motion";
import { Presentation, FileText, Laptop, Star } from "lucide-react";

export default function WhyVSP() {
  const features = [
    {
      icon: Presentation,
      title: "Interactive Learning",
      description:
        "Our engaging teaching methods focus on active participation and hands-on practice to help students learn better.",
      color: "blue",
    },
    {
      icon: FileText,
      title: "Well-Researched Content",
      description:
        "Our training materials are carefully developed based on industry needs and current job market trends.",
      color: "green",
    },
    {
      icon: Laptop,
      title: "Online Assessments",
      description:
        "Easy-to-use online tests that help track student progress and prepare them for real job interviews.",
      color: "purple",
    },
    {
      icon: Star,
      title: "Final Review",
      description:
        "Focused practice sessions that polish student skills right before the actual job interviews.",
      color: "orange",
    },
  ];

  return (
    <section
      id="why-vsp"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      data-testid="section-why-vsp"
    >
      {/* Decorative flair */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Content Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider border border-primary/20 mx-auto lg:mx-0">
                <span>The VSP edge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                Why Top <br className="hidden lg:block" />Institutions <br className="hidden lg:block" /><span className="text-primary italic font-serif">Trust Us</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                We combine years of academic excellence with real-world corporate insights 
                to deliver results that matter.
              </p>
            </motion.div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const colors: Record<string, string> = {
                  blue: "bg-blue-50 text-blue-600 border-blue-100",
                  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  purple: "bg-purple-50 text-purple-600 border-purple-100",
                  orange: "bg-orange-50 text-orange-600 border-orange-100",
                };
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-slate-50 p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-primary/20"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${colors[feature.color]}`}>
                      <feature.icon className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-slate-900 leading-tight tracking-tight group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-semibold">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
