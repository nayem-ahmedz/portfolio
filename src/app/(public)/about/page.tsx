import ProfileImage from "@/components/shared/ProfileImage";
import { CgProfile } from "react-icons/cg";

export default function About() {
    return (
        <section className='px-4 py-10'>
            <div className='text-center'>
                <div className="w-fit mx-auto">
                    <ProfileImage />
                </div>
                <h1 className='text-3xl md:text-4xl my-2'>Nayem Ahmed</h1>
                <p className="text-xl">Full-stack Web Developer</p>
            </div>
            <article className=''>
                <h3 className='flex gap-3 items-center text-3xl my-4'> <CgProfile /> About Me</h3>
                <p>
                    Hey! I am Nayem Ahmed. A final-year student of Computer Science and Engineering at Metropolitan University. I am passionate about Web Develpment. <br /> I started learning web development from July 2023. Since then I explored HTML, CSS, Js, Bootstrap, React Js and a lot more. In my university, I have created a Project named Student-Parent Portal using php and mySQL. Thus I have some knowledge about backend as well. But I am planning to use Javascript for both front-end and backend. My goal is to be a Full-stack Web Developer. Am I following path of MERN stack?
                </p>
                <p>
                    During first-year in my university, learnt 'C' as my first Programming language. C is amazing. Day by day, I have got chance to explore C++, Java and many other programming language. Although I have experience with Java, I prefer using JavaScript for full-stack development rather than Spring Boot, a framework of Java.
                </p>
            </article>
        </section>
    );
}