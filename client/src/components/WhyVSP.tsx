import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Presentation, FileText, Laptop, Star, ArrowRight, ArrowDown } from 'lucide-react';

export default function WhyVSP() {
  const { elementRef: whyRef, isVisible: whyVisible } = useScrollAnimation();

  const features = [
    {
      icon: Presentation,
      title: "Interactive Teaching",
      description: "Our interactive teaching methodologies ensure high engagement and better learning outcomes for your students.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Quality Materials", 
      description: "Comprehensive training materials designed by experienced faculty specifically for institutional partnership programs.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Laptop,
      title: "Online Testing",
      description: "Systematic online assessments that prepare your students for modern recruitment processes and boost placement success.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      title: "Comprehensive Sessions",
      description: "Intensive review sessions ensure your students achieve optimal performance in campus recruitment processes.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const processSteps = [
    { step: 1, title: "Partnership Setup", description: "Institutional needs assessment", color: "bg-primary" },
    { step: 2, title: "Customized Training", description: "Tailored curriculum delivery", color: "bg-secondary" },
    { step: 3, title: "Progress Monitoring", description: "Real-time performance tracking", color: "bg-accent" },
    { step: 4, title: "Placement Success", description: "Enhanced institutional outcomes", color: "bg-gradient-to-r from-green-500 to-blue-500" }
  ];

  return (
    <section 
      id="why-vsp" 
      className="py-20 bg-background relative"
      ref={whyRef}
      data-testid="section-why-vsp"
    >
      <div className="section-divider pt-8"></div>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient" data-testid="text-why-vsp-title">
              Why Partner with VSP?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-vsp-subtitle">
              Discover what makes VSP Technologies the preferred training partner for educational institutions nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`card-hover ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
                data-testid={`feature-card-${index + 1}`}
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`feature-title-${index + 1}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`feature-description-${index + 1}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className={`mt-20 ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground" data-testid="text-training-process-title">
              Our Institutional Partnership Process
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8" data-testid="process-steps-container">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center" data-testid={`process-step-${step.step}`}>
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {step.step}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold" data-testid={`process-step-title-${step.step}`}>{step.title}</div>
                      <div className="text-muted-foreground text-sm" data-testid={`process-step-description-${step.step}`}>
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <>
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block mt-4" />
                      <ArrowDown className="w-4 h-4 text-muted-foreground md:hidden mt-4" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
