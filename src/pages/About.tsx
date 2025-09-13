import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Target, ChevronLeft, ChevronRight } from "lucide-react";

// Employee profile imports
import aboutImage from "@/assets/About/about.png";
import droneSupportEngineer from "@/assets/About/Selvam.png";
import gcsSoftwareDev from "@/assets/About/Harish.png";
import coOrdinator from "@/assets/About/ezhil.png";
import associateSoftwareDev from "@/assets/About/krithika.png";
import droneSupportEngineer2 from "@/assets/About/kumaran.png";
import hardwareLead from "@/assets/About/thanigai.png";
import founder from "@/assets/About/vasanth.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Gallery imports
import gallery1 from "@/assets/About/Galleryassests/IMG_2299 (2).jpg";
import gallery2 from "@/assets/About/Galleryassests/IMG_2303 (2).jpg";
import gallery3 from "@/assets/About/Galleryassests/working1.jpg";
import gallery4 from "@/assets/About/Galleryassests/img1.jpg";
import gallery5 from "@/assets/About/Galleryassests/IMG_2313 (2).jpg";
import gallery6 from "@/assets/About/Galleryassests/IMG_2305 (2).jpg";
import gallery7 from "@/assets/About/Galleryassests/IMG_2316 (2).jpg";
import gallery8 from "@/assets/About/Galleryassests/IMG_2317 (2).jpg";
import gallery9 from "@/assets/About/Galleryassests/IMG_2324 (2).jpg";
import gallery10 from "@/assets/About/Galleryassests/IMG_2324 (3).jpg";

// Video import
import introVideo from "@/assets/About/videos/Introvideo.mp4";

type Person = {
  id: string;
  name: string;
  designation: string;
  role: string;
  avatar: string;
  videoUrl?: string;
};

export default function About(): JSX.Element {
  const stats = [
    { label: "Years of Experience", value: "0" },
    { label: "Drones Deployed", value: "0" },
    { label: "Countries Served", value: "0" },
    { label: "Team Members", value: "10" },
  ];

  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of drone technology with cutting-edge research and development." },
    { icon: Users, title: "Customer Focus", description: "Building long-term partnerships by delivering solutions that exceed expectations." },
    { icon: Award, title: "Quality", description: "Maintaining the highest standards in manufacturing and service delivery." },
    { icon: Globe, title: "Global Impact", description: "Making the world more connected and efficient through drone technology." },
  ];

  const employees: Person[] = [
    {
      id: "emp-1",
      name: "Mr. S. Vasanth",
      designation: "Founder • GSV Drones",
      role: "Founder of GSV Drone Family, spearheading research and development in advanced aerial technologies. Leading the creation of innovative UAV solutions that shape the future of drone applications.",
      avatar: founder,
      videoUrl: "/employees/mother-intro.mp4",
    },
    {
      id: "emp-2",
      name: "Mr. P. Selvam",
      designation: "Employee • Drone Product Support Engineer",
      role: "Our Drone Product Support Engineers deliver specialized technical expertise to ensure optimal performance, reliability, and compliance of drone systems, while providing precise solutions to customer challenges.",
      avatar: droneSupportEngineer,
      videoUrl: "/employees/father-intro.mp4",
    },
    {
      id: "emp-3",
      name: "Ms. R. Krithika",
      designation: "Employee • Associate Software Engineer",
      role: "Our Associate Software Engineers contribute to the design, development, and testing of innovative software solutions. They collaborate with senior engineers to deliver reliable, scalable, and high-quality applications.",
      avatar: associateSoftwareDev,
      videoUrl: "/employees/sister-intro.mp4",
    },
    {
      id: "emp-4",
      name: "Mr. A. Harish",
      designation: "Employee • GCS Software Dev Lead Engineer",
      role: "Our GCS Software Development Lead Engineers design and drive advanced ground control station solutions, ensuring seamless command, control, and monitoring of drone operations. They lead innovation to deliver reliable, user-friendly, and mission-ready software systems.",
      avatar: gcsSoftwareDev,
      videoUrl: "/employees/vasanth-intro.mp4",
    },
    {
      id: "emp-5",
      name: "Mr. R. Kumaran",
      designation: "Employee • Drone Product Support Engineer",
      role: "Our Drone Product Support Engineers deliver specialized technical expertise to ensure optimal performance, reliability, and compliance of drone systems, while providing precise solutions to customer challenges.",
      avatar: droneSupportEngineer2,
      videoUrl: "/employees/vasanth-intro.mp4",
    },
    {
      id: "emp-6",
      name: "Mr. M. Thanigaivel",
      designation: "Employee • Drone Hardware Team Lead Engineer",
      role: "Our Drone Hardware Team Lead Engineers drive the design, development, and integration of advanced drone hardware systems. They lead teams to deliver reliable, high-performance solutions that power safe and innovative aerial operations.",
      avatar: hardwareLead,
      videoUrl: "/employees/vasanth-intro.mp4",
    },
    {
      id: "emp-7",
      name: "Mr. K. Ezhilarasu",
      designation: "Employee • Drone Project Co-ordination Engineer",
      role: "Our Drone Project Coordination Engineers oversee end-to-end project execution, ensuring timelines, resources, and deliverables are aligned. They bridge technical teams and stakeholders to drive efficient, successful drone deployments.",
      avatar: coOrdinator,
      videoUrl: "/employees/vasanth-intro.mp4",
    },
  ];

  // gallery array
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];

  // states for carousels + lightbox
  const [index, setIndex] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const transitionMs = 600;

  const prev = () => setIndex((i) => (i - 1 + employees.length) % employees.length);
  const next = () => setIndex((i) => (i + 1) % employees.length);
  const goTo = (i: number) => setIndex(i % employees.length);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (ev.key === "Escape") closeLightbox();
      if (ev.key === "ArrowLeft") setLightboxIndex((idx) => (idx! - 1 + gallery.length) % gallery.length);
      if (ev.key === "ArrowRight") setLightboxIndex((idx) => (idx! + 1) % gallery.length);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    if (lightboxIndex !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prevOverflow;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, gallery.length]);

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

        {/* Swiper Gallery */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h4 className="text-2xl font-semibold mb-8">Our Gallery</h4>

            <div className="w-full flex justify-center">
              <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  spaceBetween={60}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 220,
                    modifier: 1.7,
                    slideShadows: false,
                  }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="w-full max-w-7xl"
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {gallery.map((src, i) => (
                    <SwiperSlide
                        key={i}
                        style={{
                          width: "50vw",
                          maxWidth: "1100px",
                          height: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                    >
                      <div
                          className={`relative w-full rounded-2xl overflow-hidden transform transition-all duration-500 ${
                              activeIndex === i ? "scale-105 shadow-2xl" : "scale-95 opacity-85"
                          } hover:scale-105 cursor-pointer`}
                          style={{ aspectRatio: "16/9", minHeight: 360 }}
                          onClick={() => openLightbox(i)}
                      >
                        <img src={src} alt={`gallery-${i}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">Click an image to view fullscreen. Use arrow keys or swipe inside to navigate.</p>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex !== null && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                onClick={() => closeLightbox()}
                role="dialog"
                aria-modal="true"
            >
              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((idx) => (idx! - 1 + gallery.length) % gallery.length);
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-3 hover:bg-black/40 text-white z-50"
                  aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((idx) => (idx! + 1) % gallery.length);
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-3 hover:bg-black/40 text-white z-50"
                  aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="max-w-[95vw] max-h-[95vh] flex items-center justify-center">
                <img
                    src={gallery[lightboxIndex]}
                    alt={`lightbox-${lightboxIndex}`}
                    className="max-w-full max-h-full rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />
              </div>

              <button
                  onClick={() => closeLightbox()}
                  className="absolute top-6 right-6 text-white text-2xl rounded-md bg-black/30 px-3 py-1 hover:bg-black/40 z-50"
                  aria-label="Close lightbox"
              >
                ✕
              </button>
            </div>
        )}

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

        {/* Video Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Our Journey in Motion</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Watch our story unfold — innovation, passion, and dedication captured in every frame.
            </p>

            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <video
                  src={introVideo}
                  controls
                  className="w-full h-auto rounded-xl bg-black"
                  preload="metadata"
              />
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

        {/* Employees Section */}
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
                {employees.map((emp, i) => {
                  const imgMode = emp.id === "emp-1" ? "object-cover object-left-bottom" : "object-contain";
                  return (
                      <div
                          key={emp.id}
                          className="w-full flex-shrink-0 flex flex-col items-center px-6 text-center"
                          style={{ width: `${100 / employees.length}%` }}
                      >
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
                          <img src={emp.avatar} alt={emp.name} className={`w-full h-full ${imgMode} block`} />
                        </div>
                        <h3 className="text-2xl font-semibold">{emp.name}</h3>
                        <p className="text-primary font-medium">{emp.designation}</p>
                        <p className="mt-4 max-w-lg text-muted-foreground text-justify">{emp.role}</p>
                        <div className="mt-6 flex gap-3">
                          {emp.videoUrl ? (
                              <a
                                  href={emp.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-primary text-white rounded-md hover:brightness-95"
                              >
                                Info
                              </a>
                          ) : (
                              <button className="px-4 py-2 bg-slate-200 text-slate-600 rounded-md" disabled>
                                No Intro
                              </button>
                          )}
                          <a href="#contact" className="px-4 py-2 border border-slate-200 rounded-md hover:bg-slate-50">
                            Contact
                          </a>
                        </div>
                      </div>
                  );
                })}
              </div>

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
