import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimations from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

const CompanyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Astex - SmartDini</title>
        <meta name="description" content="Learn about Astex, the company behind SmartDini - revolutionizing cafe operations with smart QR ordering technology." />
      </Helmet>
      <ScrollAnimations />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px_300px] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1 
                variants={textVariant(0.1)}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-1 mt-24 text-black leading-tight"
              >
                About <span className="text-primary">Astex</span>
              </motion.h1>
              <motion.p 
                variants={textVariant(0.2)}
                className="text-md md:text-lg text-white/90 mb-10 max-w-2xl mx-auto"
              >
                The innovative team behind SmartDini, revolutionizing the cafe industry
              </motion.p>
              <motion.div variants={textVariant(0.3)}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-sm mt-4 px-4 py-1 bg-primary hover:bg-primary"
                >
                  Visit our website

                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-28 bg-white mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <span className="text-sm font-medium tracking-wider text-primary uppercase">Our Journey</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Building Solutions for <span className="text-primary">Modern Cafes</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2018, Astex began with a simple mission: to solve the everyday challenges faced by cafe owners and enhance the customer experience through innovative technology.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  What started as a small team of passionate tech enthusiasts and former cafe owners has grown into a global company serving over 500 cafes worldwide with our flagship product, SmartDini.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our journey has been driven by continuous innovation, customer feedback, and a deep understanding of the hospitality industry's unique challenges.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                    <img 
                      src="/team-working.jpg" 
                      alt="Astex team working" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg w-1/2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-foreground">500+ Happy Clients</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Cafes worldwide trust Astex solutions to streamline their operations and enhance customer experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 md:py-28 mt-24 bg-white mb-8"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-sm font-medium tracking-wider text-primary uppercase">Our Values</span>
                <div className="w-8 h-0.5 bg-primary"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                What Guides <span className="text-primary">Our Work</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At Astex, we're guided by a set of core principles that shape everything we do.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <motion.div
                variants={fadeIn('right', 'spring', 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-muted"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Innovation First</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries to create solutions that transform the cafe industry, making operations smoother and customer experiences better.
                </p>
              </motion.div>
              
              {/* Value 2 */}
              <motion.div
                variants={fadeIn('right', 'spring', 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-muted"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <circle cx="12" cy="10" r="2"></circle>
                    <line x1="8" x2="8" y1="2" y2="4"></line>
                    <line x1="16" x2="16" y1="2" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Customer-Centric</h3>
                <p className="text-muted-foreground">
                  Every feature we develop starts with understanding our customers' needs. We listen, learn, and build solutions that truly matter.
                </p>
              </motion.div>
              
              {/* Value 3 */}
              <motion.div
                variants={fadeIn('right', 'spring', 0.3, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-muted"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe powerful technology should be easy to use. Our products are designed to be intuitive, accessible, and straightforward.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CompanyPage;
