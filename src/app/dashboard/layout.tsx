import { navLinks } from "@/utils/dashboard/navLinks";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Dashboard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="drawer lg:drawer-open min-h-screen containerr2">
            <title>Dashboard | Smart Garments</title>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <section className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <GiHamburgerMenu className="text-2xl" />
                    </label>
                    <div className="px-2 grow">Dashboard</div>
                    <div>
                        <Link href='/' className="btn btn-secondary btn-outline">Exit Dashboard</Link>
                    </div>
                </nav>

                {/* Page content here */}
                <section>
                    { children }
                </section>
            </section>
            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-open:w-64">
                    <ul className="menu w-full grow">
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-base mb-4">
                            <div className="avatar justify-center cursor-default hover:bg-transparent">
                                <div className="w-6 is-drawer-open:w-20 rounded">
                                    {/* <img src= alt={currentUser.displayName} /> */}
                                </div>
                            </div>
                            <div className="is-drawer-close:hidden flex flex-col gap-0 cursor-default hover:bg-transparent">
                                <h2 className="text-2xl">Admin</h2>
                                <p>User</p>
                            </div>
                        </li>
                        {
                            navLinks.map(link => <li key={link.id}>
                                <Link href={link.link} className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-base" data-tip={link.text}>
                                    <link.icon className="text-xl md:text-2xl" />
                                    <span className="is-drawer-close:hidden"> {link.text} </span>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}