import UseDark from '../hooks/useDataForm';
import Link from "next/link";
import styles from "../styles/Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faHouse,
  faBookOpen,
  faBriefcase,
  faFeather,
  faMessage,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({pagina}) => {
  
  const { isDark, handleDarkMode } = UseDark();
  
  return (
    <nav className={styles.navegation}>
      <Link href="/">
        <a className={pagina === "Home" ? styles.link : styles.home}>
          <FontAwesomeIcon
            icon={faHouse}
            style={{fontSize: 20, color: "white" }} 
          />
        </a>
      </Link>
      <Link href="/skills">
        <a className={pagina === "Skills" ? styles.link : styles.havilidades}>
          <FontAwesomeIcon
            icon={faBookOpen}
            style={{fontSize: 25, color: "white" }} 
          />
        </a>
      </Link>
      <Link href="/projects">
        <a className={pagina === "Experience" ? styles.link : styles.proyectos}>
          <FontAwesomeIcon
            icon={faBriefcase}
            style={{fontSize: 25, color: "white" }} 
          />
        </a>
      </Link>
      <Link href="/study">
        <a className={pagina === "Study" ? styles.link : styles.estudios}>
          <FontAwesomeIcon
            icon={faFeather}
            style={{fontSize: 25, color: "white" }} 
          />
        </a>
      </Link>
      <Link href="/contact">
        <a className={pagina === "Contact" ? styles.link : styles.contacto}>
          <FontAwesomeIcon
            icon={faMessage}
            style={{fontSize: 25, color: "white" }} 
          />
        </a>
      </Link>
      <a className={styles.darkmode}>
        {isDark ?
          <FontAwesomeIcon
            icon={faSun}
            style={{fontSize: 25, color: "yellow" }} 
            onClick={handleDarkMode}
          /> :
          <FontAwesomeIcon
            icon={faMoon}
            style={{fontSize: 25, color: "white" }} 
            onClick={handleDarkMode}
          />
        }
      </a>
  </nav>
  )
}

export default Menu