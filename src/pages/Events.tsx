import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import eventsImg from "@/assets/Dageni_eventpic.jpg";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={eventsImg} alt="Dagen I Events" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                Events
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover the exciting events leading up to Dagen I 2026
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
                  <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Road to Dagen I 2026
                  </span>
                </h2>
              </div>

              {/* Placeholder Content */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Events leading up to Dagen I 2026 will be announced soon. Stay tuned for exciting networking opportunities, 
                    information sessions, and preparation meetings as we approach the main career fair event.
                  </p>
                </div>
              </div>

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

      <Footer />
    </div>
  );
};

export default Events;