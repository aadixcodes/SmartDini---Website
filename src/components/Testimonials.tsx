import { Star, Quote } from "lucide-react";
import happyCustomers from "@/assets/happy-customers.jpg";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Owner, Café Luna",
    location: "Barcelona, Spain",
    content: "SMARTDINI revolutionized our customer experience. Orders are 40% faster and accuracy has improved dramatically. Our customers love the contactless experience!",
    rating: 5,
    stats: "40% faster orders"
  },
  {
    name: "James Thompson",
    role: "Manager, The Coffee Hub",
    location: "London, UK", 
    content: "The AI health analysis feature is incredible. Our health-conscious customers appreciate the personalized recommendations.",
    rating: 5,
    stats: "35% increase in healthy sales"
  },
  {
    name: "Sarah Kim",
    role: "Owner, Urban Bean",
    location: "Seoul, Korea",
    content: "Best investment we've made! The multilingual support helped us serve international customers better, and staff efficiency has improved significantly.",
    rating: 5,
    stats: "50% efficiency gain"
  }
];

const caseStudy = {
  title: "Case Study: Downtown Bistro",
  subtitle: "From Traditional to Digital in 30 Days",
  results: [
    { metric: "Order Accuracy", before: "85%", after: "98%", improvement: "+13%" },
    { metric: "Average Wait Time", before: "12 min", after: "7 min", improvement: "-42%" },
    { metric: "Customer Satisfaction", before: "4.2/5", after: "4.8/5", improvement: "+14%" },
    { metric: "Staff Efficiency", before: "68%", after: "89%", improvement: "+31%" }
  ]
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by <span className="text-brand-red font-bold">Cafe Owners</span> Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how SMARTDINI has transformed cafes across the globe with measurable results and happy customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Stats highlight */}
              <div className="bg-white rounded-lg p-3 mb-4 border border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">{testimonial.stats}</div>
                  <div className="text-xs text-muted-foreground">Key Result</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border animate-on-scroll shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Case study content */}
            <div>
              <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
              <p className="text-muted-foreground mb-8">{caseStudy.subtitle}</p>

              {/* Results table */}
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-border">
                    <div className="font-medium">{result.metric}</div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-muted-foreground">{result.before}</div>
                      <div className="text-sm text-muted-foreground">→</div>
                      <div className="font-semibold">{result.after}</div>
                      <div className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                        {result.improvement}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center md:justify-start">

                <button className="btn-success py-2 px-4 text-md">
                  Download Full Case Study
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
  <img
    src={happyCustomers}
    alt="Happy cafe customers and staff"
    className="rounded-xl shadow-lg w-full h-auto md:h-[400px] object-contain md:object-cover"
  />
  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
  <div className="absolute bottom-6 left-6 text-white">
    <div className="text-lg font-semibold">Real Results</div>
    <div className="text-sm opacity-90">From Real Customers</div>
  </div>
</div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center animate-on-scroll">
          <div>
            <div className="text-3xl font-bold text-secondary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Cafes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">1M+</div>
            <div className="text-sm text-muted-foreground">Orders Processed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">30+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;