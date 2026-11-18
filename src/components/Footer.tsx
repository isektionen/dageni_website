import { Calendar, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useSiteContent } from "@/lib/content";

export const Footer = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const content = useSiteContent();

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(isLoggedIn ? '/admin/dashboard' : '/admin/login');
  };
  return (
    <footer className="relative py-16 sm:py-20 border-t border-border/50 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DAGEN I
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {content.footer_description}
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-foreground">Follow us:</span>
              <a href={content.facebook_url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href={content.instagram_url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href={content.linkedin_url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-display text-foreground">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${content.email_business}`} 
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary" />
                <div>
                  <p className="text-sm font-medium">Business Inquiries</p>
                  <p className="text-sm">{content.email_business}</p>
                </div>
              </a>
              <a 
                href={`mailto:${content.email_project}`} 
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary" />
                <div>
                  <p className="text-sm font-medium">Project Management</p>
                  <p className="text-sm">{content.email_project}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-display text-foreground">Visit Us</h3>
            <a 
              href={content.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <MapPin className="h-4 w-4 mt-1 group-hover:text-primary" />
              <div>
                <p className="text-sm font-medium">{content.location_name}</p>
                <p className="text-sm">{content.location_address}</p>
                <p className="text-sm">{content.location_city}</p>
                <p className="text-sm text-primary mt-1 group-hover:underline">Direction and Maps</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground text-sm">
                © {content.year} Dagen I. All rights reserved.
              </p>
              <p className="text-muted-foreground/80 text-xs mt-1">
                Developed by <a href="https://k43p5r.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kasper Gundewall</a>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">{content.dateLabel}</span>
              <span className="text-primary font-medium">{content.location_name}, {content.location_city}</span>
              <button 
                onClick={handleAdminClick}
                className="text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors text-xs cursor-pointer"
              >
                •
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};