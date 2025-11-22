import Image from "next/image";
import HeroSection from "./componets/home/HeroSection";
import Map from "./componets/home/Map";
import AboutSection from "./componets/home/AboutSection";
import ServicesSection from "./componets/home/ServicesSection";
import VideoProcess from "./componets/home/VideoProcess";

export default function Home() {
  return (
<>
<HeroSection/>
<AboutSection/>
<ServicesSection/>
<VideoProcess/>
<Map/>
</>
  );
}
