import { motion } from "framer-motion";
import { Trophy, Award, Star, ZoomIn, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function Achievements() {
  const achievements = [
    {
      year: "2025",
      title: "Impact Excellence",
      description:
        "Recognized for training and placing students in top-tier MNCs with packages up to 11 LPA.",
      image: "/acheivement-2025.jpg",
      icon: Trophy,
    },
    {
      year: "2026",
      title: "Placement Milestone",
      description:
        "Successfully placed 182+ students at Infosys, setting a new benchmark for CRT results.",
      image: "/acheivement-2026-1.jpg",
      icon: Award,
    },
    {
      year: "2026",
      title: "Cognizant Selections",
      description:
        "Achieved a record 107 selections for Cognizant in a single recruitment drive.",
      image: "/acheivement-2026-2.jpg",
      icon: Star,
    },
    {
      year: "2026",
      title: "Standardized Success",
      description:
        "Consistently delivering premium talent to industry giants with verifiable results.",
      image: "/acheivement-2026-3.jpg",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-white relative overflow-hidden"
      data-testid="section-achievements"
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-secondary/20">
            <span>Our Benchmarks</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
            Setting New <span className="text-primary italic font-serif">Standards</span>{" "}
            in CRT
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Verifiable results that document our journey of excellence in
            shaping the careers of thousands of students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achieve, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl hover:bg-white cursor-pointer"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={achieve.image}
                      alt={achieve.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-extrabold text-slate-800 tracking-wider shadow-lg">
                        CLASS OF {achieve.year}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                          <achieve.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {achieve.title}
                        </h3>
                      </div>
                      <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                        <ZoomIn className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold">
                      {achieve.description}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full p-4 bg-transparent border-0 shadow-none [&>button]:hidden">
                <div className="relative">
                  <img
                    src={achieve.image}
                    alt={achieve.title}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-[2rem] shadow-2xl"
                  />
                  <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/70 hover:bg-black/90 text-white p-2 transition-all duration-200 hover:scale-110">
                    <X className="h-5 w-5" />
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
