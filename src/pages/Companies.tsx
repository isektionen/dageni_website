import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { lines, useSiteContent } from "@/lib/content";

export default function Companies() {
  const { hash } = useLocation();
  const content = useSiteContent();
  
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
            <img src={content.img_companies_hero} alt="Exhibition booth" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                For Companies
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {content.companies_hero_subtitle}
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full px-8">
              <a href={content.partnership_form_url} target="_blank" rel="noopener noreferrer">
                Apply to Exhibit
              </a>
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
              
              {/* Exhibition Packages */}
              <section id="packages" className="scroll-mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-8">
                  <span className="text-primary">
                    Exhibition Packages
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Standard Package */}
                  <div className="bg-card rounded-2xl p-8 border border-secondary">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-accent mb-4">Standard Package</h3>
                      <p className="text-muted-foreground mb-4">
                        {content.companies_standard_intro}
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      {lines(content.companies_standard_items).map((item) => (
                        <div key={item} className="flex items-start space-x-2">
                          <span className="text-accent font-bold">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium Package */}
                  <div className="bg-secondary/40 rounded-2xl p-8 border-2 border-primary relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">PREMIUM</span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary mb-4">Premium Package</h3>
                      <p className="text-muted-foreground mb-4">
                        {content.companies_premium_intro}
                      </p>
                      <p className="text-muted-foreground mb-4 text-sm font-medium">
                        The premium package includes everything in the Standard Package, but with:
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      {lines(content.companies_premium_items).map((item) => (
                        <div key={item} className="flex items-start space-x-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                      <div className="text-xs text-muted-foreground mt-4 italic">
                        {content.companies_premium_footnote}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Become a Partner */}
              <section id="become-a-partner" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                    <span className="text-primary">
                      Become a Partner
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-center">
                    {content.companies_partner_intro}
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
                      <div className="text-4xl font-bold font-display text-primary mb-2">
                        {content.companies_stat_students}
                      </div>
                      <p className="text-sm text-muted-foreground">Students Reached</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold font-display text-primary mb-2">
                        {content.companies_stat_partners}
                      </div>
                      <p className="text-sm text-muted-foreground">Company Partners</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold font-display text-primary mb-2">
                        {content.companies_stat_years}
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
                        <a href={content.partnership_form_url} target="_blank" rel="noopener noreferrer">
                          Apply for Partnership
                        </a>
                      </Button>
                      
                      <p className="text-sm text-muted-foreground">
                        Or contact us directly for detailed information:
                      </p>
                      <Button variant="outline" asChild>
                        <a href={`mailto:${content.email_business}?subject=Partnership%20interest`}>
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
                  <span className="text-primary">
                    Get In Touch
                  </span>
                </h2>
                
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {content.companies_get_in_touch}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">Contact us:</p>
                    <p className="text-primary font-medium">{content.email_business}</p>
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