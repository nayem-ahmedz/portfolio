import ProjectCard from "./ProjectCard";

export default function FeaturedProjects(){
    return(
        <section className="px-4 py-6">
            <h2 className="text-3xl text-center mb-8 font-medium">Featured Projects</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </section>
    );
}