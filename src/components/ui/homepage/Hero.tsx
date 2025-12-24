import ProfileImage from "@/components/shared/ProfileImage";
import TypewriterDesignation from "@/components/shared/TypewriterDesignation";
import ResumeBtn from "@/components/shared/ResumeBtn";
import SayHelloBtn from "@/components/shared/SayHelloBtn";

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
                        <SayHelloBtn />
                        <ResumeBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}