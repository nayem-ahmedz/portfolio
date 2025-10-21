import { useEffect } from 'react';
import { Link } from 'react-router';
const profileImg = '/media/nayem-ahmed2.webp';

function Home(){
    useEffect(() => {document.title = 'Nayem Ahmed | Front-end Web Developer'}, []);
    // const job = 'Front-end Web Developer';
    // const [displayedText, setDisText] = useState('');
    // const [jobIndex, setJobIndex] = useState(0);
    // useEffect(()=>{
    //     if(jobIndex < job.length){
    //         setDisText((prev) => prev + job[jobIndex]);
    //         setJobIndex((prev) => prev + 1);
    //     }
    // }, [displayedText, jobIndex]);
    return(
        <>
            <section className='banner banner-main'>
                <div className="user-img-container">
                    <img src={profileImg} alt="nayem ahmed's pictures" />
                </div>
                <div className='content'>
                    <p className='subtitle'>Hey There, I am</p>
                    <h1 className='title'>Nayem Ahmed</h1>
                    <h3 className='subtitle profession'>I am a <span id='mcr-rule-title'> Front-end Web Developer</span></h3>
                    {/* { displayedText ? displayedText : 'Front-end Web Developer' } */}
                    <a href='/media/cv-nayem-ahmed.pdf' download='Nayem_Ahmed_CV.pdf' target='_blank' rel='noopener noreferrer' className='btn-primary'> <i className="fa-solid fa-download"></i> Download CV</a>
                    <Link to='/contact' className='btn-primary'> <i className="fa-solid fa-message"></i> Let's Talk</Link>
                </div>
            </section>
        </>
    );
}

export default Home;