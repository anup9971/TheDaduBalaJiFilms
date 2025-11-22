"use client";
import { motion } from "framer-motion";

export default function VideoProcess() {
  const steps = [
    { id: "01", title: "Meet & Greet", color: "bg-[#E97C6E]" },
    { id: "02", title: "Pre-Production", color: "bg-[#39394A]" },
    { id: "03", title: "Production", color: "bg-[#3F3F52]" },
    { id: "04", title: "Post-Production", color: "bg-[#A78BFA]" },
  ];

  return (
    <section className="w-full bg-[#0d0d16] py-20 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`${step.color} rounded-xl p-10 text-white shadow-lg`}
            >
              <h2 className="text-5xl font-bold mb-3 opacity-90">{step.id}.</h2>
              <p className="text-lg opacity-90">{step.title}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-pink-400 font-semibold tracking-wider mb-3">
            OUR PROCESS
          </p>
          <h1 className="text-4xl font-bold text-white leading-snug mb-6">
            Our Video Production Process
          </h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            As a leading video production agency, we follow a streamlined,
            collaborative process from concept to final cut. From brainstorming
            creative ideas to seamless execution and post-production, we ensure
            every step is handled with precision and creativity to deliver videos
            that make an impact.
          </p>

          <button className="bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
