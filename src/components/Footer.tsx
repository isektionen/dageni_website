import { Calendar, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
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
              Dagen I is where students meet their dream employers. Dagen I is also the place 
              where your company has the opportunity to reach out and personally meet top 
              students from Sweden's most popular Master of Science in Engineering program.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-foreground">Follow us:</span>
              <a href="https://www.facebook.com/events/581999524562667/?acontext=%7B%22event_action_history%22%3A%5B%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D%5D%2C%22ref_notif_type%22%3Anull%7D" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.instagram.com/dagenikth/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/dagen-i/?originalSubdomain=se" target="_blank" rel="noopener noreferrer">
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
                href="mailto:naringsliv@dageni.se" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary" />
                <div>
                  <p className="text-sm font-medium">Business Inquiries</p>
                  <p className="text-sm">naringsliv@dageni.se</p>
                </div>
              </a>
              <a 
                href="mailto:projektledare@dageni.se" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary" />
                <div>
                  <p className="text-sm font-medium">Project Management</p>
                  <p className="text-sm">projektledare@dageni.se</p>
                </div>
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-display text-foreground">Visit Us</h3>
            <a 
              href="https://www.google.com/maps/place/Nymble+-+Tekniska+H%C3%B6gskolans+K%C3%A5rhus/@59.3472957,18.0681431,17z/data=!3m2!4b1!5s0x465f9d6a8600d17b:0x3fc61d17004266c0!4m6!3m5!1s0x465f9d6a8e520c07:0x57fd5073e2923781!8m2!3d59.347293!4d18.070718!16s%2Fg%2F11dyjk6_q?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <MapPin className="h-4 w-4 mt-1 group-hover:text-primary" />
              <div>
                <p className="text-sm font-medium">Nymble</p>
                <p className="text-sm">Drottning Kristinas väg 15-19</p>
                <p className="text-sm">Stockholm</p>
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
                © 2026 Dagen I. All rights reserved.
              </p>
              <p className="text-muted-foreground/80 text-xs mt-1">
                Developed by I-chapter's IT-group
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">January 23, 2026</span>
              <span className="text-primary font-medium">Nymble, Stockholm</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};