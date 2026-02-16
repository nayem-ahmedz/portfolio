import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import Skills from "@/components/ui/homepage/Skills";
import FeaturedProjects from "@/components/ui/projects/FeaturedProjects";
import FeaturedProjectsSkeleton from "@/components/ui/projects/FeaturedProjectsSkeleton";
import { Suspense } from "react";

export const revalidate = 3600; // Cache for 1 hour

export default function Page() {
    return (
        <>
            <Hero />
            <Services />
            <Skills />
            <Suspense fallback={<FeaturedProjectsSkeleton />}>
                <FeaturedProjects />
            </Suspense>
        </>
    );
}