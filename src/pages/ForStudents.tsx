import { ArrowLeft, Users, Calendar, Briefcase, GraduationCap, Download, ExternalLink, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { supabase, Company, Event } from "@/lib/supabase";
import { isOn, useSiteContent } from "@/lib/content";

const ForStudents = () => {
  const { hash } = useLocation();
  const content = useSiteContent();
  const [sponsors, setSponsors] = useState<Company[]>([]);
  const [sustainabilityPartners, setSustainabilityPartners] = useState<Company[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loadingSponsors, setLoadingSponsors] = useState(true);
  const [loadingSustainabilityPartners, setLoadingSustainabilityPartners] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

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
    fetchEvents();
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

  const fetchEvents = async () => {
    setLoadingEvents(true);
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
    
    setLoadingEvents(false);
  };

  const SponsorCard = ({ company }: { company: Company }) => (
    <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <img 
          src={company.logo_url} 
          alt={`${company.name} logo`}
          className="w-16 h-16 object-contain rounded bg-white p-2 mb-3"
        />
        <div>
          <h3 className="text-lg font-bold font-display leading-tight mb-1">{company.name}</h3>
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

  const EventCard = ({ event }: { event: Event }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const wordLimit = 50;
    const words = event.description.split(' ');
    const shouldTruncate = words.length > wordLimit;
    const displayText = isExpanded || !shouldTruncate
      ? event.description
      : words.slice(0, wordLimit).join(' ') + '...';

    return (
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow">
        {event.image_url && (
          <img 
            src={event.image_url} 
            alt={event.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold font-display mb-3">{event.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">{displayText}</p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:underline text-sm font-medium mb-4 block"
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
          {event.link && (
            <Button asChild size="sm" className="mt-4">
              <a 
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Register
              </a>
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={content.img_students_hero} alt="Students at career fair" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                For Students
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {content.students_hero_subtitle}
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
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={content.file_company_catalog} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View PDF
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={content.file_company_catalog} download="Dagen_I_Company_Catalog.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </section>

              {/* Dagen I Map Section */}
              <section id="dageni-map" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Dagen I Map</h2>
                <p className="text-muted-foreground mb-6">Navigate the fair with our comprehensive map showing all exhibitor locations.</p>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={content.file_map} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View PDF
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={content.file_map} download="Dagen_I_Map.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </section>

              {/* Events Section */}
              <section id="events" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Events</h2>
                <p className="text-muted-foreground mb-6">Talks, workshops, and activities during the fair.</p>
                
                {loadingEvents ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading events...</p>
                  </div>
                ) : events.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                    <p className="text-muted-foreground">{content.students_events_empty}</p>
                  </div>
                )}
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
                    <p className="text-muted-foreground">{content.students_sponsors_empty}</p>
                  </div>
                )}
              </section>

              {/* Our Sustainability Partners Section */}
              <section id="our-sustainability-partners" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-center gap-3">
                  <Leaf className="h-8 w-8 text-accent shrink-0" />
                  <span className="text-accent">Our Sustainability Partners</span>
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
                    <p className="text-muted-foreground">{content.students_sustainability_empty}</p>
                  </div>
                )}
              </section>

              {/* Contact Meetings */}
              <section id="contact-meetings" className="scroll-mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-6">
                  <span className="text-primary">
                    Contact Meetings
                  </span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {content.students_contact_meetings}
                </p>
                
                {isOn(content.contact_meetings_open) && content.contact_meetings_url ? (
                  <div className="text-center p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <p className="text-secondary font-medium mb-4">Apply now for contact meetings!</p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <a href={content.contact_meetings_url} target="_blank" rel="noopener noreferrer">
                        Apply Here
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center p-4 bg-muted/50 rounded-xl border border-muted">
                    <p className="text-muted-foreground font-medium">Application has closed</p>
                  </div>
                )}
              </section>

              {/* Become a Host */}
              <section id="become-a-host" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                    <span className="text-primary">
                      Become a Host for Dagen I
                    </span>
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-display mb-3 text-foreground">What is a company host?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {content.students_host_what}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold font-display mb-3 text-foreground">What's in it for you?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {content.students_host_why}
                      </p>
                    </div>
                    
                    {isOn(content.host_application_open) && content.host_application_url ? (
                      <div className="text-center">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                          <a href={content.host_application_url} target="_blank" rel="noopener noreferrer">
                            Apply to Become a Host
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center p-4 bg-muted/50 rounded-xl border border-muted">
                        <p className="text-muted-foreground font-medium">Application has closed</p>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="text-center py-8">
                <Link to="/">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all">
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
