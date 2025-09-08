import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Clock, Shield, Zap, ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "GSV Pro X1",
      category: "Professional",
      price: "$12,999",
      image: "/api/placeholder/400/300",
      features: ["4K HDR Camera", "45min Flight Time", "10km Range", "Weather Resistant"],
      specs: {
        camera: "4K 60fps with 3-axis gimbal",
        battery: "45 minutes flight time",
        range: "10km transmission range",
        weight: "1.8kg"
      },
      applications: ["Mapping & Surveying", "Infrastructure Inspection", "Search & Rescue"]
    },
    {
      name: "GSV Surveyor",
      category: "Industrial",
      price: "$18,999",
      image: "/api/placeholder/400/300",
      features: ["LiDAR Enabled", "60min Flight Time", "15km Range", "IP65 Rated"],
      specs: {
        camera: "Dual camera system with LiDAR",
        battery: "60 minutes flight time",
        range: "15km transmission range",
        weight: "3.2kg"
      },
      applications: ["Land Surveying", "Mining Operations", "Construction Monitoring"]
    },
    {
      name: "GSV Guardian",
      category: "Security",
      price: "$8,999",
      image: "/api/placeholder/400/300",
      features: ["Thermal Imaging", "30min Flight Time", "5km Range", "Night Vision"],
      specs: {
        camera: "Dual thermal and optical cameras",
        battery: "30 minutes flight time",
        range: "5km transmission range",
        weight: "1.2kg"
      },
      applications: ["Security Patrol", "Perimeter Monitoring", "Emergency Response"]
    },
    {
      name: "GSV AgriMax",
      category: "Agriculture",
      price: "$15,999",
      image: "/api/placeholder/400/300",
      features: ["Multispectral Camera", "50min Flight Time", "12km Range", "Spray System"],
      specs: {
        camera: "Multispectral imaging system",
        battery: "50 minutes flight time",
        range: "12km transmission range",
        weight: "4.1kg"
      },
      applications: ["Crop Monitoring", "Precision Spraying", "Yield Analysis"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Professional": return "bg-primary text-primary-foreground";
      case "Industrial": return "bg-accent text-accent-foreground";
      case "Security": return "bg-destructive text-destructive-foreground";
      case "Agriculture": return "bg-green-500 text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Drone Fleet</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Professional-grade drones engineered for specific industry needs. 
            From surveying to security, find the perfect solution for your operations.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Camera className="w-16 h-16 text-muted-foreground" />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.applications.join(" • ")}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="font-semibold mb-3">Specifications</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Camera className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{product.specs.camera}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{product.specs.battery}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{product.specs.range}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Weight: {product.specs.weight}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex space-x-4">
                  <Button className="flex-1">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our engineering team can develop specialized drone systems tailored to your unique requirements.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Contact Engineering Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}