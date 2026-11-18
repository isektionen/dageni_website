import { MapPin } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 animate-gradient-shift bg-200%" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
        
        {/* Hero Image Overlay */}
        <div className="absolute inset-0 opacity-5">
          <img src={content.img_home_hero} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in pt-6 sm:pt-8 md:pt-10">
            <div className="space-y-4">
              <div id="location" className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-glow" />
                <span className="text-base sm:text-lg md:text-xl font-medium">{content.location_name}</span>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-foreground/80 mb-4">
                  {content.dateLabel}
                </h2>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground/60">
                  {content.timeLabel}
                </p>
              </div>
            </div>

            <div className="py-2 sm:py-4">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 font-medium uppercase tracking-wider">
                Countdown to
              </p>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-8">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift bg-200%">
                  Dagen I
                </span>
              </h1>
              
              {/* Dagen I Logo */}
              <div className="flex justify-center mb-8 sm:mb-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-glow transition-all duration-300">
                  <img 
                    src={content.img_logo} 
                    alt="Dagen I Logo" 
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <Countdown />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Dagen I Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
