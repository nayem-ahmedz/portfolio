'use client';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "motion/react"
import { useState } from "react";

export type SkillCategory = {
    title: string;
    skills: {
        name: string;
        icon: React.ComponentType<{ className?: string }>;
        colorClass: string;
    }[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: TbBrandNextjs, colorClass: "text-black" },
      { name: "React.js", icon: FaReact, colorClass: "text-[#61DBFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-[#38B2AC]" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
      { name: "HTML5", icon: FaHtml5, colorClass: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, colorClass: "text-[#1572B6]" },
    ],
  },
  {
    title: "Backend and Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, colorClass: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, colorClass: "text-gray-700" },
      { name: "MongoDB", icon: SiMongodb, colorClass: "text-[#47A248]" },
      { name: "MySQL", icon: SiMysql, colorClass: "text-[#4479A1]" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, colorClass: "text-[#F05032]" },
      { name: "Python", icon: FaPython, colorClass: "text-[#3776AB]" },
    ],
  },
];

export default function Skills() {
    const [filter, setFilter] = useState<string>("All");
    const filteredSkills = skillsData.filter(
        (category) => filter === "All" || category.title === filter
    );
    const categories = ["All", "Frontend", "Backend and Database", "Tools & Others"];
    return (
        <section className="px-4 py-6">
            <h2 className="text-3xl text-center mb-8 font-medium">My Skills</h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`btn btn-sm ${filter === cat ? "btn-primary" : "btn-outline"
                            }`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="space-y-10">
                {filteredSkills.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-xl md:text-2xl font-medium mb-4">{category.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-center p-4 bg-base-200 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                                    >
                                        <Icon className={`text-4xl mb-2 ${skill.colorClass}`} />
                                        <p className="text-sm text-center">{skill.name}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}