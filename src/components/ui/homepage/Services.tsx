import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

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
            name: "Web Design",
            details:
                "I can turn your ideas into amazing figma design, from scratch. I have more then two years experience in this field. I am familiar with designing platform like Figma, Canva and Adobe Tools such as Photoshop and Illustrator",
            link: "/contact",
            linkText: "Share Your Ideas",
            linkInternal: true,
        },
        {
            id: 2,
            icon: FaLaptopCode,
            name: "Front-end Web Development",
            details:
                "I can transform your any design ideas into Responsive website. I can provide you best and clean code. When I work on a project, I keep 4 tabs open so that I can develop a web application to suit well in all devices",
            link: "/projects",
            linkText: "View Live Projects",
            linkInternal: true,
        },
        {
            id: 3,
            icon: FaDatabase,
            name: "Backend and Database Management",
            details:
                "I am capable to perform backend task using PHP. It is a very simple and easy programming language that was created only for web. I have a good understanding in Structured Database System such as MySQL",
            link: "https://github.com/nayem-ahmedz/",
            linkText: "View Github Repo",
            linkInternal: false,
        },
    ];
    return (
        <section className="p-4">
            <article>
                <h3 className="text-3xl text-center mb-4">My Services</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                    {
                        services.map((el) => {
                            const Icon = el.icon;
                            return (
                                <div className="card bg-base-200 shadow-sm" key={el.id}>
                                    <div className="card-body p-4 md:p-6 lg:p-8">
                                        <Icon className="text-2xl" />
                                        <h2 className="card-title text-xl">{el.name}</h2>
                                        <p>{el.details}</p>
                                        <div className="card-actions justify-end">
                                            {/* <button className="btn btn-primary">Buy Now</button> */}
                                            {
                                                el.linkInternal ? <Link href={el.link} className="btn btn-primary btn-outline"> {el.linkText} </Link> : <a href={el.link} target='_blank' rel='noopener noreferrer' className="btn btn-primary btn-outline"> {el.linkText} </a>
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