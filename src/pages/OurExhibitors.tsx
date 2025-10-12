import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ourExhibitorsImg from "@/assets/dagenipic3_optimized.jpg";

const OurExhibitors = () => {
  // Main Partner
  const mainPartner = {
    name: "Exhibitor",
    website: "https://navigio.eu/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    isMainPartner: true
  };

  // Sustainability Partners
  const sustainabilityPartners = [
    {
      name: "Exhibitor",
      website: "https://www.handinhandsweden.se/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    },
    {
      name: "Exhibitor",
      website: "https://www.gainuk.org/",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
    }
  ];

  // Main Exhibitors
  const exhibitors = [
    {
      name: "Exhibitor",
      website: "https://www.abgsc.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula, nulla ut consequat tempor, magna lorem tempus purus."
    },
    {
      name: "Exhibitor",
      website: "https://www.drakeanalytics.se/",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec auctor blandit quam."
    },
    {
      name: "Exhibitor",
      website: "https://www.if.se/privat",
      description: "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis."
    },
    {
      name: "Exhibitor",
      website: "https://kpmg.com/xx/en.html",
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
    },
    {
      name: "Exhibitor",
      website: "https://www.sareqinvest.se/",
      description: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      name: "Exhibitor",
      website: "https://www.niam.se/",
      description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis."
    },
    {
      name: "Exhibitor",
      website: "https://www.capgemini.com/se-en/",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Cum sociis natoque penatibus."
    },
    {
      name: "Exhibitor",
      website: "https://www.lidl.se/",
      description: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque."
    },
    {
      name: "Exhibitor",
      website: "https://claessonpartners.se/",
      description: "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod lorem ipsum."
    },
    {
      name: "Exhibitor",
      website: "https://echostate.se/",
      description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
    },
    {
      name: "Exhibitor",
      website: "https://implementconsultinggroup.com/",
      description: "Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla vitae."
    },
    {
      name: "Exhibitor",
      website: "https://www.mcfcorpfin.com/",
      description: "Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis."
    },
    {
      name: "Exhibitor",
      website: "https://www.visma.se/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper."
    },
    {
      name: "Exhibitor",
      website: "https://osttra.com/",
      description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus mauris vehicula."
    },
    {
      name: "Exhibitor",
      website: "https://www.allshares.com/",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo tortor."
    },
    {
      name: "Exhibitor",
      website: "https://curamando.com/sv/",
      description: "Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui lorem ipsum dolor sit amet."
    },
    {
      name: "Exhibitor",
      website: "https://valcon.com/sv/",
      description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis."
    },
    {
      name: "Exhibitor",
      website: "https://www2.deloitte.com/se/sv.html",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue."
    },
    {
      name: "Exhibitor",
      website: "https://www.ey.com/sv_se",
      description: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac."
    },
    {
      name: "Exhibitor",
      website: "https://keytogroup.com/sv",
      description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum mauris blandit aliquet."
    },
    {
      name: "Exhibitor",
      website: "https://www.paretosec.se/",
      description: "Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac vestibulum."
    },
    {
      name: "Exhibitor",
      website: "https://www.bnpparibas.se/en/",
      description: "Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum lorem ipsum dolor."
    },
    {
      name: "Exhibitor",
      website: "https://www.pwc.se/",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
    },
    {
      name: "Exhibitor",
      website: "https://www.ericsson.com/en",
      description: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo donec."
    },
    {
      name: "Exhibitor",
      website: "https://www.sverigesingenjorer.se/",
      description: "Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={ourExhibitorsImg} alt="Exhibition hall" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                Our Exhibitors
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Meet the companies shaping the future of technology
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get ready to meet the companies that will be exhibiting at Dagen I 2026!
                </p>
              </div>

              {/* Announcement */}
              <div className="text-center py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl border border-primary/20">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Exhibitors Coming Soon
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                  Our exhibitors for Dagen I 2026 will be announced soon! We're working with amazing companies from various industries to bring you the best career fair experience. Stay tuned to discover the innovative organizations that will be showcasing their opportunities and connecting with talented students.
                </p>
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

export default OurExhibitors;
