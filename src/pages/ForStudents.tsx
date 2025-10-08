import { ArrowLeft, Users, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import studentsHero from "@/assets/dagenipic1.jpg";
import sponsorsImg from "@/assets/dagenipic4.jpg";
import { useEffect } from "react";

const ForStudents = () => {
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
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our exhibitors</h2>
                <p className="text-muted-foreground mb-6">Discover companies attending Dagen I.</p>
                <Button asChild>
                  <Link to="/our-exhibitors">Browse exhibitors</Link>
                </Button>
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
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Our sponsors</h2>
                <div className="relative rounded-3xl overflow-hidden mb-8">
                  <img src={sponsorsImg} alt="Sponsors" className="w-full h-60 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-transparent" />
                </div>
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                  <p className="text-muted-foreground">Our sponsors for Dagen I 2026 will be announced soon. Stay tuned to see the amazing companies supporting our event and the next generation of engineers.</p>
                </div>
              </section>

              {/* Contact Meetings */}
              <section id="contact-meetings" className="scroll-mt-24">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Contact Meetings
                  </span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  During the fair day you will be offered contact meetings. These are simply conversations for about 20 minutes where you have the opportunity to talk to company representatives in calm. They can either be more focused on future jobs or more of a chance to ask someone in working life what to think about during their studies, what a normal working day looks like, what it thinks is important when looking for a job and more. You decide for yourself, but they are in any case eager to meet, regardless of grade!
                </p>
                
                <div className="text-center p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                  <p className="text-secondary font-medium">The application for contact meetings hasn't opened yet. Stay tuned!</p>
                </div>
              </section>

              {/* Become a Host */}
              <section id="become-a-host" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Become a host for Dagen I
                    </span>
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-display mb-3 text-foreground">What is a company host?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As a host you will be responsible for the communication with a company before and after the fair. You will represent the chapter as the main contact person from our side and act as the company's helping hand when needed. The purpose is to make the communication and process smoother, for both parts.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold font-display mb-3 text-foreground">What's in it for you?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This is your chance to network and gain valuable contact, and more importantly, guarantee a spot at the closing banquet. There will also be a kickoff for all company hosts.
                      </p>
                    </div>
                    
                    <div className="text-center p-4 bg-accent/10 rounded-xl border border-accent/20">
                      <p className="text-accent font-medium">The application to become a company host hasn't opened yet. Stay tuned!</p>
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
