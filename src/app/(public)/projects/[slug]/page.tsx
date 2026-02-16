import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from 'next';

// React Icons
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiFirebase, SiTailwindcss, SiJavascript, SiFramer } from "react-icons/si";
import projectDetails from "@/lib/projectDetails";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = await projectDetails(slug);
    return {
        title: project ? `${project.name} | Project Details` : 'Project Not Found',
        description: project?.shortSummary,
    };
}

// Updated Helper with React.ReactNode
const getTechIcon = (tech: string): React.ReactNode => {
    const iconMap: Record<string, React.ReactNode> = {
        "React": <SiReact className="text-blue-400" />,
        "Node.js": <SiNodedotjs className="text-green-500" />,
        "Express": <SiExpress />,
        "MongoDB": <SiMongodb className="text-green-600" />,
        "Firebase": <SiFirebase className="text-yellow-500" />,
        "TailwindCSS": <SiTailwindcss className="text-cyan-400" />,
        "JavaScript": <SiJavascript className="text-yellow-400" />,
        "Motion": <SiFramer className="text-purple-500" />,
    };
    return iconMap[tech] || null;
};

export default async function ProjectDetails({ params }: Props) {
    const { slug } = await params;
    const project = await projectDetails(slug);
    if (!project) notFound();

    return (
        <section className="min-h-screen bg-base-100 pb-20">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <Link href="/projects" className="btn btn-ghost gap-2 normal-case">
                    <FaArrowLeft /> Back to Projects
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Content Section */}
                    <div className="lg:col-span-8 space-y-10">
                        <section>
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-base-300">
                                <img
                                    src={project.screenshots[0]}
                                    alt={project.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-3xl font-bold">About the Project</h2>
                            <div className="prose prose-lg max-w-none opacity-80 whitespace-pre-line leading-relaxed">
                                {project.description}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-base-200 rounded-2xl">
                                        <FaCheckCircle className="text-success mt-1 shrink-0" />
                                        <span className="font-medium text-sm md:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="card bg-base-200 shadow-xl sticky top-10">
                            <div className="card-body gap-6">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge badge-secondary">{project.category}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold border-b border-base-300 pb-2">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <div key={t} className="badge badge-lg gap-2 py-5 bg-base-100 border-base-300">
                                                {getTechIcon(t)}
                                                <span className="text-xs font-bold uppercase tracking-tight">{t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 pt-4">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full gap-2">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    {
                                        project.repositories?.map((repo, index) => (
                                            <a
                                                key={index}
                                                href={repo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline w-full gap-2"
                                            >
                                                {getRepoIcon(repo.label)}
                                                {repo.label} Code
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const getRepoIcon = (label: string) => {
    switch (label) {
        case 'Client': return <FaGithub />;
        case 'Server': return <FaGithub />;
        default: return <FaGithub />; // For "Source" or others
    }
};