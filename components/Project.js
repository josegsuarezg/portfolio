import Image from 'next/image';
import Link from 'next/link';
import Styles from '../styles/Projects.module.scss';


const Project = ({project}) => {
  const {nombre, resumen, imagen, enlace, repositorio} = project;
  return (
    <div className={Styles.card}>
      <div className={Styles.contenido}>
        <Image width={120} height={70} layout="responsive" src={imagen} alt={nombre} priority />
        <h3>{nombre}</h3>
        <p>{resumen}</p>
      </div>
      <div className={Styles.enlaces}>
        <Link href={enlace}>
          <a target="_blank" className={Styles.enlace}>Ir a la Pagina</a>
        </Link>
        <Link href={repositorio}>
          <a target="_blank" className={Styles.enlace}>Ir al Repositorio</a>
        </Link>
      </div>
    </div>
  )
}

export default Project