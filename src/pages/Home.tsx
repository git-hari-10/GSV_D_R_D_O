import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  Settings,
  Camera,
  Wifi,
  Battery,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import bg1 from "@/assets/Home/homeback_plane.png";
import bg2 from "@/assets/Home/hexacopter.png";
import bg3 from "@/assets/Home/background_quadcopter.png";
import productImage from "@/assets/Home/product-drone.jpg";

export default function Home(): JSX.Element {
  const features = [
    { icon: Camera, title: "4K Ultra HD Camera", description: "Professional-grade imaging with stabilized 4K video recording" },
    { icon: Shield, title: "Advanced Safety", description: "Collision avoidance and return-to-home functionality" },
    { icon: Wifi, title: "Smart Connectivity", description: "Real-time data transmission and remote monitoring" },
    { icon: Battery, title: "Extended Flight Time", description: "Up to 35 minutes of continuous flight operation" },
    { icon: Zap, title: "Rapid Deployment", description: "Quick setup and launch for time-critical missions" },
    { icon: Settings, title: "AI-Powered", description: "Intelligent flight patterns and automated navigation" },
  ];

  const slides = [bg1, bg2, bg3];
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [index, setIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const autoplayMs = 5000;
  const transitionMs = 700;
  const intervalRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => i + 1);
      setIsTransitioning(true);
    }, autoplayMs);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // manual
  const prev = () => {
    setIndex((i) => i - 1);
    setIsTransitioning(true);
    startAutoplay();
  };

  const next = () => {
    setIndex((i) => i + 1);
    setIsTransitioning(true);
    startAutoplay();
  };

  const goTo = (i: number) => {
    setIndex(i + 1);
    setIsTransitioning(true);
    startAutoplay();
  };

  const handleTransitionEnd = () => {
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(slides.length);
    }
    if (index === slides.length + 1) {
      setIsTransitioning(false);
      setIndex(1);
    }
  };

  return (
      <div className="min-h-screen page-offset">
        {/* HERO */}
        <section
            className="relative h-screen flex items-center justify-center text-center overflow-hidden"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
            aria-roledescription="carousel"
            aria-label="Homepage hero slider"
        >
          {/* Slider track */}
          <div
              ref={trackRef}
              className="hero-slider-track absolute inset-0 flex"
              style={{
                width: `${extendedSlides.length * 100}%`,
                transform: `translateX(-${index * (100 / extendedSlides.length)}%)`,
                transition: isTransitioning ? `transform ${transitionMs}ms cubic-bezier(.22,.9,.36,1)` : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((img, i) => (
                <div
                    key={i}
                    className="hero-slide flex-shrink-0"
                    style={{
                      width: `${100 / extendedSlides.length}%`,
                      backgroundImage: `url(${img})`,
                    }}
                    role="img"
                    aria-label={`background slide ${i + 1}`}
                />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 gradient-hero-tricolor pointer-events-none" />

          {/* Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 hero-section-content">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              <span className="block animated-gradient-text">Research &amp; Development</span>
              <span className="block text-white/95 drop-shadow-lg">R&amp;D Organization</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/85 mb-8 max-w-2xl mx-auto text-justify">
              Professional drones engineered for commercial applications, surveillance, and precision agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              {/* Watch Demo Button */}
              {/* <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Watch Demo
              </Button> */}
            </div>
          </div>

          {/* Arrows */}
          <button
              aria-label="Previous slide"
              className="hero-arrow left-4 sm:left-6 lg:left-10 absolute top-1/2 transform -translate-y-1/2 z-30"
              onClick={prev}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
              aria-label="Next slide"
              className="hero-arrow right-4 sm:right-6 lg:right-10 absolute top-1/2 transform -translate-y-1/2 z-30"
              onClick={next}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-3 h-3 rounded-full transition ${
                        i + 1 === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                    }`}
                />
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology designed for professional applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = feature.icon;
                return (
                    <Card key={idx} className="glass-effect shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Professional Grade Equipment</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our drone fleet combines innovative engineering with proven reliability. Perfect for commercial inspections, mapping, surveillance, and specialized missions.
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
                    View All Products <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img src={productImage} alt="Professional Drone" className="rounded-lg shadow-2xl w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
              {/* Request Demo Button commented out */}
              {/* <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                Request Demo
              </Button> */}
            </div>
          </div>
        </section>
      </div>
  );
}
