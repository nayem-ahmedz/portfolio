import Link from "next/link";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function SayHelloBtn(){
    return(
        <Link href='/contact' className="btn btn-primary text-base"> <BiSolidMessageDetail className="text-xl" /> Say Hello</Link>
    );
}