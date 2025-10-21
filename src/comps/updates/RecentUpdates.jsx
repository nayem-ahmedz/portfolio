import { Link } from 'react-router';

function RecentUpdates(){
    return(
        <article className='recent-updates'>
            <h1 className='section-title'>Recent Updates about me</h1>
            <ul className='recent-ul'>
                <li>Final Year 3rd Semester, working on Thesis related to Supershop and Multi-model Machine learning</li>
                <li>Enrolled in Programming Hero's : Complete Web Development course</li>
                <li>
                    Back to Study : Final Year, 1st term
                </li>
                <li>
                    Exam is done, spending holidays
                </li>
                <li>
                    Appeared : Semester Final Exam - Summmer 2024
                </li>
                <li>
                    Prepared a Machine Learning Project using Online Shoppers Purchasing Intention Dataset <a href='https://github.com/nayem-ahmedz/ml-final-project' target='_blank' rel='noopener noreferrer' className='non-breaking-link'>Check Out <i className="fa-brands fa-github"></i> </a>
                </li>
                <li>
                    Completed the Python Programming and Basic Data Science training program <a href='https://www.linkedin.com/posts/nayem-ahmedz_pds-python-datascience-activity-7270836319881203714-3UBM?utm_source=share&utm_medium=member_desktop' target='_blank' rel='noopener noreferrer' className='non-breaking-link'>Read Post <i className="fa-brands fa-linkedin"></i> </a>
                </li>
                <li>
                    Read more about me in my <Link to='/blog' className='non-breaking-link'>Blog <i className='fa-solid fa-blog'></i> </Link>
                </li>
            </ul>
        </article>
    );
}

export default RecentUpdates;