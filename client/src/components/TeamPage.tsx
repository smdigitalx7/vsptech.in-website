import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Star,
  Crown,
  Users,
  Briefcase,
  Check,
  Code,
  Brain,
} from "lucide-react";

// Shared team members data
export const allTeamMembers = [
  {
    name: "Mr. Satish Babu K",
    role: "Star Rated Technical Trainer",
    experience: "17+ Years Experience",
    studentsTrained: "2,00,000+ Students Trained",
    image: "/Satish_VSP.jpg",
    description: [
      "With 17+ years of experience partnering with educational institutions, he has delivered technical training programs across multiple colleges in various states. His institutional partnerships have resulted in successfully training around 2,00,000+ students, significantly enhancing placement rates for partner colleges and strengthening their industry reputation.",
      "As a Star-rated technical trainer, he brings proven expertise in designing institutional training programs that align with campus recruitment requirements. His specialized approach ensures students from partner institutions are well-prepared for competitive assessments and technical interviews, directly contributing to improved placement statistics that college administrators value.",
    ],
    skills: ["C/C++", "Java", "Python", "Data Structures", "DBMS"],
    bgColor: "primary",
  },
  {
    name: "Mr. Rams",
    role: "Facilitator and Coach",
    experience: "26+ Years Experience",
    studentsTrained: "5,00,000+ Students Trained",
    image: "/Ram.jpg",
    description: [
      "Mr. Rams is a well-respected and highly skilled facilitator and coach with over 26 years of experience in different paths. After Graduation in B.A (English) from BASC, M.A (English) from Andhra University and Honorable degrees from CIEFL, Hyderabad, Rams started his career with the increasing steps of education/Teaching as a Teacher, Master, Lecturer, and professor in different reputed institutions and colleges.",
      "He is a professional Trainer in English, Motivation, Communication and Soft Skills. More than 5,00,000 students have been benefited in his experience.",
    ],
    skills: ["English Training", "Motivation", "Communication Skills", "Soft Skills"],
    bgColor: "accent",
    trainerType: "Aptitude",
  },
  {
    name: "Mr. Prasanth",
    role: "Project Coordinator & Aptitude Trainer",
    experience: "4 Years Experience",
    studentsTrained: "Training Excellence & Project Management",
    image: "/Prasanth.jpg",
    description: [
      "Mr. Prasanth brings dedicated experience as a Project Coordinator and Aptitude Trainer, specializing in delivering comprehensive training programs that enhance student performance in competitive assessments and campus recruitment processes.",
      "With his expertise in project coordination, he ensures seamless execution of training initiatives across multiple educational institutions, managing timelines, resources, and stakeholder communications effectively.",
    ],
    skills: ["Project Coordination", "Aptitude Training", "Training Management"],
    bgColor: "secondary",
  },
  {
    name: "Mr. Balaji J",
    role: "Co-ordinator",
    experience: "8 Years Experience",
    studentsTrained: "Institutional Partnership Coordination",
    image: "/Balaji.jpg",
    description: [
      "8+ Years of specialized experience coordinating institutional training partnerships and managing customized LMS platforms for educational institutions. His expertise ensures seamless integration of VSP training programs with college academic schedules and administrative requirements.",
    ],
    responsibilities: [
      "Coordinating tailored training programs",
      "Managing customized LMS platforms",
      "Ensuring alignment with academic calendars",
      "Facilitating institution-VSP communication",
      "Providing placement outcome analytics",
    ],
    skills: ["Training Coordination", "LMS Management", "Project Management"],
    bgColor: "secondary",
  },
  {
    name: "Mr. Guruprasad Reddy",
    role: "Technical Trainer",
    experience: "4 Years Experience",
    studentsTrained: "Technical Training Excellence",
    image: "/Prasad.jpeg",
    description: [
      "Four years of experience as a Technical Trainer, he has developed deep proficiency in Python programming, Data Structures & Algorithms, and full stack web development. His expertise spans modern technologies including HTML, CSS, JavaScript, and MySQL, enabling him to deliver end-to-end development training with industry relevance.",
      "He is highly skilled in problem-solving, guiding learners through competitive coding platforms such as LeetCode and HackerRank to strengthen algorithmic thinking. Through his structured mentoring and interview-oriented coaching, he consistently prepares students for technical interviews and real-world software challenges.",
    ],
    skills: ["Python", "DSA", "Full Stack Web Development", "HTML/CSS/JavaScript", "MySQL", "LeetCode", "HackerRank"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. Yashwanth Nadh",
    role: "Technical Trainer",
    experience: "3.5+ Years Experience",
    studentsTrained: "Technical Training Excellence",
    image: "/Yashwanth.jpeg",
    description: [
      "3.5+ years of experience as a Freelance Technical Trainer with Ethnus and prior industry exposure as a Power Programmer at Infosys (2019–2021), he brings a strong blend of corporate and academic expertise. He has trained engineering students across India, delivering high-impact sessions in C, Python, Java, and web development technologies such as HTML5, CSS, and Bootstrap.",
      "His capabilities extend to basic Linux administration and placement-oriented technical training, equipping learners with both foundational and career-ready skills. Additionally, his certifications in Basic Electronics, Siemens EV technologies, and NPTEL reinforce his multidisciplinary technical depth.",
    ],
    skills: ["C", "Python", "Java", "HTML5/CSS", "Bootstrap", "Linux Administration", "Infosys Power Programmer"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. Sohel Mohammed",
    role: "Technical Trainer",
    experience: "4+ Years Experience",
    studentsTrained: "Technical Training Excellence",
    image: "/Sohil.jpeg",
    description: [
      "4+ years of experience as a technical trainer, he has effectively mentored thousands of engineering students through structured technical programs and company-specific training modules. His expertise spans C, C++, Java, Python, SQL (MySQL), OOP concepts, and version control using Git, enabling learners to build strong programming foundations.",
      "He also specializes in Data Structures & Algorithms and competitive problem-solving, guiding students to excel on platforms like HackerRank and LeetCode. His training approach integrates real-world applications with industry-aligned skill development, ensuring learners are well prepared for technical interviews and career advancement.",
    ],
    skills: ["C/C++", "Java", "Python", "SQL/MySQL", "OOP", "Git", "DSA", "HackerRank", "LeetCode"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. V. Dhyanesh Mohan",
    role: "Technical Trainer",
    experience: "Technical Training Excellence",
    studentsTrained: "Technical Training Excellence",
    image: "/Mohan.jpeg",
    description: [
      "With experience as a Technical Trainer at FacePrep and ICT Academy, he has delivered high-impact training programs across numerous engineering institutions, focusing on strengthening students' technical and placement readiness. He has designed and executed coding workshops, assessments, and structured placement-oriented modules, ensuring learners gain both conceptual clarity and practical proficiency.",
      "His expertise spans C, C++, Java, Python, Data Structures & Algorithms, along with foundational knowledge in VLSI, Digital Design, and Embedded Systems. He is also skilled in data analysis tools such as Pandas, NumPy, Matplotlib, Scikit-learn, SQL, and Excel, with hands-on experience practicing machine learning workflows on Kaggle.",
    ],
    skills: ["C/C++", "Java", "Python", "DSA", "VLSI", "Digital Design", "Embedded Systems", "Pandas", "NumPy", "Machine Learning", "Kaggle"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. Vinod Kumar A",
    role: "Technical Trainer",
    experience: "4+ Years Experience",
    studentsTrained: "Technical Training Excellence",
    image: "/Vinod.jpeg",
    description: [
      "With over four years of experience as a Technical Trainer, he has successfully delivered faculty development programs, corporate workshops, and industry-aligned training sessions. He is highly skilled in designing structured training modules, placement-focused content, and technical interview preparation strategies that enhance learners' employability.",
      "His domain expertise spans C, Python, Java, Data Structures, AR/VR development, and Full Stack Web Development, enabling him to train students with both foundational and emerging technologies. He has guided learners through problem-solving, coding practice, and personalized one-to-one as well as batch training, ensuring comprehensive technical growth.",
    ],
    skills: ["C", "Python", "Java", "Data Structures", "AR/VR Development", "Full Stack Web Development", "Technical Interview Prep"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. Sreecharan Baddipudi",
    role: "Technical Trainer",
    experience: "3.5+ Years Experience",
    studentsTrained: "Technical Training Excellence",
    image: "/Charan.jpeg",
    description: [
      "With 3.5+ years of experience as a Software Technical Trainer, he has delivered comprehensive full-stack development programs and mentored learners through industry-oriented bootcamps and real-time project implementations. He has conducted high-impact corporate training for organizations such as Pyramid, Elevar, and SVS Solutions, ensuring workforce-ready technical proficiency.",
      "His expertise spans HTML, CSS, JavaScript, React, Node.js, Core Java, Python, C, MySQL, SQL, AWS, Git, GitHub, and modern development frameworks including Bootstrap, WordPress, and Shopify. He also provides specialized training in Data Structures & Algorithms and Java with DSA, empowering students with strong problem-solving and coding capabilities.",
    ],
    skills: ["HTML/CSS/JavaScript", "React", "Node.js", "Java", "Python", "C", "MySQL/SQL", "AWS", "Git/GitHub", "Bootstrap", "WordPress", "Shopify", "DSA"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. S.V.N. Brahma Reddy",
    role: "Technical Trainer",
    experience: "Technical Training Excellence",
    studentsTrained: "Technical Training Excellence",
    image: "/brahmareddy.jpeg",
    description: [
      "With extensive experience as a Technical Trainer across multiple engineering colleges, he has delivered structured training programs in Python, C, and Java for undergraduate learners. His sessions emphasize hands-on coding practice, technical workshops, and problem-solving methodologies that strengthen foundational and applied skills.",
      "He possesses strong domain expertise in Programming Languages, Data Structures, DBMS, Web Technologies, and Basic Machine Learning concepts, enabling students to gain industry-relevant technical competence. His approach blends conceptual clarity with real-time implementation, preparing learners for both academic excellence and placement readiness.",
    ],
    skills: ["Python", "C", "Java", "Data Structures", "DBMS", "Web Technologies", "Machine Learning"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. SURYAKUMAR",
    role: "Technical Trainer",
    experience: "Technical Training Excellence",
    studentsTrained: "Technical Training Excellence",
    image: "/Surya.jpeg",
    description: [
      "You possess strong expertise in full-stack development, delivering scalable web applications using React, Node.js, MySQL, and modern UI frameworks. With extensive experience as a freelance technical trainer, you have trained thousands in programming, DSA, and industry-grade development practices.",
      "Your professional background includes building real-world internal systems and engagement platforms, demonstrating proficiency in frontend engineering, backend integration, and database-driven architectures. You excel in problem-solving, curriculum design, and mentoring learners and teams in adopting modern software development methodologies.",
    ],
    skills: ["React", "Node.js", "MySQL", "Full Stack Development", "DSA", "Frontend Engineering", "Backend Integration", "Database Architecture"],
    bgColor: "primary",
    trainerType: "Technical",
  },
  {
    name: "Mr. Sankaranarayanan S",
    role: "Technical Trainer",
    experience: "1+ Year Experience",
    studentsTrained: "3,000+ Students Trained",
    image: "/Shankar.jpeg",
    description: [
      "With over 1 year of combined experience in software development and training, having trained more than 3,000 students nationwide through workshops and placement-focused sessions at prestigious institutions. He delivers hands-on training in programming languages like Python, Java, and C, as well as SQL, Spring Boot, and Django, covering advanced topics such as data structures, cloud computing, and agile practices while emphasizing real-time problem-solving for industry-readiness.",
    ],
    skills: ["Python", "Java", "C", "SQL", "Spring Boot", "Django", "Data Structures", "Cloud Computing", "Agile Practices"],
    bgColor: "primary",
    trainerType: "Technical",
  },
];

export default function TeamPage() {
  const { elementRef: teamPageRef, isVisible: teamPageVisible } = useScrollAnimation();

  return (
    <section
      id="team-page"
      className="py-20 bg-gradient-to-b from-transparent via-transparent to-white relative overflow-hidden"
      ref={teamPageRef}
      data-testid="section-team-page"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`text-center mb-24 ${teamPageVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-secondary/10 rounded-full text-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-secondary/20">
            <span>Complete Team</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
            Meet Our Complete <span className="text-primary italic">Expert</span> Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Our dedicated team of professionals committed to bridging the gap between academic education and corporate careers.
          </p>
        </div>

        <div className="space-y-24">
          {allTeamMembers.map((member, index) => (
            <div
              key={index}
              className={`group ${teamPageVisible ? "animate-fade-in" : "opacity-0"} transition-all duration-1000`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Column */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="relative">
                    <div className="relative aspect-[1/1.2] rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Floating Exp Badge */}
                    <div className="absolute -top-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl z-20 border border-border">
                      <div className="text-3xl font-extrabold text-primary">
                        {member.experience.includes("+") ? member.experience.split("+")[0] + "+" : member.experience.split(" ")[0]}
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        {member.experience.includes("Years") ? "Years Experience" : "Experience"}
                      </div>
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -bottom-10 ${index % 2 === 1 ? "-left-10" : "-right-10"} w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0`}></div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="inline-flex items-center px-4 py-1.5 bg-primary/5 rounded-full text-primary text-xs font-bold uppercase tracking-widest border border-primary/10">
                        {index === 0 ? <Star className="w-4 h-4 mr-2" /> : member.trainerType === "Technical" ? <Code className="w-4 h-4 mr-2" /> : member.role.includes("Aptitude") ? <Brain className="w-4 h-4 mr-2" /> : <Crown className="w-4 h-4 mr-2" />}
                        {member.role}
                      </div>
                      {member.trainerType && (
                        <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${
                          member.trainerType === "Technical" 
                            ? "bg-blue-50 text-blue-700 border-blue-200" 
                            : "bg-purple-50 text-purple-700 border-purple-200"
                        }`}>
                          {member.trainerType === "Technical" ? <Code className="w-3 h-3 mr-2" /> : <Brain className="w-3 h-3 mr-2" />}
                          {member.trainerType}
                        </div>
                      )}
                      {member.role.includes("Aptitude") && !member.trainerType && (
                        <div className="inline-flex items-center px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-200">
                          <Brain className="w-3 h-3 mr-2" />
                          Aptitude
                        </div>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                      {member.name}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-2xl flex items-center space-x-4 border border-border/50">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-foreground">{member.studentsTrained.split(" ")[0]}</div>
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Students Impacted</div>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-2xl flex items-center space-x-4 border border-border/50">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Briefcase className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-foreground">Elite Partner</div>
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Teaching Excellence</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    {member.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {member.responsibilities && (
                    <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-border">
                      {member.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm font-medium text-foreground/80">{r}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-6">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-5 py-2.5 bg-white border border-border rounded-xl text-sm font-bold text-muted-foreground hover:border-primary/30 hover:text-primary transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < allTeamMembers.length - 1 && (
                <div className="mt-24 pt-24 border-t border-border/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


