import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import { Building, Eye, Users, Calendar, Star, ChevronRight, ArrowRight, Lightbulb, MessageCircle, Code, GraduationCap } from 'lucide-react';

export default function About() {
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Lightbulb,
      title: "Aptitude Excellence",
      description: "Sharpen analytical thinking with world-class methodologies",
      color: "primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageCircle,
      title: "Communication Mastery",
      description: "Transform communication skills and personality development",
      color: "secondary", 
      bgColor: "bg-secondary/10"
    },
    {
      icon: Code,
      title: "Technical Training",
      description: "Master cutting-edge technical skills for modern careers",
      color: "accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: GraduationCap,
      title: "Career Development",
      description: "Comprehensive guidance for professional success",
      color: "primary",
      bgColor: "bg-primary/10"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 bg-muted/30 relative"
      ref={aboutRef}
      data-testid="section-about"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 ${aboutVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold mb-6 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Trusted Institutional Partner
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground" data-testid="text-about-title">
              Your Partner in <span className="text-primary">Student</span> <span className="text-secondary">Success</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-subtitle">
              From Visakhapatnam to nationwide partnerships - discover how VSP Technologies became India's preferred campus recruitment training provider for educational institutions
            </p>
          </div>

          {/* Main Content - Clean Professional Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Story Content */}
            <div className="lg:col-span-7">
              <div className={`${aboutVisible ? 'animate-slide-in-left' : 'opacity-0'} space-y-8`}>
                {/* Company Story */}
                <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Our Foundation</h3>
                      <p className="text-muted-foreground">Rooted in Excellence</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-description-1">
                    VSP Technologies, headquartered in Visakhapatnam in India, is one of the fastest growing educational service providers in India. We specialize in "CAMPUS RECRUITMENT TRAINING PARTNERSHIPS" with educational institutions. VSP delivers comprehensive training programs through seminars, workshops and career guidance sessions that have been carefully designed to enhance your institution's placement success rates through comprehensive research by our expert team.
                  </p>
                </div>

                {/* Vision Statement */}
                <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                      <p className="text-muted-foreground">Complete Transformation</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4" data-testid="text-about-description-2">
                    VSP is a training service provider established with a vision to partner with educational institutions in providing complete personality development programs for students, preparing them to excel in campus recruitment processes and secure better career opportunities.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-description-3">
                    Our institutional partnerships focus on Aptitude training, English proficiency, Soft Skills (Communication Skills & Personality Development) and Technical Training - ensuring your students gain the competitive edge needed for successful placements.
                  </p>
                </div>

                {/* Professional Stats Panel */}
                <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center" data-testid="stat-students">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="text-3xl font-bold mb-2">200K+</div>
                      <div className="text-primary-foreground/90 font-medium text-sm">Students Trained via Institutional Partnerships</div>
                    </div>
                    <div className="text-center" data-testid="stat-experience">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="text-3xl font-bold mb-2">17+</div>
                      <div className="text-primary-foreground/90 font-medium text-sm">Years Serving Educational Partners</div>
                    </div>
                    <div className="text-center" data-testid="stat-commitment">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-primary-foreground/90 font-medium text-sm">Partner Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Professional Features */}
            <div className="lg:col-span-5">
              <div className={`${aboutVisible ? 'animate-slide-in-right' : 'opacity-0'} space-y-8`}>
                {/* Professional Image */}
                <div className="relative overflow-hidden rounded-xl shadow-sm border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Students collaborating in modern learning environment" 
                    className="w-full h-64 object-cover"
                    data-testid="img-about-students"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-background/95 p-4 border-t border-border">
                    <p className="text-foreground font-semibold text-sm">🎯 Mission: Excellence in Education</p>
                    <p className="text-muted-foreground text-xs mt-1">Transforming potential into professional success</p>
                  </div>
                </div>

                {/* Training Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-3">
                      <Star className="w-4 h-4 text-accent-foreground" />
                    </div>
                    Our Core Strengths
                  </h3>
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div 
                        key={index}
                        className={`group cursor-pointer transition-all duration-300 ${
                          activeFeature === index 
                            ? 'bg-card shadow-md border-primary/20' 
                            : 'bg-card/50 hover:bg-card'
                        } rounded-xl p-4 border border-border`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            feature.color === 'primary' ? 'bg-primary text-primary-foreground' :
                            feature.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                            'bg-accent text-accent-foreground'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className={`text-muted-foreground text-sm transition-all duration-300 ${
                              activeFeature === index ? 'opacity-100 mt-1' : 'opacity-70'
                            }`}>
                              {feature.description}
                            </p>
                          </div>
                          <div className={`transition-all duration-300 ${
                            activeFeature === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                          }`}>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Professional Call to Action */}
                <div className="bg-secondary/10 rounded-xl p-6 text-center border border-secondary/20">
                  <h4 className="text-lg font-bold mb-2 text-foreground">Ready to Enhance Your Institution's Placement Rate?</h4>
                  <p className="text-muted-foreground mb-4 text-sm">Join leading educational institutions who trust VSP Technologies for campus recruitment training</p>
                  <button 
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 flex items-center mx-auto"
                    data-testid="button-explore-programs"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Partner With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
