import Image from "next/image";

export default function ProfileImage(){
    return(
        <figure className="w-xs md:w-sm bg-gray-200 aspect-square rounded-full">
            <Image src='/media/images/nayem-ahmed.webp' alt='Nayem Ahmed' width={500} height={500} loading="eager" className="w-full rounded-full shadow-2xl" />
        </figure>
    );
}