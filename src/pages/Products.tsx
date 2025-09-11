import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Clock, Shield, Zap, ArrowRight } from "lucide-react";

/* Product Image Imports */
import product1 from "@/assets/product/hexacopter.jpg";
import product2 from "@/assets/product/plane2.jpg";
import product3 from "@/assets/product/hexa_with_shield.jpg";
import product5 from "@/assets/product/kutty_bomb.jpg";
import product6 from "@/assets/product/small_quadcopter2.jpg";
import product7 from "@/assets/product/rocket.jpg";
import product8 from "@/assets/product/quadcopter4.jpg";
import product9 from "@/assets/product/drone_3dprinted.jpg";
import product10 from "@/assets/product/small_quad.jpg";

export default function Products() {
  const products = [
    {
      name: "GSV DoDecHexa X",
      category: "Professional",
      price: "$Not Listed",
      image: product1,
      features: ["4K HDR Camera", "45min Flight Time", "10km Range", "Weather Resistant"],
      specs: {
        camera: "4K 60fps with 3-axis gimbal",
        battery: "45 minutes flight time",
        range: "10km transmission range",
        weight: "1.8kg",
      },
      applications: ["Mapping & Surveying", "Infrastructure Inspection", "Search & Rescue"],
    },
    {
      name: "GSV Hybrid VTOL Drone",
      category: "Industrial",
      price: "$Not Listed",
      image: product2,
      features: ["Extended Range", "75min Endurance", "High-res Mapping", "Rugged Frame"],
      specs: {
        camera: "High-res optical with mapping lens",
        battery: "75 minutes flight time",
        range: "20km transmission range",
        weight: "4.5kg",
      },
      applications: ["Land Surveying", "Mining", "Construction Monitoring"],
    },
    {
      name: "GSV Hexacopter",
      category: "Security",
      price: "$Not Listed",
      image: product3,
      features: ["Thermal Imaging", "30min Flight Time", "Night Vision", "PTZ Camera"],
      specs: {
        camera: "Dual thermal & optical",
        battery: "30 minutes flight time",
        range: "5km transmission range",
        weight: "1.6kg",
      },
      applications: ["Perimeter Monitoring", "Security Patrol", "Emergency Response"],
    },
    {
      name: "GSV MiniQuad",
      category: "Agriculture",
      price: "Not Listed",
      image: product5,
      features: ["Spray System", "Multispectral", "50min Flight Time", "Precision RTK"],
      specs: {
        camera: "Multispectral imaging",
        battery: "50 minutes flight time",
        range: "12km transmission range",
        weight: "5.0kg",
      },
      applications: ["Crop Monitoring", "Precision Spraying", "Yield Analysis"],
    },
    {
      name: "GSV 150mm Nano Drone",
      category: "Professional",
      price: "$Not Listed",
      image: product6,
      features: ["Compact", "25min Flight Time", "4K Camera", "Indoor Capable"],
      specs: {
        camera: "4K with electronic stabilization",
        battery: "25 minutes flight time",
        range: "3km transmission range",
        weight: "0.9kg",
      },
      applications: ["Indoor Inspection", "Small Payload Delivery", "Training"],
    },
    {
      name: "GSV Rocket Drone",
      category: "Industrial",
      price: "$Not Listed",
      image: product7,
      features: ["Heavy Lift", "Modular Payload", "Advanced Telemetry", "Redundant Systems"],
      specs: {
        camera: "Modular payload bay (camera optional)",
        battery: "Variable (swappable packs)",
        range: "30km transmission range",
        weight: "8.5kg",
      },
      applications: ["Cargo Delivery", "Heavy-Lift Operations", "Specialized Payloads"],
    },
    {
      name: "GSV Quadcopter",
      category: "Professional",
      price: "$Not Listed",
      image: product8,
      features: ["Agile Flight", "30min Endurance", "FPV Ready", "Low-latency Link"],
      specs: {
        camera: "FPV + HD recorder",
        battery: "30 minutes flight time",
        range: "8km transmission range",
        weight: "1.2kg",
      },
      applications: ["FPV Cinematography", "Racing", "Survey Flights"],
    },
    {
      name: "GSV Pocket Drone",
      category: "Security",
      price: "$Not Listed",
      image: product9,
      features: ["3D-Printed Body", "Customizable", "Easy Repair", "Lightweight"],
      specs: {
        camera: "1080p modular camera",
        battery: "20 minutes flight time",
        range: "4km transmission range",
        weight: "0.8kg",
      },
      applications: ["R&D", "Prototyping", "Education"],
    },
    {
      name: "GSV 100mm Nano Drone",
      category: "Professional",
      price: "$Not Listed",
      image: product10,
      features: ["Pocketable", "15min Flight", "Easy Controls", "Affordable"],
      specs: {
        camera: "2.7K stabilized camera",
        battery: "15 minutes flight time",
        range: "1.5km transmission range",
        weight: "0.55kg",
      },
      applications: ["Hobbyists", "Quick Inspections", "Entry-level Training"],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Professional":
        return "bg-primary text-primary-foreground";
      case "Industrial":
        return "bg-accent text-accent-foreground";
      case "Security":
        return "bg-destructive text-destructive-foreground";
      case "Agriculture":
        return "bg-green-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Our Drone Fleet</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional-grade drones engineered for specific industry needs. From surveying to security, find the perfect solution for your operations.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product, index) => (
                  <Card key={index} className="overflow-hidden border border-slate-200 shadow-xl bg-white">
                    {/* Image / visual area */}
                    {/* Image / visual area with hover zoom + contain fit */}
                    <div className="relative w-full overflow-hidden rounded-t-lg bg-white aspect-[16/9] group flex items-center justify-center">
                      <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain block transform transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                      />
                    </div>

                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className={getCategoryColor(product.category)}>{product.category}</Badge>
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                      </div>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      {/*<CardDescription className="text-base">{product.applications.join(" • ")}</CardDescription>*/}
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Key Features */}
                      {/*<div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm">{feature}</span>
                              </div>
                          ))}
                        </div>
                      </div>*/}

                      {/* Specifications */}
                      {/*<div>
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
                      </div>*/}
                    </CardContent>

                    <CardFooter className="flex space-x-4">
                      <Button className="flex-1">Request Quote</Button>
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
