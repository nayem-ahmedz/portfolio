import { useEffect } from 'react';
const profileImg = '/media/nayem-ahmed2.webp';
import Services from '../comps/services/Services';
import Skills from '../comps/skills/Skills';

function Education(){
    const edu = {
        degree: 'B.Sc',
        dept: 'Computer Science and Engineering',
        from: '23 Jan 2022',
        to: 'Present',
        university: 'Metropolitan University',
        uniLoc: 'Sylhet',
        courses: ['Machine Learning', 'Data Strucutre', 'Algorithm', 'Database', 'Object Oriented Programming']
    };
    return(
        <article className='edu about-articles'>
            <h3 className='article-header'> <i className='fa-solid fa-user-graduate about-icons'></i> Education</h3>
            <hr className='hr-gray' />
            <h4> {edu.degree} in {edu.dept} </h4>
            <h4> {edu.university}, {edu.uniLoc} </h4>
            <p> {edu.from} - {edu.to} </p>
            <p> Courseworks : { edu.courses.join(', ') }... </p>
        </article>
    );
}

function About(){
    const mySelf = {
        name: 'Nayem Ahmed',
        profession: ['Front-End Web Developer', 'Content Creator', 'Programmer'],
        age: 25,
        address: 'Bhadeshwar, Sylhet, Bangladesh'
    };
    useEffect(() => {document.title = 'About | Nayem Ahmed'}, []);
    return(
        <>
            <section className='about-section'>
                <div className='about-user'>
                    <div className="user-img-container">
                        <img src={profileImg} alt="nayem ahmed's pictures" />
                    </div>
                    <h1 className='title'>Nayem Ahmed</h1>
                    <ul>
                        {
                            mySelf.profession.map((el, ind) => {
                                return <li key={'p' + ind}> {el} </li>
                            })
                        }
                    </ul>
                </div>
                <article className='about-text about-articles'>
                    <h3 className='article-header'> <i className='fa-solid fa-user about-icons'></i> About Me</h3>
                    <hr className='hr-gray' />
                    <p>
                        Hey! I am Nayem Ahmed. A final-year student of Computer Science and Engineering at Metropolitan University. I am passionate about Web Develpment. <br /> I started learning web development from July 2023. Since then I explored HTML, CSS, Js, Bootstrap, React Js and a lot more. In my university, I have created a Project named Student-Parent Portal using php and mySQL. Thus I have some knowledge about backend as well. But I am planning to use Javascript for both front-end and backend. My goal is to be a Full-stack Web Developer. Am I following path of MERN stack?
                    </p>
                    <p>
                        During first-year in my university, learnt 'C' as my first Programming language. C is amazing. Day by day, I have got chance to explore C++, Java and many other programming language. Although I have experience with Java, I prefer using JavaScript for full-stack development rather than Spring Boot, a framework of Java.
                    </p>
                </article>
                <Education />
            </section>
            <Services />
            <Skills />
        </>
    );
}

export default About;