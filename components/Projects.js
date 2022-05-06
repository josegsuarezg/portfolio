import Project from './Project';
import Styles from '../styles/Projects.module.scss';

const Projects = ({projects}) => {
  return (
    <div className={Styles.contenedor}>
      {projects.map(project => (
          <Project 
            key={project.id}
            project={project}
          />
      ))}
    </div>
  )
}

export default Projects