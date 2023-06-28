import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
const toggleMode=()=>{
    if(mode==='dark'){
      setDarkMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
     else {
      setDarkMode('dark')
      document.body.style.backgroundColor="#03001C"
      document.body.style.color="white"
    }
  }
const showalert=(message,type)=>{
setalert({
    msg:message,
    type:type,// type is in bootstrap
  });
 // Clear the alert after a certain period
 setTimeout(() => {
  setalert({});
}, 2000);
}

  const [alert, setalert] = useState({})
  const [mode, setDarkMode]=useState('light'); // dark is enable or not
  
  return (
  <>
 <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       <div className="container my-3 mx-7"> 
        <Textform heading="Enter Text to analyse" mode ={mode} showalert={showalert}/>
             </div>  
</>
);
}
export default App;