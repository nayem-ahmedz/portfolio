import './project-modal.css';

function ProjectModal({project, onClose}) {
    return (
        <div id='myModal' className='modal'>
            <div className='modal-content'>
                <div>
                    <h2 className='title'>{project.name}</h2>
                    <p className='description'>{project.description}</p>
                    <h4 className='tech-used sub-title'>Technology Used</h4>
                    <div className='technologies'>
                        {
                            project.tech.map((item, index) => <span key={index} className='technology'>{item}</span>)
                        }
                    </div>
                    <h4 className='sub-title'>Features</h4>
                    <ul className='features'>
                        {
                            project.features.map((item, index) => <li key={index}>{item}</li> )
                        }
                    </ul>
                    <h4 className='sub-title'>Check out the project to learn more</h4>
                    <div className='website-links'>
                        {
                            project.repo && <a href={project.repo} target='_blank' rel='noopener noreferrer'> <i className='fa-brands fa-github'></i> GitHub Repo</a>
                        }
                        {
                            project.link && (<a href={project.link} target='_blank' rel='noopener noreferrer'> <i className='fa-solid fa-arrow-up-right-from-square'></i> live link</a>)
                        }
                    </div>
                </div>
                <div>
                    <img src={project.ss} alt={`${project.name} screenshot`} />
                </div>
                <div className='modal-close-btn'><i className='fa-solid fa-xmark' onClick={onClose}></i></div>
            </div>
        </div>
    );
}

export default ProjectModal;