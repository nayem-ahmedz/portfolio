import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function ProjectShowcase({ title, projectData, handleSelected }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sorted, setSorted] = useState(false);
    // fetching projects information
    useEffect(() => {
        fetch(projectData)
            .then(res => res.json())
            .then(data => setProjects(data.sort((a, b) => b.id - a.id)))
            .finally(() => setLoading(false));
    }, []);
    // handle sorting
    const handleSort = () => {
        setSorted(!sorted)
        if (sorted) {
            const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
            setProjects(sortedProjects)
        } else {
            const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
            setProjects(sortedProjects)
        }
    }
    return (
        <article>
            <div className='projects-heading'>
                <h2 className='article-header'> {title} </h2>
                {
                    projects.length > 3 && <div onClick={handleSort} className='project-sort'>
                        {
                            sorted ? <span>Oldest <i className="fa-solid fa-arrow-down-short-wide sort-icon"></i></span> : <span>Latest <i className='fa-solid fa-arrow-down-wide-short sort-icon'></i></span>
                        }
                    </div>
                }
            </div>
            <div className='project-outer'>
                {
                    loading ? <Loading /> : projects.map(project => <div className='project-inner' key={project.id} onClick={() => handleSelected(project)}>
                        <img src={project.ss} alt={project.name + ' screenshot'} loading='lazy' className='project-ss' />
                        <div className='learn-more'>
                            <i className='fa-solid fa-circle-info'></i>
                            <h3 className='project-name'> {project.name} </h3>
                        </div>
                    </div>)
                }
            </div>
        </article>
    );
}