import Link from "next/link";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function PublicHeader() {
    const navLinks = <>
        <li> <Link href='/' className="text-base">Home</Link> </li>
        <li> <Link href='/about' className="text-base">About</Link> </li>
        <li> <Link href='/contact' className="text-base">Contact</Link> </li>
        <li> <Link href='/projects' className="text-base">Projects</Link> </li>
    </>;
    return (
        <header className="bg-base-100 shadow-sm sticky top-0 z-10">
            <div className="navbar containerr">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl">Nayem's Space</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='/contact' className="btn btn-sm md:btn-md btn-primary btn-outline text-base"> <BiSolidMessageDetail className="text-xl" /> Say Hello</Link>
                </div>
            </div>
        </header>
    );
}