import UseDataForm from '../hooks/useDataForm';
import Layout from '../components/Layout'
import Styles from '../styles/Contact.module.scss'
import Error from '../components/Error';

const contact = () => {
  
  const { data, setData, error, setError, handleChange } = UseDataForm();
  
  const handleSubmit = (e) => {
    // e.preventDefault();
    
    if(data.name === "" && data.email === "" && data.message === "") {
      setError('Todos los campos son obligatorios');
      setTimeout(() => {
        setError('');
      }, 3000);
    return;
    }
    setData(); 
  }
  
  return (
    <Layout
      pagina="Contact"
    >
      <div className={Styles.container}>
        <header className={Styles.cabecera}>
          <a href='https://github.com/josegsuarezg?tab=repositories'>GitHub</a>
        </header>
        <form 
          onSubmit={handleSubmit} 
          className={Styles.formulario}
          action="https://formsubmit.co/d33cd42350d512288a3386cc2af789c8" 
          method="POST"
        >
          <div className={Styles.alert}>
            {error && <Error/>}
          </div>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Nombre" 
            onChange={e => handleChange(e)} 
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email" 
            onChange={e => handleChange(e)} 
          />
          <textarea 
            name="mensaje" 
            id="mensaje" 
            cols="30" 
            rows="6" 
            placeholder='Mensaje'
            onChange={e => handleChange(e)} 
          ></textarea>
          <input type="submit" value="Enviar Email" className='' />
          
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="/" />
          
        </form>
      </div>
    </Layout>
  )
}



export default contact