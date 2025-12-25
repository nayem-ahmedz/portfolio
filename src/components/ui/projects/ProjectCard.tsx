import { UnifiedProject } from "@/types/project";
import Link from "next/link";

interface ProjectCardProps {
    project: UnifiedProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <section className="card bg-base-200 shadow-md border border-gray-300 dark:border-gray-700">
            <figure>
                <img src={project.media.screenshot} alt={project.name} className="aspect-video object-cover w-full" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl">{project.name}</h2>
                    {/* Badge logic based on your stack.type */}
                    <div className={`badge ${project.stack.type === 'Fullstack' ? 'badge-secondary' : 'badge-ghost'}`}>
                        {project.stack.type}
                    </div>
                </div>
                <p className="text-sm opacity-70 line-clamp-2 grow-0">
                    {project.shortSummary}
                </p>
                {/* Tech Badges Section */}
                <div className="card-actions justify-start mt-2 grow">
                    {project.tech.map((t) => (
                        <div key={t} className="badge badge-outline badge-sm border-gray-300 dark:border-gray-700">{t}</div>
                    ))}
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link href={`/projects/${project.slug}`} className="btn btn-primary btn-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </section>
    );
}