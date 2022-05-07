import { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    mensaje: '',  
  });
  
  const [error, setError] = useState('');
  const [isDark, setIsDark] = useState(false);
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleDarkMode = () => {
    const dark = document.body.classList.contains('dark');
    if(!dark) {
      document.body.classList.add('dark');
      setIsDark(true);
    }else {
      document.body.classList.remove('dark');
      setIsDark(false);
    }
  }
  
  return (
    <DataContext.Provider 
      value={{ 
        data, 
        setData, 
        error,
        setError,
        isDark,
        setIsDark,
        handleChange, 
        handleDarkMode
      }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider}

export default DataContext;