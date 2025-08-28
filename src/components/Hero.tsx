import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionary{" "}
                <span className="text-brand-red font-bold">QR Ordering</span>{" "}
                for Modern Cafes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transform your cafe with SMARTDINI's contactless ordering system. 
                Reduce wait times, increase efficiency, and deliver exceptional customer experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 py-4">
              <div className="text-center min-w-[100px] md:min-w-0">
                <div className="text-3xl font-bold text-secondary">30%</div>
                <div className="text-sm text-muted-foreground">Faster Orders</div>
              </div>
              <div className="text-center min-w-[100px] md:min-w-0">
                <div className="text-3xl font-bold text-secondary">50%</div>
                <div className="text-sm text-muted-foreground">Less Wait Time</div>
              </div>
              <div className="text-center min-w-[100px] md:min-w-0">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero group w-full sm:w-auto px-6 py-4">
                Order Your Product
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="text-sm text-muted-foreground">Trusted by 500+ cafes</div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary border-2 border-white"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-medium">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroCafe}
                alt="Modern cafe with QR ordering system"
                className="rounded-2xl shadow-2xl w-full h-auto md:h-[500px] object-cover"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="text-2xl">📱</div>
                <div className="text-xs font-medium text-center mt-1">QR Scan</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="text-2xl">⚡</div>
                <div className="text-xs font-medium text-center mt-1">Instant</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;