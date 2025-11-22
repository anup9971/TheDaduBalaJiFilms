"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
  <>
  <div  className="bg-[#1a1427]">
      <section className=" text-white px-6 md:px-40 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between ">
      
      {/* Left Text */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Video Production & <br /> Adfilm Agency in Delhi NCR India
        </motion.h1>

        <motion.p
          className="mt-4 text-sm md:text-base text-gray-300"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          BRAND GROWTH | CINEMATIC VISUALS | STRATEGIC STORYTELLING
        </motion.p>
      </motion.div>

      {/* Right Image */}
      {/* <div className="flex-1 flex justify-center md:justify-end w-full">
        <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] rounded-[30%] overflow-hidden  border-white">
          <Image
            src="/hero1.jpg"
            alt="Video Production"
            fill
            className="object-cover"
          />
        </div>
      </div>
       */}
       <div className="flex-1 flex justify-center md:justify-end w-full">
  <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] rounded-[30%] overflow-hidden border-white">
    <video
      src="/vd1.mp4" // replace with your video path
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </section>

      <section className=" text-white md:px-40 px-6  py-12  flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      
      {/* Left Text */}
      <div className=" flex-1 flex justify-center md:justify-end w-full">
      
        {/* <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] rounded-[30%] overflow-hidden ">
          <Image
            src="/hero3.jpg"
            alt="Video Production"
            fill
            className="object-cover"
          />
        </div>
        */}

        <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] rounded-[30%] overflow-hidden">
  <video
    src="/vd2.mp4"   // <-- apna video path daalna
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>

      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-xl md:mt-[-110px]">
       <p className="mt-6 text-gray-200 text-sm md:text-base">
          One of the{" "}
          <a
            href="#"
            className="text-orange-400 underline"
          >
            professional Video production house in delhi ncr
          </a>
          . As a leading full-service video production house in Delhi NCR,
          recognized as a top video production company and film production
          company in Delhi NCR. We specialize in ad films, corporate videos,
          2D/3D animations, documentaries, post-production, UGC content, video
          SEO, and paid ad solutions — helping brands across India grow through
          powerful storytelling.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            GET STARTED
          </button>
          {/* <div className="flex -space-x-2 items-center">
            <Image
              src="/avatar1.jpg"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
              alt="client"
            />
            <Image
              src="/avatar2.jpg"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
              alt="client"
            />
            <span className="ml-2 text-sm text-gray-300">Happy Clients</span>
          </div> */}
        </div>
      </div>



      
    </section>
  </div>
  </>
  );
}
