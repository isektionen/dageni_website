import { useEffect, useState } from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { supabase, Company } from "@/lib/supabase";
import ourExhibitorsImg from "@/assets/dagenipic3_optimized.jpg";

const OurExhibitors = () => {
  const [exhibitors, setExhibitors] = useState<Company[]>([]);
  const [mainPartners, setMainPartners] = useState<Company[]>([]);
  const [sponsors, setSponsors] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);
    
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching companies:', error);
    } else {
      const exhibitorsList = data?.filter(c => c.type === 'exhibitor') || [];
      const sponsorsList = data?.filter(c => c.type === 'sponsor') || [];
      
      // Separate main partners from regular exhibitors
      const mainPartnersList = exhibitorsList.filter(c => c.is_main_partner);
      const regularExhibitors = exhibitorsList.filter(c => !c.is_main_partner);
      
      setMainPartners(mainPartnersList);
      setExhibitors(regularExhibitors);
      setSponsors(sponsorsList);
    }
    
    setLoading(false);
  };

  const CompanyCard = ({ company, isMainPartner = false }: { company: Company; isMainPartner?: boolean }) => (
    <div className={`bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow ${
      isMainPartner ? 'md:col-span-2 lg:col-span-3 p-10 md:p-14' : 'p-6'
    }`}>
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={company.logo_url} 
          alt={`${company.name} logo`}
          className={`object-contain rounded bg-white p-2 ${
            isMainPartner ? 'w-32 h-32 md:w-40 md:h-40' : 'w-16 h-16'
          }`}
        />
        <div className="flex-1">
          {isMainPartner && (
            <span className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm md:text-base font-semibold px-4 py-1.5 rounded-full mb-3">
              Main Partner
            </span>
          )}
          <h3 className={`font-bold font-display mb-1 ${
            isMainPartner ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-xl'
          }`}>{company.name}</h3>
          {company.website && (
            <a 
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-primary hover:underline ${
                isMainPartner ? 'text-base md:text-lg' : 'text-sm'
              }`}
            >
              Visit website →
            </a>
          )}
        </div>
      </div>
      <p className={`text-muted-foreground leading-relaxed ${
        isMainPartner ? 'text-lg md:text-xl' : ''
      }`}>{company.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={ourExhibitorsImg} alt="Our exhibitors" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                Our Exhibitors
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Meet the companies joining Dagen I 2026
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

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading companies...</p>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto space-y-16">
                {/* Exhibitors Section (including Main Partners) */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8 text-center">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Exhibitors
                    </span>
                  </h2>
                  {(mainPartners.length > 0 || exhibitors.length > 0) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Main Partners first */}
                      {mainPartners.map((company) => (
                        <CompanyCard key={company.id} company={company} isMainPartner={true} />
                      ))}
                      {/* Regular Exhibitors */}
                      {exhibitors.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20 text-center">
                      <p className="text-muted-foreground">
                        Our exhibitors for Dagen I 2026 will be announced soon. Stay tuned to see the amazing companies 
                        that will be showcasing their opportunities and connecting with talented students.
                      </p>
                    </div>
                  )}
                </div>

                {/* Call to Action */}
                <div className="text-center py-8">
                  <Link to="/for-companies">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all">
                      Interested in Exhibiting?
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurExhibitors;
