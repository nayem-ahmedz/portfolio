import { Link } from 'react-router';
import { useEffect } from 'react';

function NoPage(){
    useEffect(() => {document.title = '404 - Page Not Found'}, []);
    return(
        <section className='message-section'>
            <article className='message-text error-404'>
                <Link id='sm-cross-btn' to='/contact' className='error-report'>Report</Link>
                <h2>404 - Page Not Found!</h2>
                <p>Looks like you've followed a broken link or entered a URL that doesn't exist on my site. In case of missing page, Hit report!</p>
                <Link to='/' className='back-home-link'> <i className='fa-solid fa-arrow-left'></i>Back to Home</Link>
            </article>
        </section>
    );
}

export default NoPage;