import Layout from '../components/Layout'
import Styles from '../styles/Contact.module.scss'


const contact = () => {
  
  return (
    <Layout
      pagina="Contact"
    >
      <div className={Styles.container}>
        <header className={Styles.cabecera}>
          <a href='https://github.com/josegsuarezg?tab=repositories'>GitHub</a>
        </header>
        <form action="" className={Styles.formulario}>
          <input type="text" name="name" id="name" placeholder="Nombre" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea name="mensaje" id="mensaje" cols="30" rows="6" placeholder='Mensaje'></textarea>
          <button type="submit">Enviar Email</button>
        </form>
      </div>
    </Layout>
  )
}

export default contact