import { ArrowLeft, Target, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import aboutUsImg from "@/assets/Dageni_group.png";
import projectManager from "@/assets/Project_manager.jpg";
import deputyProjectManager from "@/assets/Deputy_project_manager.jpg";
import headOfBanquet from "@/assets/Head_of_banquet.jpg";
import headOfBranding from "@/assets/Head_of_branding.jpg";
import headOfBusinessRelations from "@/assets/Head_of_buisness_relations.jpg";
import headOfCommunicationAndHR from "@/assets/Head_of_communication_and_HR.jpg";
import headOfEvents from "@/assets/Head_of_events.jpg";
import headOfLogistics from "@/assets/Head_of_logistics.jpg";
import headOfLounge from "@/assets/Head_of_Lounge.jpg";
import headOfMarketing from "@/assets/Head_of_marketing.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutUsImg} alt="Dagen I Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                About Us
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate team behind Dagen I
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <Link to="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
              
              {/* Team Members */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-12">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Meet Our Team
                  </span>
                </h2>
                
                {/* Top Level - Project Manager and Deputy Project Manager */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                  <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 border border-primary/20">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={projectManager} alt="Project Manager" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">Project Manager</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Robin Akela</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:projektledare@dageni.se" className="text-primary hover:underline">
                        projektledare@dageni.se
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 border border-primary/20">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={deputyProjectManager} alt="Deputy Project Manager" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">Deputy Project Manager</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Edwin Taeby</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:vice@dageni.se" className="text-primary hover:underline">
                        vice@dageni.se
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second Row - 3 Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfBanquet} alt="Head of Banquet" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Banquet</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Per Ihse</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:bankett@dageni.se" className="text-primary hover:underline">
                        bankett@dageni.se
                      </a>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfBusinessRelations} alt="Head of Business Relations" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Business Relations</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Filip Pring & Nasib Abbassoy</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:naringsliv@dageni.se" className="text-primary hover:underline">
                        naringsliv@dageni.se
                      </a>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfMarketing} alt="Head of Marketing" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Marketing</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Siri Kämpe</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:marknadsforing@dageni.se" className="text-primary hover:underline">
                        marknadsforing@dageni.se
                      </a>
                    </div>
                  </div>
                </div>

                {/* Third Row - 3 Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfCommunicationAndHR} alt="Head of Communication and HR" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Communication and HR</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Steve Henin</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:hr@iare.nu" className="text-primary hover:underline">
                        hr@iare.nu
                      </a>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfEvents} alt="Head of Events" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Events</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Vilhelm Janson & Alice Wänblad</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:event@dageni.se" className="text-primary hover:underline">
                        event@dageni.se
                      </a>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfLogistics} alt="Head of Logistics" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Logistics</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Elsa Berg & David Carlsson</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:logistik@dageni.se" className="text-primary hover:underline">
                        logistik@dageni.se
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - 2 Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfLounge} alt="Head of Lounge" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Lounge</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Linnea Neiderud</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:lounge@dageni.se" className="text-primary hover:underline">
                        lounge@dageni.se
                      </a>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                      <img src={headOfBranding} alt="Head of Branding" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">Head of Branding</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">Eddie Xia</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:branding@dageni.se" className="text-primary hover:underline">
                        branding@dageni.se
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Dagen I is dedicated to bridging the gap between talented engineering students and innovative companies. 
                    Our mission is to create meaningful connections that shape the future of technology and engineering in Sweden.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center py-8">
                <Link to="/">
                  <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all">
                    Return to Homepage
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;