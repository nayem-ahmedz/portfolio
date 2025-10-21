import { useState } from 'react';
import ThemeToggle from '../utils/ThemeToggle';
import { NavLink } from 'react-router';

function Nav(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    return(
        <>
            <nav className='top-nav'>
                <div className={`hamburger ${(isNavOpen) ? 'h-change' : ''}`} onClick={toggleNav}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <ul className={`${(isNavOpen) ? 'visible' : ''}`}>
                    <li> <NavLink to='/'>Home</NavLink> </li>
                    <li> <NavLink to='/about'>About</NavLink> </li>
                    <li> <NavLink to='/contact'>Contact</NavLink> </li>
                    <li> <NavLink to='/projects'>Projects</NavLink> </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;