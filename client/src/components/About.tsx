import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Success Rate", value: "100%", icon: CheckCircle2, color: "text-green-500" },
    { label: "Expert Mentors", value: "50+", icon: Users, color: "text-blue-500" },
    { label: "Years of Excellence", value: "17+", icon: Award, color: "text-amber-500" },
    { label: "Top Corporate Ties", value: "200+", icon: Rocket, color: "text-purple-500" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
      data-testid="section-about"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white aspect-[4/3] z-10 group">
                <img
                  src="/Training.jpg"
                  alt="VSP Technologies Training Session"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Stats Badge - Overlapping */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20 bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 hidden sm:flex flex-col items-center animate-subtle-float">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1 md:mb-2">17+</div>
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                  Years of <br /> Excellence
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex items-center gap-3 animate-subtle-float delay-700">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-800 text-sm">100% Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>About our company</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight">
                Trusted by Experts, <br />
                <span className="text-primary italic font-serif">Preferred</span> by Students
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                VSP Technologies is a leading training organization committed to bridging the corporate-academic divide. With over 17 years of legacy, we have empowered lakhs of students across South India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((item, index) => (
                <div key={index} className="bg-slate-50/80 rounded-2xl p-4 md:p-6 border border-slate-100/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                  <div className={`${item.color} mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="text-xl md:text-2xl font-extrabold text-slate-900">{item.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            {/* <div className="pt-4">
              <div className="flex items-center gap-4 p-4 md:p-6 bg-slate-900 rounded-[2rem] text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold">200K+ Students Trained</div>
                  <div className="text-xs md:text-sm text-slate-400">Across South India (AP, Telangana, Karnataka)</div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
