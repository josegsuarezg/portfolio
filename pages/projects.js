import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Styles from '../styles/Projects.module.scss';

const data = [
  
  {
    id: 1,
    nombre: 'Aplicación de Control de Gastos', 
    resumen: 'Construcción de una aplicación web para la gestión de los gastos utilizando React con sus Hooks, más comunes (useState, useEffect). Para los estilos se utilizó CSS puro.',
    imagen: '/img/proyectos/control-gastos.png',
    enlace: 'https://app-control-gastos.netlify.app',
    repositorio: 'https://github.com/josegsuarezg/control-gastos'
  },
  
  {
    id: 2,
    nombre: 'Cotizador de Criptomonedas', 
    resumen: 'Construcción de una aplicación web para la cotización de las Criptomonedas más populares, utilizando ViteJS, TailwindCSS y React, custom Hooks ademas de FetchAPI y Async/Await para consumo de una API externa.',
    imagen: '/img/proyectos/cotizador.png',
    enlace: 'https://cryptocotizer.netlify.app/',
    repositorio: 'https://github.com/josegsuarezg/cotizacion-cripto'
  },
  
  {
    id: 3,
    nombre: 'Sitio WEB Venta de Guitarras y Cursos de Guitarra', 
    resumen: 'Creación de un Sitio Web para la Venta de Cursos e Instrumentos Musicales, específicamente las Guitarras, Utilizado React, NextJS, TailwindCSS, CSSModules, Styled-Components, Axios, FetchAPI, Async/Await, todo esto para el frontend, y Atrapy como CMS para el backend y MongoDB para la base de datos con ello se genera una API Rest para consumir en el Frontend.',
    imagen: '/img/proyectos/GuitarLA.png',
    enlace: 'https://guitarla-next-xi.vercel.app/',
    repositorio: 'https://github.com/josegsuarezg/guitarla_next'
  }
  
]



const projects = () => {
  return (
    <Layout
      pagina="Experience"
    >
      <div className={Styles.container}>
        <div className={Styles.projects}>
          <Projects
            projects={data} 
          />
        </div>
      </div>
    </Layout>
  )
}

export default projects