import { useInView } from 'react-intersection-observer';
const tailwindLogo = '/media/tailwindcss-mark.svg';

function Skills(){
    const [ref, inView] = useInView({
        threshold: 0.5, // Trigger when 50% visible
        triggerOnce: true, // Only trigger once
    });
    const techName = [
        {id: 1, name: 'HTML', score: '98%', icon: 'fa-brands fa-html5', color: '#E34F26'},
        {id: 2, name: 'CSS', score: '97%', icon: 'fa-brands fa-css3-alt', color: 'lightblue'},
        {id: 3, name: 'JavaScript', score: '92%', icon: 'fa-brands fa-js', color: '#F7DF1E'},
        {id: 4, name: 'Bootstrap', score: '70%', icon: 'fa-brands fa-bootstrap', color: 'skyblue'},
        {id: 5, name: 'Tailwind CSS', score: '88%', icon: tailwindLogo, color: 'tailwindcss logo'},
        {id: 6, name: 'React Js', score: '80%', icon: 'fa-brands fa-react', color: '#61DAFB'}
    ];
    return(
        <section ref={ref} className='skills-section'>
            <h2 className='text-center section-title'>My Skills</h2>
            <p className='text-readable skill-texts'>
                I started learning web dev since July 2023. Since then I have explored various web technology. I started my journy, learning HTML (Hyper Text Markup Language) from w3school. Everything is changing day by day. Developer accepting new and new technology, frameworks in every moment. My learning journey at a glance:
            </p>
            <article className='skills-container'>
                <h3 className='article-header'>Web Technologies</h3>
                {
                    techName.map((tech) => {
                        return(
                            <div className='tech-boxs' key={tech.id}>
                                <div className='box-outer'>
                                    <div className='box-inner' style={{ width: inView ? tech.score : '0%' }}>
                                        {
                                            inView && (
                                                tech.id === 5 ? (
                                                    <>
                                                        <span> {tech.name} </span>
                                                        <img src={tech.icon} alt={tech.color} className='logo-svg'></img>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span> {tech.name} </span>
                                                        <i className={tech.icon} style={{color: tech.color}}></i>
                                                    </>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }                
            </article>
        </section>
    );
}

export default Skills;