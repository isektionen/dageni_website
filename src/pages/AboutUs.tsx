import { ArrowLeft, Target, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TeamMember, useSiteContent, useTeamMembers } from "@/lib/content";

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div
    className={
      member.highlighted
        ? "bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 border border-primary/20"
        : "bg-card rounded-2xl p-8 border border-border/50 shadow-card"
    }
  >
    {member.image_url && (
      <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
        <img src={member.image_url} alt={member.role} className="w-full h-full object-cover" />
      </div>
    )}
    <h3 className={`text-2xl font-bold font-display ${member.highlighted ? "mb-2" : ""}`}>{member.role}</h3>
    <p className="text-lg font-semibold text-foreground mb-2">{member.name}</p>
    {member.email && (
      <div className="flex items-center justify-center space-x-2">
        <Mail className="h-4 w-4 text-primary" />
        <a href={`mailto:${member.email}`} className="text-primary hover:underline">
          {member.email}
        </a>
      </div>
    )}
  </div>
);

const AboutUs = () => {
  const content = useSiteContent();
  const { team } = useTeamMembers();
  const highlighted = team.filter((m) => m.highlighted);
  const others = team.filter((m) => !m.highlighted);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={content.img_about_hero} alt="Dagen I Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                About Us
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {content.about_hero_subtitle}
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
              
              {/* Team Members */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-5">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Dagen I Committee
                  </span>
                </h2>
                <h2 className="text-1xl sm:text-3xl font-display mb-12">
                  <span className="text-center text-foreground/80">
                    {content.committee_year}
                  </span>
                </h2>
                
                {/* Highlighted members (e.g. project managers) */}
                {highlighted.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {highlighted.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                )}

                {/* Department heads, three per row with the last row centered */}
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                  {others.map((member) => (
                    <div key={member.id} className="w-full md:w-[calc((100%-4rem)/3)]">
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {content.about_mission}
                  </p>
                </div>
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

      <Footer />
    </div>
  );
};

export default AboutUs;