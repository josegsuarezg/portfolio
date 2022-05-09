import Layout from '../components/Layout';
import Cursos from '../components/Cursos';
import Styles from '../styles/Study.module.scss';

const data = [
  
  {
    id: 1,
    nombre: "CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos",
    resumen: "Aprende Flexbox, CSS Grid, Custom Properties, SASS, Mixins, Gulp Workflows, Animaciones, RWD",
    imagen: "/img/cursos/html-css.png",
    url: 'https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/'
  },
  
  {
    id: 2,
    nombre: "Bootstrap 5 y SASS - La Guía Práctica - Crea 10 Sitios Web",
    resumen: "Aprende La nueva versión de Bootstrap con SASS - Además incluye: Gulp, Parcel, NPM, Performance y Buenas Practicas!",
    imagen: "/img/cursos/bootstrap.png",
    url: 'https://www.udemy.com/course/aprende-bootstrap-4-el-framework-responsive-html5-css3-y-js/'
  },
  
  {
    id: 3,
    nombre: "JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
    resumen: "Aprende el Lenguaje de Programación Web más popular paso a paso con +15 Proyectos - Incluye Proyecto MERN Full Stack",
    imagen: "/img/cursos/js.png",
    url: 'https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/'
  },
  
  {
    id: 4,
    nombre: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
    resumen: "Incluye React Hooks Gatsby GraphQL Firestore Redux Context MERN Next.js Styled Components Testing Cypress",
    imagen: "/img/cursos/react-redux.png",
    url: 'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/'
  },
  
  {
    id: 5,
    nombre: "React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL",
    resumen: "Construye una Aplicación en Tiempo Real Completa con React Next.js GraphQL Apollo MongoDB Tailwind Formik",
    imagen: "/img/cursos/react-avanzado.png",
    url: 'https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/'
  },
  
  {
    id: 6,
    nombre: "React Native - Crea aplicaciones para Android y iOS c/ ReactL",
    resumen: "Aprende a crear aplicaciones iOS y Android con React, incluye: React Navigation, GraphQL, MongoDB, Firebase y más!",
    imagen: "/img/cursos/reactnative.png",
    url: 'https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/'
  },
  
  {
    id: 7,
    nombre: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
    resumen: "Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previo INCLUYE 4 PROYECTOS FINALES",
    imagen: "/img/cursos/desarrolloweb.png",
    url: 'https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/'
  },
  
  {
    id: 8,
    nombre: "Laravel 9 Crea Aplicaciones y Sitios Web con PHP 8 y MVC",
    resumen: "Aprende Laravel y Comienza a Crear Aplicaciones Web Dinámicas, Interactivas y Seguras con este curso INCLUYE 3 PROYECTOS",
    imagen: "/img/cursos/laravel.png",
    url: 'https://www.udemy.com/course/curso-laravel-crea-aplicaciones-y-sitios-web-con-php-y-mvc/'
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