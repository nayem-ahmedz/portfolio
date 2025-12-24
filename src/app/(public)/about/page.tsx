import ProfileImage from "@/components/shared/ProfileImage";
import Services from "@/components/ui/homepage/Services";
import { CgProfile } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";

export default function About() {
    return (
        <section className='px-4 py-10'>
            <title>About | Nayem Ahmed</title>
            <div className='text-center'>
                <div className="w-fit mx-auto">
                    <ProfileImage />
                </div>
                <h1 className='text-3xl md:text-4xl my-2'>Nayem Ahmed</h1>
                <p className="text-xl">Full-stack Web Developer</p>
            </div>
            <article className='mb-8'>
                <h3 className='flex gap-3 items-center text-2xl md:text-3xl my-3 mt-8'> <CgProfile /> About Me</h3>
                <p>
                    I am Nayem Ahmed, a dedicated Full-Stack JavaScript Developer specializing in the MERN stack. I focus on building reliable, efficient, and user-friendly web applications. With hands-on experience across frontend and backend technologies, I enjoy transforming business requirements into scalable technical solutions.
                </p>
                <h4 className="text-2xl my-2">Technical Expertise</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Proficient in React.js, Node.js, Express.js, MongoDB, and RESTful API development</li>
                    <li>Strong understanding of frontend engineering, including responsive UI, component-driven architecture, and state management</li>
                    <li>Experience integrating authentication systems, including Firebase Auth and custom backend auth such as JWT Token</li>
                    <li>Skilled in API design, data modeling, and secure backend development</li>
                    <li>Well-versed with Git, GitHub, Linux, Postman, and modern deployment platforms such as Vercel and Render</li>
                </ul>
                <h3 className='flex gap-3 items-center text-2xl md:text-3xl my-3 mt-6'> <FaUserGraduate /> Education</h3>
                <h4>B.Sc in Computer Science and Engineering</h4>
                <h4>Metropolitan University, Sylhet</h4>
                <p>2022 - 2025 </p>
                <p>Courseworks : Machine Learning, Data Strucutre, Algorithm, Database, Object Oriented Programming...</p>
                <h4 className="flex gap-3 text-2xl md:text-3xl my-3 mt-6"> <RiSendPlane2Line /> Professional Interests & Goals</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Building scalable backend systems and improving expertise in system design</li>
                    <li>Expanding knowledge in Next.js, advanced backend architectures, and cloud-native development</li>
                    <li>Contributing to open-source projects and collaborating with engineering teams</li>
                    <li>Continuously learning new tools and frameworks to enhance development efficiency </li>
                </ul>
            </article>
            <Services />
        </section>
    );
}