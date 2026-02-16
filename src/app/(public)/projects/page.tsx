import ProjectCard from "@/components/ui/projects/ProjectCard";
import allProjects from "@/lib/allProjects";
import { ProjectCardT } from "@/types/project";

export const revalidate = 3600; // Cache for 1 hour

export default async function Projects() {
    const projects : ProjectCardT[] = await allProjects();
    return (
        <section className="min-h-screen bg-base-100 py-12 px-4">
            <title>Projects | Nayem Ahmed</title>
            <div className="max-w-7xl mx-auto">
                {/* Header & Intro */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        A collection of full-stack applications and frontend interfaces I&apos;ve built using the MERN stack and React.
                    </p>
                </div>
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 opacity-50">
                        <p className="text-xl font-medium">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}