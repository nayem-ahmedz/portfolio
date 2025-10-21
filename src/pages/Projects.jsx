import { useState , useEffect } from 'react';
import ProjectModal from '../comps/project/ProjectModal';
import ProjectShowcase from '../comps/project/ProjectShowcase';

function Projects(){
    useEffect(() => {document.title = 'Projects | Nayem Ahmed'}, []);
    const [selectedProject, setSelectedProject] = useState(null);
    function handleSelected(el){
        setSelectedProject(el);
    }
    const projects = [
        { id: 1, category: 'HTML and CSS', dataUrl: '/data/projects/html-css.json' },
        { id: 2, category: 'JavaScript', dataUrl: '/data/projects/js.json' },
        { id: 3, category: 'React Js', dataUrl: '/data/projects/react-js.json' },
        { id: 4, category: 'Game Projects', dataUrl: '/data/projects/game.json' },
        { id: 5, category: 'University Projects', dataUrl: '/data/projects/university-web.json' }
    ];
    return(
        <section className='projects'>
            <h1 className='section-title text-center'>List of all Projects</h1>
            <p className='texts'>
                Since I started learning web development, I tried to build projects, with as much knowledge as I gained. Thanks to some of my guides who taught me to create projects while learning. One says, 'Don't just keep learning and sit doing nothing; keep learning and try to build simple projects with whatever you have learned yet.' I followed them and I have created lots of projects. Here are a few of them:
            </p>
            {
                projects.map(project => <ProjectShowcase
                    key={project.id}
                    title={project.category}
                    projectData={project.dataUrl}
                    handleSelected={handleSelected}
                />)
            }
            {
                selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )
            }
        </section>
    );
}

export default Projects;