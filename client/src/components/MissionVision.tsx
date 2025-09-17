import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const { elementRef: mvRef, isVisible: mvVisible } = useScrollAnimation();

  const missionPoints = [
    "To partner with educational institutions in delivering world-class training that develops complete professional personalities",
    "To enhance students' analytical capabilities while promoting ethical values, supporting institutional goals",
    "To create optimal learning environments that strengthen institutional placement outcomes",
  ];

  const visionPoints = [
    "To be the preferred training partner for educational institutions across India, igniting student potential through collaborative excellence.",
    "To empower institutions with comprehensive training solutions that enhance their reputation and placement success rates",
  ];

  return (
    <section
      id="mission-vision"
      className="py-20 bg-muted relative"
      ref={mvRef}
      data-testid="section-mission-vision"
    >
      {/* Full-section Background Image */}
      <img
        src="/assets/Training.jpg"
        alt="Mission & Vision background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="section-divider pt-8"></div>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 ${
              mvVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h2
              className="text-3xl text-primary md:text-4xl lg:text-5xl font-bold mb-6 t"
              data-testid="text-mission-vision-title"
            >
              Mission & Vision
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-mission-vision-subtitle"
            >
              Our commitment to educational institutions and institutional
              partnership excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              className={`${mvVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div
                className="bg-card rounded-2xl p-8 shadow-lg card-hover h-full"
                data-testid="card-mission"
              >
                <div className="flex items-center mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-4">
                  </div>  */}
                  <Target className="w-5 h-5 text-accent mr-4" />

                  <h3
                    className="text-2xl font-bold text-card-foreground"
                    data-testid="text-mission-title"
                  >
                    Partnership Mission
                  </h3>
                </div>
                <ul className="space-y-4" data-testid="list-mission">
                  {missionPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      data-testid={`mission-point-${index + 1}`}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-card-foreground leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`${
                mvVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <div
                className="bg-card rounded-2xl p-8 shadow-lg card-hover h-full"
                data-testid="card-vision"
              >
                <div className="flex items-center mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mr-4">
                   </div> */}
                  <Eye className="w-5 h-5 text-secondary mr-4" />

                  <h3
                    className="text-2xl font-bold text-card-foreground"
                    data-testid="text-vision-title"
                  >
                    Partnership Vision
                  </h3>
                </div>
                <ul className="space-y-4" data-testid="list-vision">
                  {visionPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      data-testid={`vision-point-${index + 1}`}
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-card-foreground leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Vision Image */}
                <div className="mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                    alt="Graduation ceremony with students celebrating academic success"
                    className="rounded-xl w-full h-32 object-cover"
                    data-testid="img-vision-graduation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
