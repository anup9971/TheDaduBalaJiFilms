// components/ServicesSection.jsx
"use client";

import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    title: "Television Commercial",
    description:
      "Stand out with The Dadu BalaJi Films — a leading TVC agency in Delhi NCR offering complete television commercial production. From concept to post-production, our expert ad film makers in Delhi NCR craft high-impact ads for TV, YouTube, OTT, and digital platforms.",
    image: "/hero5.jpg", // replace with your service images
  },
  {
    id: 2,
    title: "Corporate Films",
    description:
      "We create corporate films that elevate your brand story, including interviews, case studies, and internal communications.",
    image: "/hero6.jpg",
  },
  // Add more services as needed
];

export default function ServicesSection() {
  return (
    <section className="bg-[#1e1b2c] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading */}
        <div className="space-y-3">
          <p className="text-sm uppercase text-orange-500 font-semibold">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Advertising & marketing video production services
          </h2>
          <p className="text-gray-300">
            As a Delhi-based <strong>video production company</strong>, The Dadu BalaJi Films delivers high-impact video solutions tailored to your
            brand goals. We specialize in{" "}
            <strong>
              Television Commercials, Documentary Films, Corporate Films, Post
              Production, Animated Video Production
            </strong>
            , and <strong>Social Media Videos</strong>. Our creative team blends
            storytelling and strategy to craft videos that engage and drive
            results.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full md:w-1/2 h-80 md:h-96">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                {/* Optional overlay like phone frames or graphics can be added here */}
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="text-6xl font-bold text-purple-500 opacity-20">
                  0{service.id}.
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold mt-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
