import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import Alert from './Alert';
import About from './About';
import React,{ useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode,setmode]=useState('light');
const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}
  const toggleMode=()=>{
    if(Mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#292d39"
      document.body.style.color="white"
      showAlert("Dark mode has been enabled!","success")
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black";
      showAlert("Light mode has been enabled!","success")
      
    }
  }
  
  return (
    <>
        
        <BrowserRouter>
        <Navbar title="TextUtils" about="About Us"  mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert}/> 
        <div className="container my-4" mode={Mode} >
          <Routes>
            <Route exact path="/About" element={
              <About mode={Mode} toggleMode={toggleMode} />
              } ></Route>
            <Route
              exact path="/"
              element={
                <Form heading="Enter the text to analyze" showAlert={showAlert} mode={Mode}  />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
        
    </>
  );
}

export default App;

// in react router package we can smoothly change the components of website we dont need to rebuilt the components like navbar that it can stay at its place and we only need to change the components that user interacts

