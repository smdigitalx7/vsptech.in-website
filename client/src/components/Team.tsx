import { motion } from "framer-motion";
import {
  Star,
  Users,
  Briefcase,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { useLocation } from "wouter";
import { allTeamMembers } from "@/data/teamMembers";

export default function Team() {
  const [, setLocation] = useLocation();
  const topExperts = allTeamMembers.slice(0, 3);

  const navigateToTeamPage = () => {
    setLocation("/team");
  };

  return (
    <section
      id="team"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
      data-testid="section-team"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[100px] -z-0 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-0 -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider border border-primary/20"
          >
            <Users className="w-4 h-4" />
            <span>Our Specialist Team</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight tracking-tight"
          >
            The Experts Driving <span className="text-primary italic font-serif">Career</span> Success
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-muted-foreground font-medium leading-relaxed"
          >
            Meet the dedicated professionals committed to bridging the gap between academic education and corporate careers with 40+ years of combined expertise.
          </motion.p>
        </div>

        {/* Highlight Stats Bar - Responsive optimization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-muted/30 dark:bg-zinc-800/50 rounded-2xl md:rounded-3xl border border-border/50 shadow-sm"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-border/50">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">98% Success</h4>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Placement Rate Growth</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-muted/30 dark:bg-zinc-800/50 rounded-2xl md:rounded-3xl border border-border/50 shadow-sm"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-border/50">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">7L+ Impacted</h4>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Students Trained</p>
            </div>
          </motion.div>
        </div>

        {/* Expert Teaser Grid - Better Mobile Presentation */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {topExperts.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=0D8ABC&color=fff&size=512";
                  }}
                />
                
                {/* On mobile/tablet, show names directly. On desktop, hover. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Fixed Experience Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <div className="bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-lg border border-border/50 flex items-center gap-1.5 md:gap-2">
                    <Briefcase className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary" />
                    <span className="text-[9px] md:text-[10px] font-bold text-foreground uppercase tracking-wider leading-none">
                      {member.experience.split(" ")[0]}Y+ Exp
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{member.role}</p>
                  <h3 className="text-base md:text-xl font-extrabold uppercase tracking-tight leading-tight">{member.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-8 md:pt-12 border-t border-border/50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToTeamPage}
            className="group flex items-center gap-3 md:gap-4 px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-2xl font-bold text-sm md:text-base uppercase tracking-wider shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-95"
          >
            <span>Explore all mentors</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
