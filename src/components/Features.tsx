import { 
  Menu, 
  BarChart3, 
  Users, 
  Brain, 
  Clock, 
  Globe, 
  Shield, 
  Smartphone,
  Receipt,
  Settings
} from "lucide-react";

const basicFeatures = [
  {
    icon: Menu,
    title: "Digital Menu Page",
    description: "Beautiful, responsive menu display with images and descriptions",
    watermark: true
  },
  {
    icon: Smartphone,
    title: "Order & Pay System",
    description: "Seamless ordering and payment processing with multiple gateways",
    watermark: true
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description: "Real-time analytics, order management, and reporting tools",
    watermark: true
  }
];

const customFeatures = [
  {
    icon: Clock,
    title: "Pre-order System",
    description: "Allow customers to place orders in advance for pickup or delivery",
    premium: true
  },
  {
    icon: Brain,
    title: "AI Health Analysis",
    description: "Smart recommendations based on dietary preferences and health goals",
    premium: true
  },
  {
    icon: Globe,
    title: "Multi-language Menu",
    description: "Serve international customers with automatic language detection",
    premium: true
  },
  {
    icon: Users,
    title: "Customer Analytics",
    description: "Deep insights into customer behavior and preferences",
    premium: true
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security with fraud protection",
    premium: true
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description: "Connect with your existing POS and management systems",
    premium: true
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful <span className="text-brand-red font-bold">Features</span> for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic QR ordering to advanced AI-powered recommendations, 
            SMARTDINI grows with your business.
          </p>
        </div>

        {/* Basic Features */}
        <div className="mb-16">
          <div className="text-center mb-8 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-2">Basic Plan Features</h3>
            <p className="text-muted-foreground">Essential tools to get started (includes watermark)</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {basicFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card animate-on-scroll relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {feature.watermark && (
                  <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                    Watermark
                  </div>
                )}
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Features */}
        <div>
          <div className="text-center mb-8 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-muted-foreground">Advanced features with your branding and AI capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card animate-on-scroll relative group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {feature.premium && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Premium
                  </div>
                )}
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose SMARTDINI?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>No installation or hardware required</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Works on any smartphone or tablet</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Real-time analytics and reporting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold mb-2">Ready to upgrade?</h4>
                <p className="text-muted-foreground mb-4">Start with basic features or go premium from day one</p>
                <button className="btn-success">
                  Explore All Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;