import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import { Code, Brain, MessageCircle, Handshake, BarChart3, List, Check, Users, LaptopIcon, Database, Globe, Network, BookOpen, Dumbbell, Rocket, Trophy } from 'lucide-react';

export default function CRTServices() {
  const { elementRef: crtRef, isVisible: crtVisible } = useScrollAnimation();
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const mainServices = [
    { 
      icon: Code, 
      title: "Technical Training Programs", 
      subtitle: "Industry-Ready Curriculum",
      description: "Comprehensive programming training that prepares your students for technical interviews",
      color: "primary",
      bgPattern: "bg-primary/5"
    },
    { 
      icon: Brain, 
      title: "Aptitude & Reasoning Training", 
      subtitle: "Enhanced Problem-Solving",
      description: "Systematic training to improve your students' analytical and logical thinking abilities",
      color: "secondary",
      bgPattern: "bg-secondary/5"
    },
    { 
      icon: MessageCircle, 
      title: "Communication Skills Development", 
      subtitle: "Professional Excellence",
      description: "Personality development programs that enhance your students' professional presentation",
      color: "accent",
      bgPattern: "bg-accent/5"
    },
    { 
      icon: Handshake, 
      title: "Interview Preparation", 
      subtitle: "Placement Success",
      description: "Comprehensive mock interview sessions to boost your institution's placement rates",
      color: "primary",
      bgPattern: "bg-primary/5"
    },
    { 
      icon: BarChart3, 
      title: "LMS & Progress Tracking", 
      subtitle: "Institutional Analytics",
      description: "Real-time monitoring system providing detailed progress reports to your administration",
      color: "secondary",
      bgPattern: "bg-secondary/5"
    }
  ];

  const technicalCurriculum = [
    {
      icon: Code,
      title: "Programming",
      description: "One programming language (Either Java or Python) Depends on college requirement",
      color: "primary"
    },
    {
      icon: LaptopIcon,
      title: "Data Structures",
      description: "Data structures and algorithms",
      color: "secondary"
    },
    {
      icon: Database,
      title: "Database",
      description: "Database management and SQL",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web development stack",
      color: "primary"
    },
    {
      icon: Network,
      title: "Systems",
      description: "Networking and operating systems",
      color: "secondary"
    }
  ];

  const learningPath = [
    { 
      step: 1, 
      title: "Initial Assessment", 
      description: "Evaluate student skill levels and institutional requirements",
      details: "Customized baseline assessment for your students",
      color: "primary",
      icon: BookOpen
    },
    { 
      step: 2, 
      title: "Structured Training", 
      description: "Deliver comprehensive training aligned with academic schedule",
      details: "Flexible delivery schedule that fits your institution's calendar",
      color: "secondary",
      icon: Dumbbell
    },
    { 
      step: 3, 
      title: "Practical Application", 
      description: "Hands-on projects and real-world problem solving",
      details: "Industry-relevant projects that enhance student portfolios",
      color: "accent",
      icon: Rocket
    },
    { 
      step: 4, 
      title: "Final Evaluation", 
      description: "Comprehensive assessment and placement preparation",
      details: "Detailed progress reports provided to institutional administration",
      color: "primary",
      icon: Trophy
    }
  ];

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % mainServices.length);
    }, 3000);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % learningPath.length);
    }, 2500);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <section 
      id="crt-services" 
      className="py-20 bg-background relative"
      ref={crtRef}
      data-testid="section-crt-services"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crt-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${crtVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold mb-6 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Institutional Training Partnership Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground" data-testid="text-crt-title">
              Campus Recruitment Training
              <span className="block text-primary mt-2">
                for Your Institution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-crt-subtitle">
              Partner with VSP Technologies to enhance your institution's placement success rate through our comprehensive CRT programs designed to make your students industry-ready
            </p>
          </div>

          {/* Interactive Service Showcase */}
          <div className={`${crtVisible ? 'animate-fade-in' : 'opacity-0'} mb-24`} style={{animationDelay: '0.2s'}}>
            <div className="grid lg:grid-cols-3 gap-12 items-start" data-testid="main-crt-services">
              {/* Left - Service Navigation */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                    <List className="w-4 h-4 text-primary-foreground" />
                  </div>
                  Core Training Areas
                </h3>
                {mainServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index}
                      className={`group cursor-pointer transition-all duration-300 ${
                        activeService === index 
                          ? 'bg-card shadow-md border-primary/20' 
                          : 'bg-card/50 hover:bg-card'
                      } rounded-xl p-4 border border-border`}
                      onClick={() => setActiveService(index)}
                      data-testid={`main-service-${index + 1}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          service.color === 'primary' ? 'bg-primary text-primary-foreground' :
                          service.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                          'bg-accent text-accent-foreground'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground transition-colors duration-300" data-testid={`main-service-title-${index + 1}`}>
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground text-sm font-medium">{service.subtitle}</p>
                          <p className={`text-muted-foreground text-xs transition-all duration-300 ${
                            activeService === index ? 'opacity-100 mt-1' : 'opacity-70'
                          }`}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right - Active Service Details */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <div className="flex items-center mb-6">
                    {(() => {
                      const IconComponent = mainServices[activeService].icon;
                      return (
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${
                          mainServices[activeService].color === 'primary' ? 'bg-primary text-primary-foreground' :
                          mainServices[activeService].color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                          'bg-accent text-accent-foreground'
                        }`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                      );
                    })()}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{mainServices[activeService].title}</h3>
                      <p className="text-lg text-muted-foreground font-medium">{mainServices[activeService].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">{mainServices[activeService].description}</p>
                  
                  {/* Feature Benefits */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mr-3">
                          <Check className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <h4 className="text-base font-semibold text-foreground">Industry Standards</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">Curriculum aligned with current market requirements</p>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h4 className="text-base font-semibold text-foreground">Expert Mentorship</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">Guidance from experienced professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Curriculum */}
          <div className={`${crtVisible ? 'animate-fade-in' : 'opacity-0'} mb-16`} style={{animationDelay: '0.4s'}}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center" data-testid="text-technical-curriculum-title">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <LaptopIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                Technical Excellence Program
              </h3>
              <p className="text-base text-muted-foreground">Master cutting-edge technologies with hands-on experience</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6" data-testid="technical-curriculum-grid">
              {technicalCurriculum.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="group"
                    data-testid={`technical-item-${index + 1}`}
                  >
                    <div className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                        item.color === 'primary' ? 'bg-primary text-primary-foreground' :
                        item.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                        'bg-accent text-accent-foreground'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 text-center" data-testid={`technical-item-title-${index + 1}`}>
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm text-center leading-relaxed" data-testid={`technical-item-description-${index + 1}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Learning Journey */}
          <div className={`${crtVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="bg-primary rounded-xl p-8 md:p-12 text-primary-foreground">
              <h3 className="text-3xl font-bold text-center mb-4" data-testid="text-learning-path-title">
                Our Training <span className="text-secondary">Methodology</span>
              </h3>
              <p className="text-lg text-center text-primary-foreground/90 mb-8">A proven systematic approach that consistently delivers improved placement outcomes for partner institutions</p>
              
              {/* Learning Path */}
              <div className="grid md:grid-cols-4 gap-6" data-testid="learning-path-container">
                {learningPath.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div 
                      key={index}
                      className={`group cursor-pointer transition-all duration-300 ${
                        activeStep === index ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => setActiveStep(index)}
                      data-testid={`learning-step-${step.step}`}
                    >
                      <div className={`bg-primary-foreground/10 rounded-lg p-6 text-center border border-primary-foreground/20 transition-all duration-300 ${
                        activeStep === index ? 'bg-primary-foreground/20 shadow-lg' : 'hover:bg-primary-foreground/15'
                      }`}>
                        <div className="relative mb-4">
                          <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto ${
                            step.color === 'primary' ? 'bg-primary-foreground text-primary' :
                            step.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                            'bg-accent text-accent-foreground'
                          }`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center text-primary font-bold text-xs">
                            {step.step}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold mb-2" data-testid={`learning-step-title-${step.step}`}>
                          {step.title}
                        </h4>
                        <p className="text-primary-foreground/90 mb-2 text-sm" data-testid={`learning-step-description-${step.step}`}>
                          {step.description}
                        </p>
                        <p className={`text-primary-foreground/80 text-xs transition-all duration-300 ${
                          activeStep === index ? 'opacity-100' : 'opacity-70'
                        }`}>
                          {step.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Success Statistics */}
              <div className="mt-12 text-center">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-primary-foreground/90 text-sm">Placement Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-primary-foreground/90 text-sm">Company Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">₹8.5L</div>
                    <div className="text-primary-foreground/90 text-sm">Average Package</div>
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
