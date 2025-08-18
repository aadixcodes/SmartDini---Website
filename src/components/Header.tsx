import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body overflow
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  // Close menu when clicking on nav links
  const handleNavClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white shadow-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always visible */}
          <div className="flex-shrink-0 z-50">
            <h1 className="text-2xl font-bold text-brand-red">SMARTDINI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#company"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Company
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Demo
            </Button>
          </div>

          {/* Mobile menu button - Always visible */}
          <div className="md:hidden z-50">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <div className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] mt-16 px-4 space-y-6">
            <a
              href="#home"
              className="text-2xl text-foreground hover:text-primary font-medium transition-colors py-3"
              onClick={handleNavClick}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-2xl text-foreground hover:text-primary font-medium transition-colors py-3"
              onClick={handleNavClick}
            >
              Features
            </a>
            <a
              href="#company"
              className="text-2xl text-foreground hover:text-primary font-medium transition-colors py-3"
              onClick={handleNavClick}
            >
              Company
            </a>
            <a
              href="#pricing"
              className="text-2xl text-foreground hover:text-primary font-medium transition-colors py-3"
              onClick={handleNavClick}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-2xl text-foreground hover:text-primary font-medium transition-colors py-3"
              onClick={handleNavClick}
            >
              Contact
            </a>
            <div className="pt-4 w-full max-w-xs">
              <Button 
                className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-4"
                onClick={handleNavClick}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;