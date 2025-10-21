import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import './root.css';
import './pages-style.css';
import ScrollToTop from '../utils/ScrollToTop';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function Root(){
    const location = useLocation();
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }, [location]);
    return(
        <>
            <ScrollToTop />
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Root;