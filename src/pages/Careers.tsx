import { Briefcase } from "lucide-react";
import careersImg from "@/assets/Carrers/careers-page.png";

// Job type definition
type Job = {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
};

export default function Careers() {
  // Empty openings for now
  const openings: Job[] = [];

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and training programs",
    "State-of-the-art office spaces and equipment",
    "Annual drone flying competitions and team events",
  ];

  return (
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 gradient-hero text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Be part of the future of aviation. We're looking for passionate
              individuals who want to push the boundaries of what's possible with
              drone technology.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why GSV?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're not just building drones; we're creating the future of
                autonomous systems. Our team of innovators, engineers, and
                visionaries work together to solve complex challenges that impact
                industries worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                From flexible work arrangements to cutting-edge projects, we
                provide an environment where creativity thrives and careers
                flourish.
              </p>
            </div>

            {/* Careers Image */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                  src={careersImg}
                  alt="Careers at GSV"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground mb-16">
              We invest in our people because they're our greatest asset
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                  <div
                      key={index}
                      className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Find your next opportunity with us
            </p>

            {/* Show "No Opportunities" if no openings */}
            {openings.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-muted rounded-lg shadow-md">
                  <Briefcase className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">
                    No Opportunities Available
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Currently, there are no open positions at GSV Drones. Please
                    check back later or follow us for updates on future
                    opportunities.
                  </p>
                </div>
            ) : (
                <div>{
                  /* Map openings here when available */
                }</div>
            )}
          </div>
        </section>
      </div>
  );
}
