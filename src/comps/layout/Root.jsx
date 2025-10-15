import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import './root.css';
import './pages-style.css';

function Root(){
    return(
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Root;