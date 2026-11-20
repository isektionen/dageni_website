import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CountdownLight as Countdown } from "@/components/CountdownLight";
import { SectionCard } from "@/components/SectionCard";
import { lines, useSiteContent } from "@/lib/content";

const Index = () => {
  const content = useSiteContent();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary text-primary-foreground">
        {/* Background photo, toned down under the navy */}
        <div className="absolute inset-0 opacity-10">
          <img src={content.img_home_hero} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 animate-fade-in py-10">
            <h1 className="sr-only">Dagen I {content.year}</h1>
            <img
              src={content.img_hero_logo}
              alt="Dagen I"
              loading="eager"
              className="w-56 sm:w-72 md:w-96 h-auto"
            />

            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">
                {content.dateLabel}
              </p>
              <p className="flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl text-secondary">
                <MapPin className="h-5 w-5" />
                {content.location_name} · {content.timeLabel}
              </p>
            </div>

            <Countdown />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                <a href={content.partnership_form_url} target="_blank" rel="noopener noreferrer">
                  Exhibit at Dagen I
                </a>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white hover:bg-white/90 text-primary px-8">
                <Link to="/for-students">For Students</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Dagen I Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-center">
              <span className="text-primary">
                About Dagen I
              </span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">What</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.home_about_what}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">Why</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {lines(content.home_about_why).map((line) => {
                    const colon = line.indexOf(":");
                    return colon > 0 ? (
                      <li key={line}>• <strong>{line.slice(0, colon + 1)}</strong>{line.slice(colon + 1)}</li>
                    ) : (
                      <li key={line}>• {line}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <SectionCard
              id="students"
              title="For Students"
              description={content.home_card_students}
              image={content.img_card_students}
              link="/for-students"
              gradient="primary"
            />
            
            <SectionCard
              id="companies"
              title="For Companies"
              description={content.home_card_companies}
              image={content.img_card_companies}
              link="/for-companies"
              gradient="secondary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            <SectionCard
              id="our-exhibitors"
              title="Our Exhibitors"
              description={content.home_card_exhibitors}
              image={content.img_card_exhibitors}
              link="/our-exhibitors"
              gradient="primary"
            />
            
            <SectionCard
              id="about-us"
              title="About Us"
              description={content.home_card_about}
              image={content.img_card_about}
              link="/about-us"
              gradient="secondary"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
