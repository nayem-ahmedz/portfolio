import ProfileImage from "@/components/shared/ProfileImage";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import TypewriterDesignation from "@/components/shared/TypewriterDesignation";

export default function Hero() {
    return (
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8 py-10">
                <div className="shrink-0">
                    <ProfileImage />
                </div>
                <div className="w-full md:w-md shrink-0">
                    <p className='text-xl'>Hey There, I am</p>
                    <h1 className="text-5xl font-bold my-2 -ml-1">Nayem Ahmed</h1>
                    <TypewriterDesignation />
                    <div className="flex gap-3 mt-6">
                        <Link href='/contact' className="btn btn-primary text-base"> <BiSolidMessageDetail className="text-xl" /> Say Hello</Link>
                        <Link href='/contact' className="btn btn-primary btn-outline text-base"> <FaDownload className="-mt-1" /> Resume</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}