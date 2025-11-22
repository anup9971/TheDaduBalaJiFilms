// components/AboutSection.jsx
"use client";

import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#1e1b2c] pb-65 md:pb-18 text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase text-orange-500 font-semibold">
            Who is The Dadu BalaJi Films ?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Video Production Company
          </h2>
          <p className="text-gray-300">
            The Dadu BalaJi Films, your go-to Video Production Company in Delhi NCR! As
            one of the leading film production companies in Delhi, we specialize
            in crafting high-quality video productions that captivate audiences
            and elevate brands.
          </p>
          <p className="text-gray-300">
            Our Professional Adfilm &{" "}
            <span className="text-orange-500 underline cursor-pointer">
              Video Production House in Delhi NCR
            </span>{" "}
            is dedicated to creating outstanding corporate videos that tell
            your unique story. Our talented team excels in producing a wide
            range of content, including engaging interviews, compelling
            testimonials, dynamic ad films, creative films, captivating short
            films, impactful television ad films, thought-provoking CSR videos,
            insightful documentaries, eye-catching stop motion animations, and
            informative explainer videos. With a passion for storytelling and a
            commitment to excellence, we are here to bring your vision to life
            in a visually stunning and memorable way.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold">
              We Are Experts
            </button>
            {/* <div className="flex items-center gap-3">
              <Image
                src="/hero1.jpg" // replace with actual avatar image
                alt="Avantika Saini"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">Avantika Saini</p>
                <p className="text-gray-400 text-sm">Founder & CEO</p>
              </div>
            </div> */}
          </div>

          <div className="flex gap-10 mt-10 text-center">
            <div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">8k</h3>
              <p className="text-gray-400">Project Completed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">7k</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative w-full h-[500px] md:h-[550px]">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
            <Image
              src="/hero1.jpg" // replace with actual image
              alt="Video 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-1/3 left-0 w-60 h-40 md:w-80 md:h-56 rounded-lg overflow-hidden">
            <Image
              src="/hero4.jpg" // replace with actual image
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-56 h-36 md:w-72 md:h-44 rounded-lg overflow-hidden">
            <Image
              src="/videoimg.jpg" // replace with actual image
              alt="Video Shoot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
