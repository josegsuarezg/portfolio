import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  
  return (
    <Layout
      pagina="Home"
    >
      <header className={styles.header}>
        <h1>José Suárez</h1>
        <p>React FrontEnd Developer</p>
      </header>
      <div className={styles.contenidoPrincipal}>
        <section className={styles.about}>
          <h2>Sobre Mí</h2>
          <p>Siempre he tenido la sed de conocimientos en el área de la tecnología por ello, de manera autodidacta he estado en formación constante en las tecnologías de Desarrollo Web más actuales tanto Frontend como en el Backend.</p>
          <p>Mi experiencia (como Ingeniero) me ha llevado a desarrollar habilidades de trabajo en equipo, liderazgo, entre otras SoftSkill, además de que también he adquirido conocimientos en la Implementación de Herramientas AGILE como SCRUM.</p>
          <div className={styles.botones}>
            <a href='/José Suárez CV Dev.pdf' target="_blank" className={styles.button} >Visualizar Resumen</a>
            <a href='/José Suárez CV Dev.pdf' download="José Suárez CV.pdf" className={styles.button} >Descargar Resumen</a>
          </div>
        </section>
        <aside className={styles.perfil}>
          <div className={styles.imagen}>
          </div>
          <div className={styles.card}>
            <h3>Nombre</h3>
            <p>José Gregorio Suárez García</p>
            <h3>Nacimiento</h3>
            <p>23 Septiembre 1982</p>
            <h3>Ubicación</h3>
            <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
