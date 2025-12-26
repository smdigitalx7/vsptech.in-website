import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const missionPoints = [
    "To train with a world class quality of education making them a complete personality",
    "To sharpen the participants intelligence and motivating them to be spiritual and ethical",
    "To create a suitable atmosphere to enhance their skills",
  ];

  const visionPoints = [
    "Igniting students’ minds through quality education.",
    "To impart skills that empowers value-based education",
  ];

  return (
    <section
      id="mission-vision"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
      data-testid="section-mission-vision"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] border border-primary/10 rounded-full animate-pulse -z-0" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
            <span>Our Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-slate-900">
            The Purpose Behind <br className="hidden sm:block" /> Our <span className="text-primary italic font-serif">Excellence</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-[#f59e0b] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full group hover:border-primary/30 transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-8 md:mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/5 rounded-3xl flex items-center justify-center sm:mr-8 mb-6 sm:mb-0 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-all" />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-none mb-2 text-slate-800">Our Mission</h3>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">Driving student competence</p>
                </div>
              </div>
              <ul className="space-y-6">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-5 md:mr-6 shrink-0" />
                    <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-semibold transition-colors group-hover/item:text-slate-900">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full group hover:border-[#f59e0b]/30 transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-8 md:mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f59e0b]/5 rounded-3xl flex items-center justify-center sm:mr-8 mb-6 sm:mb-0 group-hover:bg-[#f59e0b] group-hover:text-white group-hover:-rotate-6 transition-all duration-500 shadow-sm">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#f59e0b] group-hover:text-white transition-all" />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-none mb-2 text-slate-800">Our Vision</h3>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">Igniting global potential</p>
                </div>
              </div>
              <ul className="space-y-6">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2.5 mr-5 md:mr-6 shrink-0" />
                    <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-semibold transition-colors group-hover/item:text-slate-900">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
