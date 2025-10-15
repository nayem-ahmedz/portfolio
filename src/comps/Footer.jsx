import { Link } from "react-router";

function Footer(){
    return(
        <footer>
            <div className='container footer-cont'>
                <div className='footer-links'>
                    <p>Follow me on</p>
                    <a href='http://www.linkedin.com/in/nayem-ahmedz' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-linkedin'></i></a>
                    <a href='https://github.com/nayem-ahmedz/' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-github'></i></a>
                    <a href='https://web.facebook.com/nayemahmed2z' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-facebook'></i></a>
                    <a href='https://www.youtube.com/@nayemscanvas' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-youtube'></i></a>
                </div>
                <div className='footer-right'>
                    <p>
                        <a href='https://wev-dev.netlify.app/' title='Check out my Practice Tasks' target='_blank' rel='noopener noreferrer'>Front-end Journey</a> ~ <Link to='/blog'>Blog</Link> ~ <Link to='/contact'>Contact</Link>
                    </p>
                    <p>@Nayem's Portfolio | <small>20</small>24~25 | <Link to='/versions'>v 2.2.0</Link> </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;