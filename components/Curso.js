import Image from 'next/image';
import Styles from '../styles/Curso.module.scss';

const Curso = ({curso}) => {
  const {nombre, resumen, imagen} = curso;
  return (
      <div className={Styles.card}>
        <Image 
          width={120} 
          height={70} 
          layout="responsive" 
          src={imagen} 
          alt={nombre} 
          priority 
        />
        <h3>{nombre}</h3>
        <p>{resumen}</p>
      </div>
  )
}

export default Curso