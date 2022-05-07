import { useContext } from "react";
import DataContext from "../context/DataProvider";


const useDataForm = () => {
  return useContext(DataContext);
}

export default useDataForm;