import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import exhibitorsImg from "@/assets/dagenipic2.jpg";

export default function Companies() {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={exhibitorsImg} alt="Exhibition booth" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                For Companies
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Connect with Sweden's brightest engineering talent
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
              
              {/* Exhibition Packages */}
              <section id="packages" className="scroll-mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-8">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Exhibition Packages
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Standard Package */}
                  <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-2xl p-8 border border-blue-200/30">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4">Standard Package</h3>
                      <p className="text-muted-foreground mb-4">
                        Meet Industrial engineering & management students across all years and showcase what makes your company stand out.
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>A 2x2m Booth</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>One on-site business host</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Opportunity to book one-to-one student meetings</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Two Banquet tickets</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Access to the business lounge</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Four breakfast/lunch vouchers</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Placement on the photo wall</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Marketing on the Dagen I website and inside the company catalogue</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Electricity and Wi-Fi during the fair</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Package */}
                  <div className="bg-gradient-to-br from-gold-500/5 to-yellow-500/10 rounded-2xl p-8 border border-yellow-300/30 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold">PREMIUM</span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-yellow-600 mb-4">Premium Package</h3>
                      <p className="text-muted-foreground mb-4">
                        With the Premium package, your company will get the chance to gain extra exposure and to increase students' awareness of what your company does and offers.
                      </p>
                      <p className="text-muted-foreground mb-4 text-sm font-medium">
                        The premium package includes everything in the Standard Package, but with:
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Event of your choice*</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>A 2x3m Booth</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Two business hosts</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>125% enhanced logo size on the photo wall</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Premium-spot, by preference or priority allocation</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-4 italic">
                        * Location of your choice, subject to availability and approval
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Become a Partner */}
              <section id="become-a-partner" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Become a Partner
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-center">
                    Partner with Dagen I as either an exhibitor or sponsor to connect with Sweden's brightest engineering talent. Whether you want to showcase your company at our exhibition booths or support our mission through sponsorship, we offer flexible partnership packages tailored to your organization's goals and budget.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-center flex flex-col">
                      <h3 className="text-xl font-semibold mb-4">Exhibition Opportunities</h3>
                      <p className="text-muted-foreground mb-4 flex-1">Set up a booth, meet students directly, and showcase your company culture and career opportunities.</p>
                      <ul className="text-sm text-muted-foreground text-left space-y-2">
                        <li>• Direct student interaction</li>
                        <li>• Booth space and networking</li>
                        <li>• Contact meetings</li>
                        <li>• Business host opportunities</li>
                      </ul>
                    </div>
                    <div className="text-center flex flex-col">
                      <h3 className="text-xl font-semibold mb-4">Sponsorship Opportunities</h3>
                      <p className="text-muted-foreground mb-4 flex-1">Support the next generation of engineers while gaining visibility among talented students.</p>
                      <ul className="text-sm text-muted-foreground text-left space-y-2">
                        <li>• Brand visibility and marketing</li>
                        <li>• Website and catalog presence</li>
                        <li>• Event sponsorship options</li>
                        <li>• Community impact</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        1000+
                      </div>
                      <p className="text-sm text-muted-foreground">Students Reached</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold font-display bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                        50+
                      </div>
                      <p className="text-sm text-muted-foreground">Company Partners</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold font-display bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
                        15+
                      </div>
                      <p className="text-sm text-muted-foreground">Years of Impact</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Partnership Application</h3>
                    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                      Ready to partner with Dagen I? Fill out our partnership application form and our team will contact you with details about exhibition packages, sponsorship opportunities, and availability.
                    </p>
                    
                    <div className="space-y-4">
                      <Button size="lg" className="w-full max-w-md" asChild>
                        <a href ="https://docs.google.com/forms/d/e/1FAIpQLSe9GKiRO2ZDBZz6A4gzzDZj8t6NppxQ4qAtMwMaTyBoFzo-Sg/viewform" target="_blank" rel="noopener noreferrer">
                          Apply for Partnership
                        </a>
                      </Button>
                      
                      <p className="text-sm text-muted-foreground">
                        Or contact us directly for detailed information:
                      </p>
                      <Button variant="outline" asChild>
                        <a href="mailto:naringsliv@dageni.se?subject=Partnership%20interest">
                          Email us
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-accent/20">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h2>
                
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Interested in participating in Dagen I 2026? We'd love to hear from you!
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">Contact us:</p>
                    <p className="text-primary font-medium">naringsliv@dageni.se</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Our team will get back to you with detailed information about packages, 
                    pricing, and how to secure your spot at Sweden's premier I-student career fair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}