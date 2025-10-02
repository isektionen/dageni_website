import { Calendar, Facebook, Instagram, Linkedin, Menu, X, Building2, GraduationCap, Briefcase, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/dageni-icon-32.png" 
              alt="Dagen I" 
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DAGEN I
            </h1>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="https://www.google.com/maps/place/Nymble+-+Tekniska+H%C3%B6gskolans+K%C3%A5rhus/@59.3472957,18.0681431,17z/data=!3m2!4b1!5s0x465f9d6a8600d17b:0x3fc61d17004266c0!4m6!3m5!1s0x465f9d6a8e520c07:0x57fd5073e2923781!8m2!3d59.347293!4d18.070718!16s%2Fg%2F11dyjk6_q?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                Location
              </Button>
            </a>
            
            <Link to="/for-students">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                For Students
              </Button>
            </Link>
            
            <Link to="/for-exhibitors">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                For Exhibitors
              </Button>
            </Link>
            
            <Link to="/our-exhibitors">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                Our Exhibitors
              </Button>
            </Link>
            
            <Link to="/about-us">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                About Us
              </Button>
            </Link>
            
            <Link to="/events">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                Events
              </Button>
            </Link>
            
            <Link to="/our-sponsors">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                Our Sponsors
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>

            {/* Social media icons */}
            <a href="https://www.facebook.com/events/581999524562667/?acontext=%7B%22event_action_history%22%3A%5B%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D%5D%2C%22ref_notif_type%22%3Anull%7D" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/dagenikth/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/dagen-i/?originalSubdomain=se" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6 py-4 space-y-2">
              <a 
                href="https://www.google.com/maps/place/Nymble+-+Tekniska+H%C3%B6gskolans+K%C3%A5rhus/@59.3472957,18.0681431,17z/data=!3m2!4b1!5s0x465f9d6a8600d17b:0x3fc61d17004266c0!4m6!3m5!1s0x465f9d6a8e520c07:0x57fd5073e2923781!8m2!3d59.347293!4d18.070718!16s%2Fg%2F11dyjk6_q?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  Location
                </Button>
              </a>
              
              <Link to="/for-students" onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  For Students
                </Button>
              </Link>
              
              <Link to="/for-exhibitors" onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  For Exhibitors
                </Button>
              </Link>
              
              <Link to="/our-exhibitors" onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  Our Exhibitors
                </Button>
              </Link>
              
              <Link to="/about-us" onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  About Us
                </Button>
              </Link>
              
              <Link to="/events" onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  Events
                </Button>
              </Link>
              
              <Link to="/our-sponsors" onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-foreground"
                >
                  Our Sponsors
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
