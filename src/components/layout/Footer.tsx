import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-base-200">
            <section className="footer sm:footer-horizontal text-base-content p-10 containerr">
                <aside className="gap-0">
                    <FaCode className="text-4xl mb-3" />
                    <h4 className="text-2xl">Nayem Ahmed</h4>
                    <p className="text-xl mb-2">Full-stack Web Developer</p>
                    <p>
                        Providing reliable web solution since 2024
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">UI Desing</a>
                    <a className="link link-hover">Static Website</a>
                    <a className="link link-hover">Dynamic Website</a>
                    <a className="link link-hover">Mobile App</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About me</a>
                    <a className="link link-hover">Contact me</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-3">
                        <a className="link link-hover text-2xl"> <FaLinkedin /></a>
                        <a className="link link-hover text-2xl"> <FaGithub /> </a>
                        <a className="link link-hover text-2xl"> <FaFacebook /> </a>
                        <a className="link link-hover text-2xl"> <FaYoutube /> </a>
                    </div>
                </nav>
            </section>
        </footer>
    );
}