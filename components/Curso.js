import Image from 'next/image';
import Styles from '../styles/Curso.module.scss';

const Curso = ({curso}) => {
  const {nombre, resumen, imagen, url} = curso;
  return (
      <div className={Styles.card}>
        <a href={url} target="_blank" without rel="noreferrer" className={Styles.enlaceCurso} >
          <Image 
            width={120} 
            height={70} 
            layout="responsive" 
            src={imagen} 
            alt={nombre} 
            priority 
          />
        </a>
          <h3>{nombre}</h3>
          <p>{resumen}</p>
      </div>
  )
}

export default Curso