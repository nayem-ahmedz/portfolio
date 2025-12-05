import Image from "next/image";

export default function ProfileImage(){
    return(
        <Image src='/media/images/nayem-ahmed.webp' alt='Nayem Ahmed' width={500} height={500} loading="eager" className="w-full max-w-xs md:max-w-sm rounded-full shadow-2xl" />
    );
}