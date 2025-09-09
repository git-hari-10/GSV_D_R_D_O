import React, { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Target, ChevronLeft, ChevronRight } from "lucide-react";
import aboutImage from "@/assets/about-lab.jpg";

/**
 * Note:
 * - Replace the image/video paths in `employees` with your actual imported assets if you prefer bundling:
 *   import emp1 from "@/assets/team1.jpg";
 *   then use avatar: emp1
 */

type Person = {
  id: string;
  name: string;
  designation: string;
  role: string;
  avatar: string; // url or imported path
  videoUrl?: string;
};

export default function About(): JSX.Element {
  const stats = [
    { label: "Years of Experience", value: "0" },
    { label: "Drones Deployed", value: "0" },
    { label: "Countries Served", value: "0" },
    { label: "Team Members", value: "0" },
  ];

  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of drone technology with cutting-edge research and development." },
    { icon: Users, title: "Customer Focus", description: "Building long-term partnerships by delivering solutions that exceed expectations." },
    { icon: Award, title: "Quality", description: "Maintaining the highest standards in manufacturing and service delivery." },
    { icon: Globe, title: "Global Impact", description: "Making the world more connected and efficient through drone technology." },
  ];

  // --- Replace these with your real assets or imports if available ---
  const employees: Person[] = [
    {
      id: "emp-1",
      name: "Mr. G. Subramani",
      designation: "Father • Certified Pilot",
      role: "DGCA-certified Small & Medium Rotorcraft Pilot, bringing agricultural expertise to drone operations.",
      avatar: "/employees/father.jpg",
      videoUrl: "/employees/father-intro.mp4",
    },
    {
      id: "emp-2",
      name: "Mrs. S. Chitra",
      designation: "Mother • Certified Pilot",
      role: "DGCA-certified Small & Medium Rotorcraft Pilot, passionate about drone literacy for women in rural areas.",
      avatar: "/employees/mother.jpg",
      videoUrl: "/employees/mother-intro.mp4",
    },
    {
      id: "emp-3",
      name: "Ms. S. Deepika",
      designation: "Sister • Drone Instructor",
      role: "DGCA-certified Drone Instructor, training the next generation of drone pilots with hands-on programs.",
      avatar: "/employees/sister.jpg",
      videoUrl: "/employees/sister-intro.mp4",
    },
    {
      id: "emp-4",
      name: "Mr. S. Vasanth",
      designation: "Son • Drone Engineer",
      role: "Founder of GSV Drone Family, leading R&D initiatives and building innovative UAV solutions.",
      avatar: "/employees/vasanth.jpg",
      videoUrl: "/employees/vasanth-intro.mp4",
    },
  ];

  // --- Carousel state (manual only) ---
  const [index, setIndex] = useState<number>(0);
  const [openVideoFor, setOpenVideoFor] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const transitionMs = 600;

  // Move to previous (wraps)
  const prev = () => {
    setIndex((i) => (i - 1 + employees.length) % employees.length);
  };

  // Move to next (wraps)
  const next = () => {
    setIndex((i) => (i + 1) % employees.length);
  };

  // Jump to a specific slide
  const goTo = (i: number) => {
    setIndex(i % employees.length);
  };

  return (
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">About GSV Drones</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading the future of aerial technology with innovative drone solutions for commercial, industrial, and specialized applications.
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
                <p className="text-lg text-muted-foreground mb-6 text-justify">
                  From <strong>Naickkan Thoppu, Tamil Nadu</strong>, the GSV Drone Family made history as <strong>India’s first DGCA-certified drone family</strong>, holding both Small and Medium Rotorcraft Pilot Certificates. What began as a passion has grown into a national milestone.
                </p>
                <p className="text-lg text-muted-foreground mb-6 text-justify">
                  United by the belief that <strong>“flying together is our strength”</strong>, our family combines expertise in piloting, engineering, and instruction. Together, we drive innovation in <em>smart agriculture, aerial surveying, youth mentorship, and drone awareness</em>.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  Today, we stand as <strong>pioneers in India’s drone revolution</strong>. Our vision is to promote safe, responsible, and innovative drone practices while collaborating with farmers, institutions, and startups to empower the nation through drone technology.
                </p>
              </div>

              <div>
                <img src={aboutImage} alt="GSV Lab" className="rounded-lg shadow-xl w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                  <div key={i} className="text-white">
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
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                  <Card key={i} className="text-center border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
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
              "To democratize access to advanced aerial technology, empowering businesses and organizations worldwide to operate more efficiently, safely, and sustainably through innovative drone solutions."
            </p>
          </div>
        </section>

        {/* Employees (manual carousel) */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold">Meet Our Team</h3>
                <p className="text-muted-foreground">Engineers, pilots & operators who make it happen</p>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-800/80 text-white">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-800/80 text-white">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <div
                  ref={trackRef}
                  className="flex transition-transform ease-in-out"
                  style={{
                    width: `${employees.length * 100}%`,
                    transform: `translateX(-${index * (100 / employees.length)}%)`,
                    transitionDuration: `${transitionMs}ms`,
                  }}
              >
                {employees.map((emp, i) => (
                    <div
                        key={emp.id}
                        className="w-full flex-shrink-0 flex flex-col items-center px-6 text-center"
                        style={{ width: `${100 / employees.length}%` }}
                    >
                      <img src={emp.avatar} className="w-40 h-40 rounded-full object-cover shadow-lg mb-6" />
                      <h3 className="text-2xl font-semibold">{emp.name}</h3>
                      <p className="text-primary font-medium">{emp.designation}</p>
                      <p className="mt-4 max-w-lg text-muted-foreground">{emp.role}</p>
                      <div className="mt-6 flex gap-3">
                        {emp.videoUrl ? (
                            <a
                                href={emp.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-primary text-white rounded-md hover:brightness-95"
                            >
                              Watch Intro
                            </a>
                        ) : (
                            <button className="px-4 py-2 bg-slate-200 text-slate-600 rounded-md" disabled>No Intro</button>
                        )}
                        <a href="#contact" className="px-4 py-2 border border-slate-200 rounded-md hover:bg-slate-50">Contact</a>
                      </div>
                    </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-8 gap-3">
                {employees.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to ${i + 1}`}
                        className={`w-3 h-3 rounded-full transition ${i === index ? "bg-primary scale-110" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
