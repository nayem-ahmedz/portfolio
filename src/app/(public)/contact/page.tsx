'use client';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FormEvent } from "react";

export default function Contact() {
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Send Message Feature is not ready yet');
    }
    return (
        <section className="hero min-h-[70vh] py-10">
            <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-40">
                <div className="text-left shrink-0">
                    <p className="ml-1 text-xl mb-2">Contact Me!</p>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Let's Collaborate</h1>
                    <p className="max-w-md mb-6">Interested in hiring me for your project or just want to say hi? You can fill in the contact form or send me an email</p>
                    <div className="flex items-start gap-4">
                        <MdOutlineLocationOn className="text-2xl" />
                        <h6 className="text-base">
                            <span className="font-bold block">ADDRESS</span>
                            Sylhet, Bangladesh
                        </h6>
                    </div>
                    <div className="flex items-start gap-4 my-4">
                        <MdOutlineMail className="text-2xl" />
                        <h6 className="text-base">
                            <span className="font-bold block">EMAIL</span>
                            nayemahmedz@proton.me
                        </h6>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-xl" />
                        <h6 className="text-base">
                            <span className="font-bold block">PHONE</span>
                            880-1620358892
                        </h6>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm lg:max-w-md shrink-0 shadow-2xl">
                    <div className="card-body md:p-8">
                        <form onSubmit={handleSubmit}>
                            <h5 className="text-xl mb-2">SEND A MESSAGE</h5>
                            <fieldset className="fieldset space-y-3">
                                <input type="text" className="input w-full" placeholder="Name" />
                                <input type="email" className="input w-full" placeholder="Email" />
                                <textarea className="textarea w-full resize-none" placeholder="Message or Feedback"></textarea>
                                <button className="btn btn-neutral mt-4">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}