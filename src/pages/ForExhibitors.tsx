import { ArrowLeft, Target, TrendingUp, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import exhibitorsImg from "@/assets/dagenipic2.jpg";

const ForExhibitors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section  */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={exhibitorsImg} alt="Exhibition booth" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground/80">
                For Exhibitors
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Connect with Sweden's brightest engineering talent
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
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    About Dagen I
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">What</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dagen I is the annual career fair at KTH's School of Industrial Engineering and Management (ITM) for I-students. It takes place one day in January and is an important event for all I-students who want to network and get in touch with potential employers in the spring. The fair started in 2006 and is arranged by the chapter organization Tekniska Högskolans Studentkår, the I-section.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">Why</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The fair offers lunch lectures, a career fair and closes with a banquet in the evening. In this way, we can offer a whole day of networking and socializing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exhibition Packages */}
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-center">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Exhibition Packages
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Standard Package */}
                  <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-2xl p-8 border border-blue-200/30">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4">Standard Package</h3>
                      <p className="text-muted-foreground mb-4">
                        The standard package allows you to interact with I-students from all year groups. This allows you to explain what makes your company unique.
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Monterspace with 1 standing table</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>1 business host</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>4 lunch tickets</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Possibility to have contact meets</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Electricity and Wi-Fi during the fair</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Access to the business lounge</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>2 tickets for the banquet</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Inclusion on the photo wall</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Marketing on the Dagen I website and in the company-catalog</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Package */}
                  <div className="bg-gradient-to-br from-gold-500/5 to-yellow-500/10 rounded-2xl p-8 border border-yellow-300/30 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold">PREMIUM</span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-yellow-600 mb-4">Premium Package</h3>
                      <p className="text-muted-foreground mb-4">
                        With the premium package your company will have the chance for some extra exposure and the opportunity to increase students' awareness about what your company works with and what you have to offer.
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Monterspace with 1 standing table</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>An event of your choice</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>1 business host</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>4 lunch tickets</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>The possibility to have contact meets</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Electricity and Wi-Fi during the fair</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Access to the business lounge</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>2 tickets for the banquet</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Inclusion on the photo wall</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>Marketing on the Dagen I website and in the company-catalog</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-accent/20">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-center">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h2>
                
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Interested in participating in Dagen I 2026? We'd love to hear from you!
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">Contact us:</p>
                    <p className="text-primary font-medium">naringsliv@dageni.se</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Our team will get back to you with detailed information about packages, 
                    pricing, and how to secure your spot at Sweden's premier I-student career fair.
                  </p>
                </div>
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

export default ForExhibitors;
