import ProfileImage from "@/components/shared/ProfileImage";
import Services from "@/components/ui/homepage/Services";
import { CgProfile } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";

export default function About() {
    return (
        <section className='px-4 py-10'>
            <title>About | Nayem Ahmed</title>
            <div className='text-center'>
                <div className="w-fit mx-auto">
                    <ProfileImage />
                </div>
                <h1 className='text-3xl md:text-4xl mt-4 mb-2'>Nayem Ahmed</h1>
                <p className="text-xl">Support Engineer <a className="link link-hover" href="https://www.appifylab.com" target='_blank' rel='noopener noreferrer'>@Appifylab</a> | Full-stack Web Developer</p>
            </div>
            <article className='mb-8'>
                <h3 className='flex gap-3 items-center text-2xl md:text-3xl my-3 mt-8'> <CgProfile /> About Me</h3>
                <p>
                    I'm Nayem Ahmed, currently working as a Support Engineer at Appifylab, Sylhet, where I primarily work on a SaaS LMS platform, EzyCourse. In this role, I collaborate with real users and live systems to troubleshoot issues, improve performance, and ensure a smooth and reliable product experience.
                    <br />
                    Alongside my professional work, I am a Full-Stack JavaScript Developer specializing in the MERN stack. I enjoy building scalable, efficient, and user-friendly web applications, with a strong focus on translating real-world business needs into practical technical solutions.
                </p>
                <h4 className="text-2xl my-2">Technical Expertise</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Proficient in full-stack JavaScript development using React.js, Node.js, Express.js, MongoDB, and RESTful APIs</li>
                    <li>Strong understanding of frontend engineering, including responsive UI design, component-driven architecture, and modern state management</li>
                    <li>Experience working with real-world SaaS systems, handling API interactions, debugging issues, and analyzing system behavior</li>
                    <li>Familiar with authentication systems such as Firebase Auth and JWT-based custom authentication</li>
                    <li>Skilled in API design, data handling, and building secure and scalable backend services</li>
                    <li>Comfortable with Git, GitHub, Linux environments, Postman, and deployment platforms like Vercel and Render</li>
                </ul>
                <h4 className="flex gap-3 text-2xl md:text-3xl my-3 mt-6">Professional Interests & Goals</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Improving backend expertise and system design through real-world SaaS product experience</li>
                    <li>Deepening knowledge of Next.js, modern full-stack architectures, and scalable web systems</li>
                    <li>Understanding user behavior and product performance to build more reliable and user-centric applications</li>
                    <li>Contributing to collaborative engineering environments and continuously improving development workflows</li>
                </ul>
                <h3 className='flex gap-3 items-center text-2xl md:text-3xl my-3 mt-6'> <FaUserGraduate /> Education</h3>
                <h4>B.Sc in Computer Science and Engineering</h4>
                <h4>Metropolitan University, Sylhet</h4>
                <p>2022 - 2026 </p>
                <p>Courseworks : Machine Learning, Data Strucutre, Algorithm, Database, Object Oriented Programming...</p>
            </article>
            <Services />
        </section>
    );
}