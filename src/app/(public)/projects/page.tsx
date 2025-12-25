"use client";

import { useState } from "react";
import projectsData from "@/data/web-projects.json";
import { UnifiedProject } from "@/types/project";
import { SiReact, SiMongodb } from "react-icons/si";
import { FaList } from "react-icons/fa";
import ProjectCard from "@/components/ui/projects/ProjectCard";

export default function Projects() {
    const [filter, setFilter] = useState<string>("all");
    // Cast data
    const projects = projectsData as UnifiedProject[];
    // Reverse so newest projects appear first, then apply filter
    const filteredProjects = [...projects]
        .reverse()
        .filter((p) => filter === "all" || p.category === filter);
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
                {/* Filter Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="tabs tabs-boxed bg-base-200 p-1">
                        <button
                            type="button"
                            onClick={() => setFilter("all")}
                            className={`tab gap-2 transition-all ${filter === "all" ? "tab-active" : ""}`}
                        >
                            <FaList size={14} /> All
                        </button>
                        <button
                            type="button"
                            onClick={() => setFilter("mern-stack")}
                            className={`tab gap-2 transition-all ${filter === "mern-stack" ? "tab-active" : ""}`}
                        >
                            <SiMongodb size={14} className="text-green-600" /> MERN Stack
                        </button>
                        <button
                            type="button"
                            onClick={() => setFilter("react-js")}
                            className={`tab gap-2 transition-all ${filter === "react-js" ? "tab-active" : ""}`}
                        >
                            <SiReact size={14} className="text-blue-400" /> React JS
                        </button>
                    </div>
                </div>
                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
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