import { Button } from "@/components/ui/button";
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
//import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";

export default function Careers() {
  const openings = [
    {
      title: "position",
      department: "Engineering",
      location: "Tiruvannamalai, Tamilnadu",
      type: "Full-time",
      experience: "5+ years",
      description: "Cntent will be here."
    },
    {
      title: "position",
      department: "Operations",
      location: "Thimiri, Tamilnadu",
      type: "Full-time",
      experience: "3+ years",
      description: "Cntnt will be here."
    },
    {
      title: "AI/ML Research Scientist",
      department: "Research",
      location: "Boston, MA",
      type: "Full-time",
      experience: "PhD + 2 years",
      description: "Develop machine learning algorithms for autonomous navigation, object detection, and predictive maintenance."
    },
    {
      title: "Sales Engineer - Enterprise",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Work with enterprise clients to design custom drone solutions and drive technical sales discussions."
    },
    {
      title: "Manufacturing Technician",
      department: "Manufacturing",
      location: "Denver, CO",
      type: "Full-time",
      experience: "2+ years",
      description: "Assemble and test drone systems, perform quality control, and support production scaling initiatives."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive interfaces for drone control software and mission planning applications."
    }
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and training programs",
    "State-of-the-art office spaces and equipment",
    "Annual drone flying competitions and team events"
  ];

  const getTypeColor = (type: string) => {
    return type === "Full-time" 
      ? "bg-primary text-primary-foreground" 
      : "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Be part of the future of aviation. We're looking for passionate individuals 
            who want to push the boundaries of what's possible with drone technology.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            View Open Positions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why GSV?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're not just building drones; we're creating the future of autonomous systems. 
                Our team of innovators, engineers, and visionaries work together to solve 
                complex challenges that impact industries worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From flexible work arrangements to cutting-edge projects, we provide an 
                environment where creativity thrives and careers flourish.
              </p>
              {/*<div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0%</div>
                  <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0★</div>
                  <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
                </div>
              </div>*/}
            </div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <Users className="w-24 h-24 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground">
              We invest in our people because they're our greatest asset
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next opportunity with us
            </p>
          </div>

          {/*<div className="space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{job.department}</Badge>
                        <Badge className={getTypeColor(job.type)}>{job.type}</Badge>
                        <Badge variant="outline">{job.experience}</Badge>
                      </div>
                    </div>
                    <Button>
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {job.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>*/}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Send General Application
          </Button>
        </div>
      </section>
    </div>
  );
}