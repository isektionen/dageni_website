import { MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Countdown } from "@/components/Countdown";
import { SectionCard } from "@/components/SectionCard";
import studentsHero from "@/assets/dagenipic1.jpg";
import exhibitorsImg from "@/assets/dagenipic2.jpg";
import ourExhibitorsImg from "@/assets/dagenipic3.jpg";
import sponsorsImg from "@/assets/dagenipic4.jpg";
import dageniLogo from "@/assets/dageni_profile_pic.jpg";
import aboutUsImg from "@/assets/Dageni_group.png";
import eventsImg from "@/assets/Dageni_eventpic.jpg";

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
          <img src={studentsHero} alt="" className="w-full h-full object-cover" />
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
              id="exhibitors"
              title="For Exhibitors"
              description="Is your company interested in exhibiting at Dagen I? Discover more about the benefits of connecting with talented students, showcasing your company culture, and finding your next great hire at Sweden's premier student career fair."
              image={exhibitorsImg}
              link="/for-exhibitors"
              gradient="secondary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            <SectionCard
              id="our-exhibitors"
              title="Our Exhibitors"
              description="Read more about the exhibitors of Dagen I 2026. Meet leading companies from various industries, learn about their missions, and explore potential career paths with organizations that are shaping the future."
              image={ourExhibitorsImg}
              link="/our-exhibitors"
              gradient="primary"
            />
            
            <SectionCard
              id="sponsors"
              title="Our Sponsors"
              description="Here are the sponsors who make Dagen I possible. We're grateful for their support in creating this incredible opportunity for students and companies to connect and build meaningful professional relationships."
              image={sponsorsImg}
              link="/our-sponsors"
              gradient="secondary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            <SectionCard
              id="about-us"
              title="About Us"
              description="Meet the passionate team behind Dagen I and learn about our mission to connect talented engineering students with innovative companies across Sweden."
              image={aboutUsImg}
              link="/about-us"
              gradient="primary"
            />
            
            <SectionCard
              id="events"
              title="Events"
              description="Discover the exciting events leading up to Dagen I 2026. From networking sessions to information meetings, there's something for everyone on the road to our main career fair."
              image={eventsImg}
              link="/events"
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
