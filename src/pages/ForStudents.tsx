import { ArrowLeft, Users, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import studentsHero from "@/assets/dagenipic1.jpg";

const ForStudents = () => {
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
              {/* About Dagen I */}
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    About Dagen I
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">What</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dagen I is the annual career fair for Industrial Engineering and Management students, taking place at the end of January 2026. Since 2011, it has been a key event where students from the Master of Science in Engineering and Master's programs connect with potential employers. Dagen I provides opportunities to engage with industry and form relationships that can lead to future career prospects. It's a chance to gain exclusive insights into companies and prepare for life after graduation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">Why</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Lunch Lectures:</strong> Hear from top companies and gain insights into their work and industry trends.</li>
                      <li>• <strong>Banquet:</strong> Network in a formal yet relaxed setting with company representatives and fellow students.</li>
                      <li>• <strong>Connect with Employers:</strong> Explore career paths and meet your future employers.</li>
                      <li>• <strong>Relationship Building:</strong> Get to know professionals and better understand job market dynamics.</li>
                      <li>• <strong>Contact Meetings:</strong> During the fair, join conversations with company representatives. Discuss future jobs or ask about working life.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Become a Host */}
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

              {/* Contact Meetings */}
              <div className="space-y-6">
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForStudents;
