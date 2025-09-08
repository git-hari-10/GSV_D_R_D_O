import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Target } from "lucide-react";
import aboutImage from "@/assets/about-lab.jpg";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "0" },
    { label: "Drones Deployed", value: "0" },
    { label: "Countries Served", value: "0" },
    { label: "Team Members", value: "0" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of drone technology with cutting-edge research and development."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships by delivering solutions that exceed expectations."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Maintaining the highest standards in manufacturing and service delivery."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making the world more connected and efficient through drone technology."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About GSV Drones</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the future of aerial technology with innovative drone solutions 
              for commercial, industrial, and specialized applications.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Company uruvana kadhai will be here.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                ----- ----- -- - - - - - - - - ---- --- -------
                - - - - - - - - -- - - - - - - - -- - - - -- -
              </p>
              <p className="text-lg text-muted-foreground">
                kaj;lfjk askdjf a;laksdjf ;al sdf;alsjkdf a;lsdkjf a;lsdkf a;lkf.
              </p>
            </div>
            <div>
              <img 
                src={aboutImage} 
                alt="GSV Lab"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            "To democratize access to advanced aerial technology, empowering businesses 
            and organizations worldwide to operate more efficiently, safely, and sustainably 
            through innovative drone solutions."
          </p>
        </div>
      </section>
    </div>
  );
}