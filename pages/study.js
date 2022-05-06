import Layout from '../components/Layout';
import Cursos from '../components/Cursos';
import Styles from '../styles/Study.module.scss';

const data = [
  
  {
    id: 1,
    nombre: "CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos",
    resumen: "Aprende Flexbox, CSS Grid, Custom Properties, SASS, Mixins, Gulp Workflows, Animaciones, RWD",
    imagen: "/img/cursos/html-css.png"
  },
  
  {
    id: 2,
    nombre: "Bootstrap 5 y SASS - La Guía Práctica - Crea 10 Sitios Web",
    resumen: "Aprende La nueva versión de Bootstrap con SASS - Además incluye: Gulp, Parcel, NPM, Performance y Buenas Practicas!",
    imagen: "/img/cursos/bootstrap.png"
  },
  
  {
    id: 3,
    nombre: "JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
    resumen: "Aprende el Lenguaje de Programación Web más popular paso a paso con +15 Proyectos - Incluye Proyecto MERN Full Stack",
    imagen: "/img/cursos/js.png"
  },
  
  {
    id: 4,
    nombre: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
    resumen: "Incluye React Hooks Gatsby GraphQL Firestore Redux Context MERN Next.js Styled Components Testing Cypress",
    imagen: "/img/cursos/react-redux.png"
  },
  
  {
    id: 5,
    nombre: "React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL",
    resumen: "Construye una Aplicación en Tiempo Real Completa con React Next.js GraphQL Apollo MongoDB Tailwind Formik",
    imagen: "/img/cursos/react-avanzado.png"
  },
  
  {
    id: 6,
    nombre: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
    resumen: "Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previo INCLUYE 4 PROYECTOS FINALES",
    imagen: "/img/cursos/desarrolloweb.png"
  },
  
  {
    id: 7,
    nombre: "Laravel 9 Crea Aplicaciones y Sitios Web con PHP 8 y MVC",
    resumen: "Aprende Laravel y Comienza a Crear Aplicaciones Web Dinámicas, Interactivas y Seguras con este curso INCLUYE 3 PROYECTOS",
    imagen: "/img/cursos/laravel.png"
  }

]

const study = () => {
  return (
    <Layout
      pagina="Study"
    >
      <div className={Styles.container}>
        <div className={Styles.universidad}>
          <h1>Título Universitario</h1>
          <h3>Institución Universitaria: La Universidad del Zulia</h3>
          <h2><span>Título Obtenido: </span>Ingeniero Industrial</h2>
        </div>
        <div className={Styles.Cursos}>
          <h1>Cursos Realizados</h1>
          <p>Los cursos realizados son en su mayoría bastantes completos y equilibradamente diseñados entre el conocimiento teórico necesario así como la aplicación práctica de todo el contenido del mismo, todos parten desde el nivel básico hasta el nivel avanzado, incluyendo las pruebas del código necesarias y las refactorizaciones del mismo..</p>
          <Cursos 
            cursos = {data}
          />
        </div>
      </div>
    </Layout>
  )
}

export default study