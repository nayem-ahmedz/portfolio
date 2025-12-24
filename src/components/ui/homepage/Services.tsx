import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// 1. Define a TypeScript type
type Service = {
    id: number;
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    details: string;
    link: string;
    linkText: string;
    linkInternal: boolean;
};

export default function Services() {
    const services: Service[] = [
        {
            id: 1,
            icon: FaFigma,
            name: "UI/UX & Web Design",
            details: 'I create modern, user-centric designs in Figma that prioritize accessibility and user experience. I focus on building high-fidelity wireframes and prototypes that translate seamlessly into pixel-perfect code.',
            link: "/contact",
            linkText: "Start a Project",
            linkInternal: true,
        },
        {
            id: 2,
            icon: FaLaptopCode,
            name: "Full-stack React Development",
            details: 'Specializing in Next.js and React, I build fast, SEO-friendly, and responsive front-end applications. I ensure clean state management and smooth user interfaces across all device types.',
            link: "/projects",
            linkText: "View My Work",
            linkInternal: true,
        },
        {
            id: 3,
            icon: FaDatabase,
            name: "MERN Backend Solutions",
            details: 'I develop scalable server-side applications using Node.js and Express. From designing RESTful APIs to managing NoSQL databases with MongoDB, I focus on security, speed, and data integrity.',
            link: "https://github.com/nayem-ahmedz/",
            linkText: "Check My Code",
            linkInternal: false,
        },
    ];
    const btnStyles = "flex items-center gap-2 text-primary font-bold group transition-all";
    const arrowStyles = "group-hover:translate-x-2 transition-transform text-xl";
    return (
        <section className="p-4">
            <article>
                <h3 className="text-3xl text-center mb-4 font-medium">What I Offer</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                    {
                        services.map((el) => {
                            const Icon = el.icon;
                            return (
                                <div className="card bg-base-200 shadow-sm" key={el.id}>
                                    <div className="card-body p-4 md:p-6 lg:p-8">
                                        <Icon className="text-2xl mb-2" />
                                        <h2 className="card-title text-xl">{el.name}</h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {el.details}
                                        </p>
                                        <div className="card-actions justify-end">
                                            {
                                                el.linkInternal ? <Link href={el.link} className={btnStyles}>
                                                    {el.linkText}
                                                    <FaLongArrowAltRight className={arrowStyles} />
                                                </Link> : <a href={el.link} target='_blank' rel='noopener noreferrer' className={btnStyles}>
                                                    {el.linkText}
                                                    <FaLongArrowAltRight className={arrowStyles} />
                                                </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    );
}