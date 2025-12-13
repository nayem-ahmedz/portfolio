import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-base-200">
            <section className="footer sm:footer-horizontal text-base-content p-4 md:p-6 containerr">
                <aside className="gap-0">
                    <FaCode className="text-4xl mb-3" />
                    <h4 className="text-2xl">Nayem Ahmed</h4>
                    <p className="text-xl mb-2">Full-stack Web Developer</p>
                    <p>
                        Committed to build efficient, scalable, and intuitive full-stack web solutions.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Portfolio Projects</h6>
                    <a className="link link-hover">React Js</a>
                    <a className="link link-hover">Full-stack</a>
                    <a className="link link-hover">On-going</a>
                    <a className="link link-hover">Academic/University</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link href='/' className="link link-hover">Home</Link>
                    <Link href='/about' className="link link-hover">About me</Link>
                    <Link href='/contact' className="link link-hover">Contact me</Link>
                    <Link href='/blog' className="link link-hover">Blog</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <p className="flex items-center gap-2"> <MdOutlineLocationOn className="text-xl" /> Sylhet, Bangladesh </p>
                    <a href="mailto:nayemahmedz@proton.me" className="link link-hover flex items-center gap-2"> <MdOutlineMail className="text-xl" /> nayemahmedz@proton.me</a>
                    <div className="flex gap-3 mt-3">
                        <a className="link link-hover text-2xl" href='http://www.linkedin.com/in/nayem-ahmedz' target='_blank' rel='noopener noreferrer'> <FaLinkedin /></a>
                        <a className="link link-hover text-2xl" href='https://github.com/nayem-ahmedz/' target='_blank' rel='noopener noreferrer'> <FaGithub /> </a>
                        <a className="link link-hover text-2xl" href='https://web.facebook.com/nayemahmed2z' target='_blank' rel='noopener noreferrer'> <FaFacebook /> </a>
                        <a className="link link-hover text-2xl" href='https://www.youtube.com/@nayemscanvas' target='_blank' rel='noopener noreferrer'> <FaYoutube /> </a>
                    </div>
                </nav>
            </section>
        </footer>
    );
}