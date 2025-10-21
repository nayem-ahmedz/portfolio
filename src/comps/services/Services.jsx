import { Link } from 'react-router';

function Services(){
    const services = [
        { id: 1, icon: 'fa-brands fa-figma', name: 'Web Design', details: 'I can turn your ideas into amazing figma design, from scratch. I have more then two years experience in this field. I am familiar with designing platform like Figma, Canva and Adobe Tools such as Photoshop and Illustrator', link: '/pages/contact', linkText: 'Share Your Ideas', linkInternal: true},
        { id: 2, icon: 'fa-solid fa-laptop-code', name: 'Front-end Web Development', details: 'I can transform your any design ideas into Responsive website. I can provide you best and clean code. When I work on a project, I keep 4 tabs open so that I can develop a web application to suit well in all devices', link: '/pages/projects', linkText: 'View Live Projects', linkInternal: true},
        { id: 3, icon: 'fa-solid fa-database', name: 'Backend and Database Management', details: 'I am capable to perform backend task using PHP. It is a very simple and easy programming language that was created only for web. I have a good understanding in Structured Database System such as MySQL', link: 'https://github.com/nayem-ahmedz/', linkText: 'View Github Repo', linkInternal: false}
    ];
    return(
        <section className='service-section'>
            <article className='wrapper services-cont'>
                <h3 className='text-center section-title'>My Services</h3>
                <div className='services-row'>
                    {
                        services.map((el) => {
                            return(
                                <div className='services-col' key={el.id}>
                                    <i className={el.icon}></i>
                                    <h3> {el.name} </h3>
                                    <p> {el.details} </p>
                                    {
                                        el.linkInternal ? <Link to={el.link}> {el.linkText} </Link> : <a href={el.link} target='_blank' rel='noopener noreferrer'> {el.linkText} </a>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    );
}

export default Services;