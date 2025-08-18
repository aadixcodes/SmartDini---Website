import { Check, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Plan",
    price: "$29",
    period: "/month",
    description: "Perfect for small cafes getting started",
    features: [
      "Digital Menu Page",
      "QR Code Generation", 
      "Basic Order Management",
      "Payment Processing",
      "Admin Dashboard",
      "Email Support",
      "Basic Analytics"
    ],
    limitations: [
      "SMARTDINI Watermark",
      "Basic customization only",
      "Standard support"
    ],
    popular: false,
    cta: "Start Basic Plan"
  },
  {
    name: "Premium Plan",
    price: "$79",
    period: "/month",
    description: "Complete solution with your branding",
    features: [
      "Everything in Basic",
      "Custom Branding (No Watermark)",
      "AI Health Analysis",
      "Pre-order System",
      "Multi-language Menus",
      "Advanced Analytics",
      "Customer Insights",
      "Priority Support",
      "Custom Integrations",
      "Staff Training"
    ],
    limitations: [],
    popular: true,
    cta: "Go Premium"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, <span className="text-brand-red font-bold">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start with basics or go premium for complete customization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 animate-on-scroll ${
                plan.popular
                  ? "border-primary bg-white shadow-2xl scale-105"
                  : "border-border bg-white shadow-lg hover:shadow-xl"
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <Crown className="h-4 w-4" />
                    <span className="font-semibold text-sm">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  Included Features
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <h5 className="font-medium text-muted-foreground mb-2">Limitations:</h5>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mr-3"></div>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 text-lg font-semibold ${
                  plan.popular
                    ? "btn-hero"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h4 className="font-semibold mb-2">Quick Setup</h4>
            <p className="text-sm text-muted-foreground">Get started in under 24 hours with our easy onboarding</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💝</span>
            </div>
            <h4 className="font-semibold mb-2">Free Migration</h4>
            <p className="text-sm text-muted-foreground">We'll help you migrate from your existing system for free</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h4 className="font-semibold mb-2">No Lock-in</h4>
            <p className="text-sm text-muted-foreground">Cancel anytime with 30-day notice, keep your data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;