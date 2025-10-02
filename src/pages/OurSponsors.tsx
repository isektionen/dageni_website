import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import sponsorsImg from "@/assets/dagenipic4.jpg";

const OurSponsors = () => {
  const sponsors = [
    { 
      name: "Sponsor", 
      website: "https://www.bibme.se/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    { 
      name: "Sponsor", 
      website: "https://www.eltacotruck.se/",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    { 
      name: "Sponsor", 
      website: "https://www.abro.se/varumarken/eybro/",
      description: "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper."
    },
    { 
      name: "Sponsor", 
      website: "https://sejfa.nu/",
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa."
    },
    { 
      name: "Sponsor", 
      website: "https://www.latitude65.se/",
      description: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet."
    },
    { 
      name: "Sponsor", 
      website: "https://www.hexatronic.com/sv/",
      description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat."
    },
    { 
      name: "Sponsor", 
      website: "https://www.ridderheims.se/",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui mauris vehicula."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={sponsorsImg} alt="Sponsors" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                Our Sponsors
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating the partners who make Dagen I possible
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
              {/* Introduction */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A big thank you to our sponsors for making Dagen I possible! Your support helps us create valuable opportunities for students and companies to connect.
                </p>
              </div>

              {/* Sponsors Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="group p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all shadow-card hover:shadow-glow"
                  >
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                      {sponsor.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{sponsor.description}</p>
                    <div className="mt-4 text-primary text-sm group-hover:underline">
                      Visit Website →
                    </div>
                  </div>
                ))}
              </div>

              {/* Become a Sponsor */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Become a Sponsor
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Partner with Dagen I to support the next generation of engineers and gain visibility among talented students. We offer flexible sponsorship packages tailored to your organization's goals and budget.
                </p>
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
                <p className="text-muted-foreground">
                  Contact us to learn more about sponsorship opportunities and how your organization can contribute to Dagen I 2026.
                </p>
              </div>

              {/* Thank You Message */}
              <div className="text-center py-12 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 rounded-3xl border border-secondary/20">
                <h3 className="text-2xl sm:text-3xl font-bold font-display mb-4 text-foreground">
                  Thank You to All Our Sponsors
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Your support makes it possible for us to create meaningful connections between students and companies, fostering innovation and professional growth in the engineering community.
                </p>
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurSponsors;
