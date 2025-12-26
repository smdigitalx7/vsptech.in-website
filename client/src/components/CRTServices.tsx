import { motion } from "framer-motion";
import {
  Code,
  Brain,
  MessageCircle,
  Handshake,
  BarChart3,
  Check,
  Users,
  Terminal,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function CRTServices() {
  const mainServices = [
    {
      icon: Code,
      title: "Technical Training Programs",
      subtitle: "Industry-Ready Curriculum",
      description: "Intensive training in C, C++, Java, and Python alongside Data Structures and Algorithms tailored for top MNC requirements.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/TechnicalTraining.jpg",
    },
    {
      icon: Brain,
      title: "Aptitude & Reasoning",
      subtitle: "Enhanced Problem-Solving",
      description: "Systematic methodology to improve students' analytical, numerical, and logical thinking abilities for competitive assessments.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "/AptitudeTraining.jpg",
    },
    {
      icon: MessageCircle,
      title: "Communication Mastery",
      subtitle: "Professional Excellence",
      description: "Comprehensive personality development programs focused on soft skills, group discussions, and verbal proficiency.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      image: "/Communicationtraining.jpg",
    },
    {
      icon: Handshake,
      title: "Interview Preparation",
      subtitle: "Placement Success",
      description: "Strategically simulated mock interview sessions and HR round preparations to significantly boost campus placement rates.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "/InterviewPrep.jpg",
    },
    {
      icon: BarChart3,
      title: "LMS & Progress Tracking",
      subtitle: "Institutional Analytics",
      description: "Advanced monitoring systems providing real-time data and detailed progress analytics to college administration.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      image: "/LMSTracking.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="crt-services" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 border border-secondary/20">
            <span>Our training ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#111827] mb-6 md:mb-8 leading-[1.2] tracking-tight">
            Comprehensive <span className="text-primary italic font-serif">Campus</span> <br className="hidden sm:block" />
            Recruitment Solutions
          </h2>
          <p className="text-base md:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Carefully designed training programs that prepare students for real jobs through expert teaching and progress tracking.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 md:h-56 overflow-hidden relative shrink-0">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 ${service.bgColor}/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${service.bgColor} ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl border border-white/50`}>
                    <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 space-y-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5">{service.subtitle}</div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mt-4">
                    {service.description}
                  </p>
                </div>
                {/* <div className="pt-4 flex justify-between items-center group/btn cursor-pointer">
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover/btn:text-primary transition-colors">Learn more</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all transform group-hover:rotate-[360deg] duration-500">
                    <Check className="w-4 h-4" />
                  </div>
                </div> */}
              </div>
            </motion.div>
          ))}
          
          {/* Proposal Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-primary text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-xl shadow-primary/20 transition-all hover:-translate-y-2"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-6 md:mb-8 backdrop-blur-sm border border-white/10">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">Partner <br className="hidden md:block" /> with us</h3>
            <p className="text-sm md:text-lg font-medium opacity-90 mb-8 md:mb-10 leading-relaxed max-w-[240px]">
              Unlock your institution's full potential with our result-oriented programs.
            </p>
            <button className="w-full py-4 md:py-5 bg-white text-primary rounded-2xl font-bold text-sm md:text-base shadow-xl hover:bg-slate-50 active:scale-95 transition-all"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >
              Request full proposal
            </button>
          </motion.div>
        </motion.div>

        {/* Technical Framework */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 space-y-6 md:space-y-0 text-center md:text-left">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">Technical framework</h3>
              <p className="text-sm md:text-lg text-slate-500 font-medium font-sans">Built on modern technologies used by global tech giants.</p>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center">
                  <Terminal className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                </div>
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-lg">
                +12
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {["C/C++ Excellence", "Java Core", "Python Prep", "DSA Mastery", "SQL & DBMS", "Web Dev", "OS Concepts", "System Design", "TCS NQT Track", "Wipro Prep"].map((item, i) => (
              <div key={i} className="bg-white px-4 py-5 md:p-6 rounded-2xl border border-slate-100 flex items-center space-x-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-base font-bold text-slate-700 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Strategic Advantages */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20 shadow-2xl shadow-slate-200/50 border border-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-12 text-center mb-4 md:mb-8">
               <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">Strategic <span className="text-primary italic font-serif">Advantages</span></h3>
               <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">Why top colleges across India trust VSP Technologies.</p>
            </div>
            <div className="lg:col-span-7 space-y-4 md:space-y-6">
              {[
                "Trainers with 3 to 25 years of experience",
                "Optimized batch sizes for maximum impact",
                "Rigorous Pre & Post placement assessments",
                "Customizable institutional fee structures",
                "Advanced performance analytics for management"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 md:space-x-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Check className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-base md:text-xl font-bold text-slate-700 leading-normal pt-1.5">{item}</span>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                 <Users className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-6" />
                 <h4 className="text-xl md:text-2xl font-extrabold mb-2">Direct mentorship</h4>
                 <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">Personalized attention with a strict ratio for batch facilitators.</p>
              </div>
              <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                 <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-4 md:mb-6" />
                 <h4 className="text-xl md:text-2xl font-extrabold mb-2">Growth analytics</h4>
                 <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">Transparent tracking of student trajectory throughout the program.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
