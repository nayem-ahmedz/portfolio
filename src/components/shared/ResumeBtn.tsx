import { FaDownload } from "react-icons/fa6";

export default function ResumeBtn(){
    return(
        <a href='/media/docs/nayem-ahmed-resume.pdf' download='Nayem_Ahmed_resume.pdf' target='_blank' rel='noopener noreferrer' className="btn btn-primary btn-outline text-base"> <FaDownload className="-mt-1" /> Resume</a>
    );
}