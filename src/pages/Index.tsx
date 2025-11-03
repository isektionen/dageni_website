import { MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CountdownLight as Countdown } from "@/components/CountdownLight";
import { SectionCard } from "@/components/SectionCard";
import studentsHero from "@/assets/dagenipic1_optimized.jpg";
import exhibitorsImg from "@/assets/dagenipic2_optimized.jpg";
import ourExhibitorsImg from "@/assets/dagenipic3_optimized.jpg";
import dageniLogo from "@/assets/dageni_profile_pic.jpg";
import aboutUsImg from "@/assets/cover_all.jpg";

const Index = () => {
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
          <img src={studentsHero} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in pt-6 sm:pt-8 md:pt-10">
            <div className="space-y-4">
              <div id="location" className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-glow" />
                <span className="text-base sm:text-lg md:text-xl font-medium">Nymble</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display">
                <span className="block text-foreground/80 mb-2">23 January 2026</span>
              </h2>
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
                    src={dageniLogo} 
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
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <SectionCard
              id="students"
              title="For Students"
              description="Are you an I-student and want to know more about the fair or how you can contribute to Dagen I? Discover exciting career opportunities, network with industry professionals, and take the first step towards your dream career."
              image={studentsHero}
              link="/for-students"
              gradient="primary"
            />
            
            <SectionCard
              id="companies"
              title="For Companies"
              description="Is your company interested in exhibiting or sponsoring Dagen I? Discover the benefits of connecting with talented students, showcasing your company culture, and finding your next great hire at Sweden's premier student career fair."
              image={exhibitorsImg}
              link="/for-companies"
              gradient="secondary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
            <SectionCard
              id="our-exhibitors"
              title="Our Exhibitors"
              description="Read more about the exhibitors of Dagen I 2026. Meet leading companies from various industries, learn about their missions, and explore potential career paths with organizations that are shaping the future."
              image={ourExhibitorsImg}
              link="/our-exhibitors"
              gradient="primary"
            />
            
            <SectionCard
              id="about-us"
              title="About Us"
              description="Meet the passionate team behind Dagen I and learn about our mission to connect talented engineering students with innovative companies across Sweden."
              image={aboutUsImg}
              link="/about-us"
              gradient="secondary"
            />

            <SectionCard
              id="hand-in-hand"
              title="Hand in Hand"
              description="Charity collaboration — companies donate to Hand in Hand and receive a flower sized by their donation. Click to see details."
              image={aboutUsImg}
              link="/hand-in-hand"
              gradient="primary"
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
