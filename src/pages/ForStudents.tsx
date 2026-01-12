import { ArrowLeft, Users, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import studentsHero from "@/assets/dagenipic1_optimized.jpg";
import sponsorsImg from "@/assets/dagenipic4.jpg";
import { useEffect, useState } from "react";
import { supabase, Company } from "@/lib/supabase";

const ForStudents = () => {
  const { hash } = useLocation();
  const [sponsors, setSponsors] = useState<Company[]>([]);
  const [sustainabilityPartners, setSustainabilityPartners] = useState<Company[]>([]);
  const [loadingSponsors, setLoadingSponsors] = useState(true);
  const [loadingSustainabilityPartners, setLoadingSustainabilityPartners] = useState(true);

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash]);

  useEffect(() => {
    fetchSponsors();
    fetchSustainabilityPartners();
  }, []);

  const fetchSponsors = async () => {
    setLoadingSponsors(true);
    
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('type', 'sponsor')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching sponsors:', error);
    } else {
      setSponsors(data || []);
    }
    
    setLoadingSponsors(false);
  };

  const fetchSustainabilityPartners = async () => {
    setLoadingSustainabilityPartners(true);
    
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('type', 'sustainability-partner')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching sustainability partners:', error);
    } else {
      setSustainabilityPartners(data || []);
    }
    
    setLoadingSustainabilityPartners(false);
  };

  const SponsorCard = ({ company }: { company: Company }) => (
    <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={company.logo_url} 
          alt={`${company.name} logo`}
          className="w-16 h-16 object-contain rounded bg-white p-2"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold font-display mb-1">{company.name}</h3>
          {company.website && (
            <a 
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Visit website →
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed">{company.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={studentsHero} alt="Students at career fair" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                For Students
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Your gateway to exciting career opportunities
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

            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
              {/* Our Exhibitors Section */}
              <section id="exhibitors" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Exhibitors</h2>
                <p className="text-muted-foreground mb-6">Discover companies attending Dagen I.</p>
                <Button asChild>
                  <Link to="/our-exhibitors">Browse Exhibitors</Link>
                </Button>
              </section>

              {/* Company Catalog Section */}
              <section id="company-catalog" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Company Catalog</h2>
                <p className="text-muted-foreground mb-6">Browse our comprehensive catalog featuring all exhibiting companies, their offerings, and contact information.</p>
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                  <p className="text-muted-foreground text-center">The company catalog PDF will be available soon. Check back later to view or download the complete guide.</p>
                </div>
              </section>

              {/* Events Section */}
              <section id="events" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Events</h2>
                <p className="text-muted-foreground">Talks, workshops, and activities during the fair.</p>
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20 mt-6">
                  <p className="text-muted-foreground">Events leading up to Dagen I 2026 will be announced soon. Stay tuned for exciting networking opportunities, information sessions, and preparation meetings.</p>
                </div>
              </section>

              {/* Our Sponsors Section */}
              <section id="our-sponsors" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Our Sponsors</h2>
                
                {loadingSponsors ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading sponsors...</p>
                  </div>
                ) : sponsors.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sponsors.map((company) => (
                      <SponsorCard key={company.id} company={company} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                    <p className="text-muted-foreground">Our sponsors for Dagen I 2026 will be announced soon. Stay tuned to see the amazing companies supporting our event and the next generation of engineers.</p>
                  </div>
                )}
              </section>

              {/* Our Sustainability Partners Section */}
              <section id="our-sustainability-partners" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Our Sustainability Partners
                  </span>
                </h2>
                
                {loadingSustainabilityPartners ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading sustainability partners...</p>
                  </div>
                ) : sustainabilityPartners.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sustainabilityPartners.map((company) => (
                      <SponsorCard key={company.id} company={company} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                    <p className="text-muted-foreground">Our sustainability partners for Dagen I 2026 will be announced soon. Stay tuned to see the amazing organizations supporting our commitment to sustainability.</p>
                  </div>
                )}
              </section>

              {/* Contact Meetings */}
              <section id="contact-meetings" className="scroll-mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-6">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Contact Meetings
                  </span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  During the fair day you will be offered contact meetings. These are simply conversations for about 20 minutes where you have the opportunity to talk to company representatives in calm. They can either be more focused on future jobs or more of a chance to ask someone in working life what to think about during their studies, what a normal working day looks like, what it thinks is important when looking for a job and more. You decide for yourself, but they are in any case eager to meet, regardless of grade!
                </p>
                
                <div className="text-center p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                  <p className="text-secondary font-medium mb-4">Apply now for contact meetings!</p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90">
                    <a href="https://docs.google.com/forms/d/19LlssiCEgW7kSGM-QpvHpOIIImEPBhamU0wICQ_tJb8/viewform?fbclid=IwY2xjawPSHd1leHRuA2FlbQIxMABicmlkETBPVnVBcFZaRHNEbm9FeUFGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrGGTVZO_sp4ZgjMkbXuaf-TsnKSpcNcgMZYQkGBz7CsB-2mLOMjHBe-Xpcm_aem_WBfpbuZWBnVQxKk9UC09Sw&edit_requested=true" target="_blank" rel="noopener noreferrer">
                      Apply Here
                    </a>
                  </Button>
                </div>
              </section>

              {/* Become a Host */}
              <section id="become-a-host" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Become a Host for Dagen I
                    </span>
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-display mb-3 text-foreground">What is a company host?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As a host you will be responsible for the communication with a company before and during the fair. You will represent the chapter as the main contact person from our side and act as the company's helping hand when needed. The purpose is to make the communication and process smoother, for both parts.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold font-display mb-3 text-foreground">What's in it for you?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This is your chance to network and gain valuable contact, and more importantly, guarantee a spot at the closing banquet. There will also be a kickoff for all company hosts.
                      </p>
                    </div>
                    
                    <div className="text-center p-4 bg-muted/50 rounded-xl border border-muted">
                      <p className="text-muted-foreground font-medium">Application has closed</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="text-center py-8">
                <Link to="/">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForStudents;
