import useDataForm from "../hooks/useDataForm";
import Styles from "../styles/Error.module.scss";

const Error = () => {
  const { error } = useDataForm();
  
  return (
    <div>
      <p className={Styles.error}>{error}</p>
    </div>
  )
}

export default Error