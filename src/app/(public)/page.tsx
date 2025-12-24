// import Image from "next/image";

import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import Skills from "@/components/ui/homepage/Skills";
import FeaturedProjects from "@/components/ui/projects/FeaturedProjects";

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <Skills />
        <FeaturedProjects />
    </>
  );
}