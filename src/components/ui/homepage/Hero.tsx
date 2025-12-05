import ProfileImage from "@/components/shared/ProfileImage";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function Hero() {
    return (
        <div className="hero bg-base-200 min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="shrink-0">
                    <ProfileImage />
                </div>
                <div className="w-full md:w-md shrink-0">
                    <p className='text-xl'>Hey There, I am</p>
                    <h1 className="text-5xl font-bold my-2">Nayem Ahmed</h1>
                    <h3 className='text-xl'>I am a Full-stack Web Developer</h3>
                    <div className="flex gap-3 mt-3">
                        <Link href='/contact' className="btn btn-primary text-base"> <BiSolidMessageDetail /> Say Hello</Link>
                        <Link href='/contact' className="btn btn-primary text-base"> <FaDownload /> Resume</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}