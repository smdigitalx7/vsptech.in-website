import { motion } from "framer-motion";
import { MapPin, GraduationCap, CheckCircle2 } from "lucide-react";

export default function TrainedColleges() {
  const colleges = [
    {
      name: "Raghu Engineering College",
      location: "Vizag",
      training: "CRT and Company Specific",
      logo: "/RAGHU.jpg",
    },
    {
      name: "Bapatla Engineering College",
      location: "Bapatla",
      training: "CRT",
      logo: "/BAPATLA.jpg",
    },
    {
      name: "Vignan's Institute for Women",
      location: "Hyderabad",
      training: "CRT and Company Specific",
      logo: "/VIGNAN'S.png",
    },
    {
      name: "Mother Theresa Institute",
      location: "Palamaner",
      training: "CRT Program",
      logo: "/Mother Theresa.jpg",
    },
    {
      name: "TKR College of Engineering",
      location: "Hyderabad",
      training: "Accenture Specific Training",
      logo: "/TKR.png",
    },
    {
      name: "Santhiram Engineering College",
      location: "Nandyal",
      training: "Infosys Specific Program",
      logo: "/Santhiram.jpg",
    },
    {
      name: "Chalapathi Institute",
      location: "Guntur",
      training: "CRT Program",
      logo: "/BAPATLA.jpg",
    },
    {
      name: "RISE Krishna Sai Prakasam",
      location: "Ongole",
      training: "CRT & Company Specific",
      logo: "/Rise.png",
    },
    {
      name: "Ideal Institute of Tech",
      location: "Kakinada",
      training: "CRT Program",
      logo: "/Ideal.jpg",
    },
    {
      name: "International School for Women",
      location: "Rajamahendravaram",
      training: "CRT Program",
      logo: "/International-school.jpg",
    },
    {
      name: "KLR College of Engineering",
      location: "Palvancha",
      training: "CRT Program",
      logo: "/KLR.jpg",
    },
    {
      name: "Vaageswari College of Engineering",
      location: "Karimnagar",
      training: "CRT Program",
      logo: "/Vaageswari.jpg",
    },
    {
      name: "DR K.V Subba Reddy Institue of Technology",
      location: "Kurnool",
      training: "CRT Program",
      logo: "/KVSubbareddy.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="colleges"
      className="py-16 md:py-32 bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-6 text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-6"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span>Institutional Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight"
            >
              Our Trusted <br className="hidden sm:block" />
              <span className="text-primary italic font-serif">Partner Network</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-slate-500 font-medium max-w-sm mx-auto lg:mx-0 leading-relaxed"
          >
            We collaborate with India's leading institutions to deliver
            industry-standard technical training.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {colleges.map((college, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 p-2 flex items-center justify-center border border-slate-100 group-hover:bg-white transition-all shadow-sm">
                  <img
                    src={college.logo}
                    alt={college.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-800 leading-tight group-hover:text-primary transition-colors">
                  {college.name}
                </h3>

                <div className="space-y-2 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {college.location}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <GraduationCap className="w-3.5 h-3.5 mt-0.5 text-primary/60 shrink-0" />
                    <span className="text-[11px] md:text-xs leading-relaxed font-bold italic">
                      {college.training}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
