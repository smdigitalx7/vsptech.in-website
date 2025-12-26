import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Users,
  Briefcase,
  Code,
  Brain,
  ChevronRight,
  Trophy,
  Target,
  BadgeCheck,
  X,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { allTeamMembers } from "@/data/teamMembers";

type Category = "All" | "Technical" | "Aptitude" | "Leadership";

export default function TeamPageRoute() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedMember, setSelectedMember] = useState<typeof allTeamMembers[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories: { id: Category; label: string; icon: any }[] = [
    { id: "All", label: "All Experts", icon: Users },
    { id: "Technical", label: "Technical", icon: Code },
    { id: "Aptitude", label: "Aptitude", icon: Brain },
    { id: "Leadership", label: "Leadership", icon: ShieldCheck },
  ];

  const filteredMembers = useMemo(() => {
    if (activeCategory === "All") return allTeamMembers;
    if (activeCategory === "Leadership") {
      return allTeamMembers.filter(m => m.role.includes("Coordinator") || m.role.includes("Co-ordinator") || m.role.includes("Star"));
    }
    return allTeamMembers.filter(m => m.trainerType === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background pt-24 text-foreground selection:bg-primary/10">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section - Restored Original Captions with Improved Design */}
          <div className="text-center space-y-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Our Specialist Team</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
            >
              The Experts Driving <span className="text-primary italic">Career</span> Success
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
            >
              Meet our exceptional team of trainers and industry experts dedicated to your success.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 max-w-4xl mx-auto">
            {[
              { label: "Expert Trainers", value: allTeamMembers.length.toString(), icon: Trophy },
              { label: "Students Impacted", value: "7,00,000+", icon: Target },
              { label: "Combined Experience", value: "40+ Years", icon: BadgeCheck },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl border border-border/50 text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mb-3" />
                <span className="text-2xl font-bold text-foreground mb-1">{stat.value}</span>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Filters - Horizontal Scroll on Mobile */}
          <div className="relative mb-8 md:mb-12">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 md:px-0 md:mx-0 md:justify-center md:flex-wrap md:border-b md:border-border md:pb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all border shrink-0 ${
                    activeCategory === cat.id 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{cat.label}</span>
                </button>
              ))}
            </div>
            {/* Visual indicator for horizontal scroll on mobile */}
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
          </div>

          {/* Members Grid - Optimized for Smoothness */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white dark:bg-zinc-900 rounded-2xl md:rounded-3xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=0D8ABC&color=fff&size=512";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Permanent Experience Badge */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                      <div className="bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-lg border border-border/50 flex items-center gap-1.5 md:gap-2">
                        <Briefcase className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary" />
                        <span className="text-[9px] md:text-[10px] font-bold text-foreground uppercase tracking-widest whitespace-nowrap">
                          {member.experience.split(" ")[0]} Yrs
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 bg-primary/10 rounded text-[9px] md:text-[10px] font-bold uppercase text-primary tracking-widest border border-primary/20">
                        {member.trainerType || "Expert"}
                      </span>
                      {member.role.includes("Star") && (
                        <Star className="w-3 h-3 text-primary fill-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-foreground mb-0.5 md:mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider line-clamp-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-white dark:bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-border hidden md:block">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary">
                      <span>View Full Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Profile Modal - Enhanced Accessibility & Mobile Layout */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 50 }}
              className="relative w-full max-w-5xl bg-background rounded-t-[2rem] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-auto md:max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 bg-background/80 hover:bg-muted p-2 rounded-full transition-colors border border-border shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Section - Optimized Visibility */}
              <div className="w-full md:w-2/5 shrink-0 bg-muted h-80 md:h-auto relative overflow-hidden">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(selectedMember.name) + "&background=0D8ABC&color=fff&size=512";
                  }}
                />
                {/* Subtle overlay for better text contrast if needed, but not washing out the face */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-3/5 p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-8 md:space-y-10">
                  <header className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest border border-primary/20">
                        {selectedMember.role}
                      </span>
                      {selectedMember.trainerType && (
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          {selectedMember.trainerType} Division
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-5xl font-extrabold text-foreground tracking-tight uppercase">
                      {selectedMember.name}
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/50 mt-4 md:mt-8">
                      <div className="space-y-1">
                        <p className="text-lg md:text-xl font-bold text-foreground">{selectedMember.studentsTrained.split(" ")[0]}</p>
                        <p className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Students Mentored</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg md:text-xl font-bold text-primary">{selectedMember.experience.split(" ")[0]} Years</p>
                        <p className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Industry Exp</p>
                      </div>
                    </div>
                  </header>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em]">The Narrative</h4>
                      <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                        {selectedMember.description.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pb-4">
                      <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em]">Core Expertise</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {selectedMember.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2.5 py-1 md:px-3 md:py-1.5 bg-muted/50 rounded-lg text-[10px] md:text-xs font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all border border-border/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
