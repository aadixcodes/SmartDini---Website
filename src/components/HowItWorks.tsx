import { QrCode, ShoppingCart, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Scan QR Code",
    description: "Customers scan the QR code on their table to access the digital menu instantly."
  },
  {
    icon: ShoppingCart,
    title: "Browse & Order",
    description: "Browse the interactive menu, customize orders, and add items to cart with ease."
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Complete payment through secure integrated payment gateways with multiple options."
  },
  {
    icon: Truck,
    title: "Order Ready",
    description: "Receive real-time updates and get notified when the order is ready for pickup or delivery."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How <span className="text-brand-red font-bold">SMARTDINI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, fast, and intuitive. Get your QR ordering system up and running in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 -z-10 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">Join hundreds of cafes already using SMARTDINI</p>
            <button className="btn-success">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;