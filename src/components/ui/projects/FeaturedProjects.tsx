import { ProjectCardT } from "@/types/project";
import ProjectCard from "./ProjectCard";
import featuredProjects from "@/lib/featuredProjects";

export const revalidate = 3600; // Cache for 1 hour

export default async function FeaturedProjects() {
    const projects: ProjectCardT[] = await featuredProjects();
    return (
        <section className="px-4 py-6 pb-12 md:pb-16">
            <h2 className="text-3xl text-center mb-8 font-medium">Featured Projects</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {
                    (!projects || projects.length === 0) ? <p className="text-gray-500 text-center col-span-full">No featured projects found at the moment.</p> : projects.map(project => <ProjectCard key={project.slug} project={project} />)
                }
            </section>
        </section>
    );
}