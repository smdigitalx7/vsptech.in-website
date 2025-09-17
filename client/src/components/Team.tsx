import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Star,
  Crown,
  Calendar,
  Users,
  Briefcase,
  ClipboardList,
  Check,
} from "lucide-react";

export default function Team() {
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: "Mr. Satish Babu K",
      role: "Star Rated Technical Trainer",
      experience: "17+ Years Experience",
      studentsTrained: "2,00,000+ Students Trained",
      image: "/assets/Satish_VSP.jpg",
      description: [
        "With 17+ years of experience partnering with educational institutions, he has delivered technical training programs across multiple colleges in various states. His institutional partnerships have resulted in successfully training around 2,00,000+ students, significantly enhancing placement rates for partner colleges and strengthening their industry reputation.",
        "As a Star-rated technical trainer, he brings proven expertise in designing institutional training programs that align with campus recruitment requirements. His specialized approach ensures students from partner institutions are well-prepared for competitive assessments and technical interviews, directly contributing to improved placement statistics that college administrators value.",
        "His deep expertise in C, C++, Java, Python, Data Structures, Algorithms, and DBMS, combined with innovative teaching methodologies developed specifically for institutional partnerships, has helped partner colleges achieve consistently high placement success rates. Educational administrators trust his systematic approach to transforming students into industry-ready professionals.",
      ],
      skills: ["C/C++", "Java", "Python", "Data Structures", "DBMS"],
      skillColors: [
        "bg-primary text-primary-foreground",
        "bg-secondary text-secondary-foreground",
        "bg-accent text-accent-foreground",
        "bg-primary text-primary-foreground",
        "bg-secondary text-secondary-foreground",
      ],
      bgColor: "primary",
      accentColor: "primary",
    },
    {
      name: "Mr. Balaji J",
      role: "Co-ordinator",
      experience: "8 Years Experience",
      studentsTrained: "Institutional Partnership Coordination",
      image: "/assets/Balaji.jpg",
      description: [
        "8+ Years of specialized experience coordinating institutional training partnerships and managing customized LMS platforms for educational institutions. His expertise ensures seamless integration of VSP training programs with college academic schedules and administrative requirements.",
      ],
      responsibilities: [
        "Coordinating comprehensive training programs tailored to institutional requirements",
        "Managing customized LMS platforms for partner educational institutions",
        "Ensuring seamless training delivery that aligns with college academic calendars",
        "Facilitating communication between VSP Technologies and college administrators",
        "Providing regular progress reports and placement outcome analytics to institutional partners",
      ],
      skills: ["Training Coordination", "LMS Management", "Project Management"],
      skillColors: [
        "bg-secondary text-secondary-foreground",
        "bg-accent text-accent-foreground",
        "bg-primary text-primary-foreground",
      ],
      bgColor: "secondary",
      accentColor: "secondary",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-background relative"
      ref={teamRef}
      data-testid="section-team"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="team-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#team-grid)"
            className="text-foreground"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 ${
              teamVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold mb-6 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Your Trusted Training Partners
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
              data-testid="text-team-title"
            >
              Institutional <span className="text-primary">Training</span>{" "}
              <span className="text-secondary">Specialists</span>
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              data-testid="text-team-subtitle"
            >
              Experienced professionals dedicated to enhancing placement success
              rates for educational institutions across India
            </p>
          </div>

          {/* Team Members - Magazine Style Layout */}
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${
                  teamVisible
                    ? index === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                    : "opacity-0"
                }`}
                data-testid={`team-member-${index + 1}`}
              >
                <div
                  className={`grid lg:grid-cols-5 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Professional Profile Image */}
                  <div
                    className={`lg:col-span-2 ${
                      index % 2 === 0 ? "" : "lg:order-last"
                    } relative`}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg border border-border">
                      <img
                        src={member.image}
                        alt={`${member.name} - Professional trainer in modern educational setting`}
                        className="w-full h-[400px] md:h-[550px] object-cover"
                        data-testid={`img-team-member-${index + 1}`}
                      />

                      {/* Professional Badge */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`${
                            member.bgColor === "primary"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          } p-3 rounded-lg shadow-lg`}
                        >
                          <div className="text-lg font-bold">
                            {member.experience.split(" ")[0]}
                          </div>
                          <div className="text-xs opacity-90">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Header */}
                    <div className="space-x-4 flex">
                      <h3
                        className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
                        data-testid={`text-team-name-${index + 1}`}
                      >
                        {member.name}
                      </h3>

                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full font-medium shadow-sm border ${
                          member.bgColor === "primary"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-secondary/10 text-secondary border-secondary/20"
                        }`}
                      >
                        {index === 0 ? (
                          <Star className="w-4 h-4 mr-2" />
                        ) : (
                          <Crown className="w-4 h-4 mr-2" />
                        )}
                        <span data-testid={`text-team-role-${index + 1}`}>
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div
                              className="text-foreground font-semibold text-sm"
                              data-testid={`text-team-experience-${index + 1}`}
                            >
                              {member.experience}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              Teaching Excellence
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                            {index === 0 ? (
                              <Users className="w-5 h-5 text-secondary-foreground" />
                            ) : (
                              <Briefcase className="w-5 h-5 text-secondary-foreground" />
                            )}
                          </div>
                          <div>
                            <div
                              className="text-foreground font-semibold text-xs leading-tight"
                              data-testid={`text-team-achievement-${index + 1}`}
                            >
                              {member.studentsTrained}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              Impact & Results
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      {member.description.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-base text-muted-foreground leading-relaxed"
                          data-testid={`text-team-description-${index + 1}-${
                            pIndex + 1
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    {member.responsibilities && (
                      <div>
                        <h4 className="text-foreground font-bold mb-4 flex items-center text-base">
                          Key Responsibilities
                        </h4>
                        <ul
                          className="space-y-3"
                          data-testid={`list-team-responsibilities-${
                            index + 1
                          }`}
                        >
                          {member.responsibilities.map(
                            (responsibility, rIndex) => (
                              <li
                                key={rIndex}
                                className="flex items-start text-muted-foreground"
                              >
                                <div className="w-5 h-5 bg-accent rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                  <Check className="w-3 h-3 text-accent-foreground" />
                                </div>
                                <span className="leading-relaxed text-sm">
                                  {responsibility}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Skills */}
                    <div
                      className="flex flex-wrap gap-3"
                      data-testid={`skills-team-member-${index + 1}`}
                    >
                      {member.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300 ${member.skillColors[sIndex]}`}
                          data-testid={`skill-${index + 1}-${sIndex + 1}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Professional Divider */}
                {index < teamMembers.length - 1 && (
                  <div className="flex items-center justify-center mt-12">
                    <div className="w-24 h-px bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Professional Team Stats */}
          <div
            className={`mt-16 ${teamVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <div
              className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-lg"
              data-testid="team-stats-card"
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground"
                data-testid="text-team-stats-title"
              >
                Proven <span className="text-primary">Partnership</span>{" "}
                <span className="text-secondary">Success</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  className="text-center"
                  data-testid="stat-combined-experience"
                >
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-foreground">
                    25+
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Years Combined Experience
                  </div>
                </div>
                <div
                  className="text-center"
                  data-testid="stat-students-impacted"
                >
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-foreground">
                    200K+
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Students Trained via College Partnerships
                  </div>
                </div>
                <div className="text-center" data-testid="stat-dedication">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-foreground">
                    100%
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Institutional Partner Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
