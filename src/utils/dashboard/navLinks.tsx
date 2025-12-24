import { IconType } from "react-icons";
import { RiDashboardFill, RiFolderAddFill, RiSettings4Fill } from "react-icons/ri";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

// Interface
interface NavLink {
    id: number;
    text: string;
    link: string;
    icon: IconType; // This type is specific to react-icons
}

// navLinks Array
export const navLinks: NavLink[] = [
    {
        id: 1,
        text: 'Dashboard',
        link: '/dashboard',
        icon: RiDashboardFill
    },
    {
        id: 2,
        text: 'Add Project',
        link: '/dashboard/add-project',
        icon: RiFolderAddFill
    },
    {
        id: 3,
        text: 'Manage Projects',
        link: '/dashboard/manage-projects',
        icon: MdLibraryBooks
    },
    {
        id: 4,
        text: 'About Me',
        link: '/dashboard/about',
        icon: FaUserCircle
    },
    {
        id: 5,
        text: 'Contacts Me',
        link: '/dashboard/contacts',
        icon: FaEnvelope
    },
    {
        id: 6,
        text: 'Site Settings',
        link: '/dashboard/settings',
        icon: RiSettings4Fill
    },
];