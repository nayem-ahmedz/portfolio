import { UnifiedProject } from "@/types/project";
import projectsData from '@/data/web-projects.json';
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
    const featuredProjects = (projectsData as UnifiedProject[])
        .filter(project => project.isFeatured)
        .slice(0, 3)
        .reverse();
    return (
        <section className="px-4 py-6 pb-12 md:pb-16">
            <h2 className="text-3xl text-center mb-8 font-medium">Featured Projects</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {
                    featuredProjects.map(project => <ProjectCard key={project.id} project={project} />)
                }
            </section>
        </section>
    );
}