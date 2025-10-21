// ScrollTo to top on router change
import { useEffect } from 'react';
import { useLocation } from 'react-router';


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of the page when the path changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}

export default ScrollToTop;