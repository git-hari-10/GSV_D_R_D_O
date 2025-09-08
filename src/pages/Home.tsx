import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Settings, Camera, Wifi, Battery } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/home_background.png";
import productImage from "@/assets/product-drone.jpg";

export default function Home() {
  const features = [
    {
      icon: Camera,
      title: "4K Ultra HD Camera",
      description: "Professional-grade imaging with stabilized 4K video recording",
    },
    {
      icon: Shield,
      title: "Advanced Safety",
      description: "Collision avoidance and return-to-home functionality",
    },
    {
      icon: Wifi,
      title: "Smart Connectivity",
      description: "Real-time data transmission and remote monitoring",
    },
    {
      icon: Battery,
      title: "Extended Flight Time",
      description: "Up to 35 minutes of continuous flight operation",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick setup and launch for time-critical missions",
    },
    {
      icon: Settings,
      title: "AI-Powered",
      description: "Intelligent flight patterns and automated navigation",
    },
  ];

  return (
      <div className="min-h-screen page-offset">
        {/* Hero Section */}
        <section
            className="relative h-screen flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 gradient-hero-tricolor opacity-85"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gradient-grey">Next Generation</span>
              <span className="block text-gradient">Drone Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional drones engineered for commercial applications,
              surveillance, and precision agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology designed for professional applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Professional Grade Equipment</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our drone fleet combines innovative engineering with proven reliability.
                  Perfect for commercial inspections, mapping, surveillance, and specialized missions.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Enterprise-grade build quality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Weather-resistant design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Modular payload systems</span>
                  </li>
                </ul>
                <Link to="/products">
                  <Button size="lg">
                    View All Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                    src={productImage}
                    alt="Professional Drone"
                    className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 gradient-hero-extended">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Take Flight?</h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with our team to discuss your drone requirements and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Get In Touch
                </Button>
              </Link>
              <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
}
