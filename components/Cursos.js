import Styles from '../styles/Curso.module.scss';
import Curso from './Curso';

const Cursos = ({cursos}) => {
  return (
    <div className={Styles.contenedor}>
      {cursos.map(curso => (
          <Curso 
            key={curso.id}
            curso={curso}
          />
      ))}
    </div>
  )
}

export default Cursos