import { Calendar, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
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
            {/* For Students with hover dropdown */}
            <div className="relative group">
              <Link to="/for-students">
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  For Students
                </Button>
              </Link>
              {/* Dropdown content that appears on hover */}
              <div className="absolute left-0 top-full mt-1 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <Link 
                  to="/our-exhibitors" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:pt-3 last:pb-3"
                >
                  Our exhibitors
                </Link>
                <Link 
                  to="/for-students#events" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Events
                </Link>
                <Link 
                  to="/for-students#our-sponsors" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Our sponsors
                </Link>
                <Link 
                  to="/for-students#contact-meetings" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contact Meetings
                </Link>
                <Link 
                  to="/for-students#become-a-host" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:pt-3 last:pb-3"
                >
                  Become a host!
                </Link>
              </div>
            </div>

            {/* For Companies with hover dropdown */}
            <div className="relative group">
              <Link to="/for-companies">
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  For Companies
                </Button>
              </Link>
              {/* Dropdown content that appears on hover */}
              <div className="absolute left-0 top-full mt-1 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <Link 
                  to="/for-companies#packages" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:pt-3 last:pb-3"
                >
                  Exhibition Packages
                </Link>
                <Link 
                  to="/for-companies#become-a-partner" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:pt-3 last:pb-3"
                >
                  Become a partner
                </Link>
              </div>
            </div>

            {/* About us */}
            <Link to="/about-us">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground"
              >
                About us
              </Button>
            </Link>

            {/* Location */}
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
              {/* For Students group */}
              <Link to="/for-students" onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full justify-start font-semibold text-primary">For Students</Button>
              </Link>
              <div className="ml-4 space-y-1">
                <Link to="/our-exhibitors" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Our exhibitors</Button>
                </Link>
                <Link to="/for-students#events" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Events</Button>
                </Link>
                <Link to="/for-students#our-sponsors" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Our sponsors</Button>
                </Link>
                <Link to="/for-students#contact-meetings" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Contact Meetings</Button>
                </Link>
                <Link to="/for-students#become-a-host" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Become a host!</Button>
                </Link>
              </div>

              {/* Companies group */}
              <Link to="/for-companies" onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full justify-start font-semibold text-primary mt-3">For Companies</Button>
              </Link>
              <div className="ml-4 space-y-1">
                <Link to="/for-companies#packages" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Exhibition Packages</Button>
                </Link>
                <Link to="/for-companies#become-a-partner" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start text-sm">Become a partner</Button>
                </Link>
              </div>

              {/* About & Location */}
              <div className="mt-4 space-y-1">
                <Link to="/about-us" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start font-semibold">About us</Button>
                </Link>
                <a 
                  href="https://www.google.com/maps/place/Nymble+-+Tekniska+H%C3%B6gskolans+K%C3%A5rhus/@59.3472957,18.0681431,17z/data=!3m2!4b1!5s0x465f9d6a8600d17b:0x3fc61d17004266c0!4m6!3m5!1s0x465f9d6a8e520c07:0x57fd5073e2923781!8m2!3d59.347293!4d18.070718!16s%2Fg%2F11dyjk6_q?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  <Button variant="ghost" className="w-full justify-start font-semibold">Location</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
