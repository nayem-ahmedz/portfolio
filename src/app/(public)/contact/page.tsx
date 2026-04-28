'use client';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                alert("Message sent!");
                form.reset();
            } else {
                alert("Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    }
    return (
        <section className="hero min-h-[70vh] py-10">
            <title>Contact | Nayem Ahmed</title>
            <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-40">
                <div className="text-left shrink-0">
                    <p className="ml-1 text-xl mb-2">Contact Me!</p>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Let's Collaborate</h1>
                    <p className="max-w-md mb-6">Interested in hiring me for your project or just want to say hi? You can fill in the contact form or send me an email</p>
                    <div className="flex items-start gap-4">
                        <MdOutlineLocationOn className="text-2xl mt-px" />
                        <h6 className="text-base">
                            <span className="font-bold block">ADDRESS</span>
                            Sylhet, Bangladesh
                        </h6>
                    </div>
                    <div className="flex items-start gap-4 my-4">
                        <MdOutlineMail className="text-2xl mt-px" />
                        <h6 className="text-base">
                            <span className="font-bold block">EMAIL</span>
                            <a href="mailto:nayemahmedz@proton.me" className="link link-hover flex items-center gap-2">nayemahmedz@proton.me</a>
                        </h6>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-xl mt-1" />
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
                                <input type="text" className="input w-full" name="name" placeholder="Name" />
                                <input type="email" className="input w-full" name="email" placeholder="Email" />
                                <textarea className="textarea w-full resize-none" name="message" placeholder="Message or Feedback"></textarea>
                                <button type="submit" className="btn btn-neutral mt-4">Send</button>
                                {/* <p className="text-center">coming soon...</p> */}
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}