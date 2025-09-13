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
};

export default function About(): JSX.Element {
  // Values
  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of drone technology with cutting-edge research and development." },
    { icon: Users, title: "Customer Focus", description: "Building long-term partnerships by delivering solutions that exceed expectations." },
    { icon: Award, title: "Quality", description: "Maintaining the highest standards in manufacturing and service delivery." },
    { icon: Globe, title: "Global Impact", description: "Making the world more connected and efficient through drone technology." },
  ];

  // Employees
  const employees: Person[] = [
    { id: "emp-1", name: "Mr. S. Vasanth", designation: "Founder • GSV Drones", role: "Founder of GSV Drone Family spearheading research and UAV innovation.", avatar: founder },
    { id: "emp-2", name: "Mr. P. Selvam", designation: "Drone Product Support Engineer", role: "Delivers technical expertise to ensure optimal drone performance.", avatar: droneSupportEngineer },
    { id: "emp-3", name: "Ms. R. Krithika", designation: "Associate Software Engineer", role: "Contributes to innovative software solutions.", avatar: associateSoftwareDev },
    { id: "emp-4", name: "Mr. A. Harish", designation: "GCS Software Dev Lead Engineer", role: "Designs advanced ground control station solutions.", avatar: gcsSoftwareDev },
    { id: "emp-5", name: "Mr. R. Kumaran", designation: "Drone Product Support Engineer", role: "Provides precise solutions ensuring drone system compliance.", avatar: droneSupportEngineer2 },
    { id: "emp-6", name: "Mr. M. Thanigaivel", designation: "Drone Hardware Team Lead Engineer", role: "Leads teams delivering reliable hardware solutions.", avatar: hardwareLead },
    { id: "emp-7", name: "Mr. K. Ezhilarasu", designation: "Drone Project Co-ordination Engineer", role: "Oversees projects ensuring timelines and success.", avatar: coOrdinator },
  ];

  // Gallery
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  return (
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-muted text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">About GSV Drones</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the future of aerial technology with innovative drone solutions for commercial, industrial, and specialized applications.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                From <strong>Naickkan Thoppu, Tamil Nadu</strong>, the GSV Drone Family made history as <strong>India’s first DGCA-certified drone family</strong>.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                United by the belief that <strong>“flying together is our strength”</strong>, our family combines expertise in piloting, engineering, and instruction.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                Today, we stand as <strong>pioneers in India’s drone revolution</strong>. Our vision is to promote safe, responsible, and innovative drone practices.
              </p>
            </div>
            <div>
              <img src={aboutImage} alt="GSV Lab" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h4 className="text-2xl font-semibold mb-8">Our Gallery</h4>
            <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                spaceBetween={60}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 220, modifier: 1.7, slideShadows: false }}
                pagination={{ clickable: true }}
                navigation
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full max-w-7xl"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {gallery.map((src, i) => (
                  <SwiperSlide key={i} style={{ width: "50vw", maxWidth: "1100px" }}>
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
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground mb-16">The principles that guide everything we do</p>
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
            <p className="text-lg text-muted-foreground mb-8">Watch our story unfold — innovation, passion, and dedication captured in every frame.</p>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <video src={introVideo} controls className="w-full h-auto rounded-xl bg-black" preload="metadata" />
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

        {/* Employees Swiper Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-12">Meet Our Team</h3>
            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
            >
              {employees.map((emp) => (
                  <SwiperSlide key={emp.id}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 bg-white">
                        <img src={emp.avatar} alt={emp.name} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-xl font-semibold">{emp.name}</h3>
                      <p className="text-primary font-medium">{emp.designation}</p>
                      <p className="mt-3 text-sm text-muted-foreground max-w-sm">{emp.role}</p>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
  );
}
