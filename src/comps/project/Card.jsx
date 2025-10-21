import { useState } from 'react';

export default function ProjectCard({project, showModal}) {
    const [imgLoaded, setImgLoaded] = useState(false); // showing blur filter before the image loads
    return (
        <div className='project-inner' key={project.id} onClick={showModal}>
            <img src={project.ss} alt={project.name + ' screenshot'} className={`project-ss ${imgLoaded ? 'loaded-image-clear' : 'loading-image-effect'}`} onLoad={() => setImgLoaded(true)} />
            <div className='learn-more'>
                <i className='fa-solid fa-circle-info'></i>
                <h3 className='project-name'> {project.name} </h3>
            </div>
        </div>
    );
}