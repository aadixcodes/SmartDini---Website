import { 
  Zap, 
  Users, 
  TrendingUp, 
  Globe, 
  ContactRound, 
  ShieldCheck 
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Ordering",
    description: "QR scan reduces wait time by 30% and eliminates order errors",
    stat: "30% faster",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Staff Efficiency",
    description: "Reduce manual order taking and focus staff on food preparation and service",
    stat: "50% less workload",
    color: "bg-secondary"
  },
  {
    icon: TrendingUp,
    title: "Real-time Tracking",
    description: "Monitor orders, inventory, and customer preferences with live analytics",
    stat: "Live insights",
    color: "bg-primary"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Serve international customers with automatic language detection and translation",
    stat: "15+ languages",
    color: "bg-secondary"
  },
  {
    icon: ContactRound,
    title: "Contactless Experience",
    description: "Safe, hygienic ordering process that customers prefer post-pandemic",
    stat: "100% contactless",
    color: "bg-primary"
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Enterprise-grade security with PCI compliance and fraud protection",
    stat: "Bank-level security",
    color: "bg-secondary"
  }
];

const Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transform Your <span className="text-brand-red font-bold">Cafe Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SMARTDINI delivers measurable improvements to your operations, 
            customer satisfaction, and bottom line.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group feature-card animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>

                {/* Stat badge */}
                <div className="absolute -top-2 -right-2 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {benefit.stat}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border animate-on-scroll shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Real Results from Real Cafes</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                See how SMARTDINI has transformed operations for cafes like yours across the globe.
              </p>
              
              {/* Mini stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Active Cafes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">1M+</div>
                  <div className="text-sm text-muted-foreground">Orders Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <div className="mb-4">
                <div className="text-4xl mb-2">📈</div>
                <h4 className="font-semibold text-lg">Join the Success</h4>
              </div>
              <button className="btn-hero py-2 px-4 text-md hover:scale-100">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-12 text-center animate-on-scroll">
          <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
            "SMARTDINI transformed our cafe operations. We've seen a 40% increase in order accuracy 
            and our customers love the seamless experience. Best investment we've made!"
          </blockquote>
          <div className="mt-4">
            <div className="font-semibold">Sarah Chen</div>
            <div className="text-sm text-muted-foreground">Owner, Urban Bean Cafe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;