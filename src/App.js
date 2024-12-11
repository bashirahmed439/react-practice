import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";

function App() {
  // let name= "bashir";
  const [mode, setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
   setAlert ({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
    
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f2148";
      showAlert("Dark mode has been enabled","Success");
      document.title= "BNH - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled" , "Success");
      document.title= "BNH - Light Mode";

    }
  };
  return (
    <>
   
      
   <Router>
      <div className="container">
        <Navbar mode={mode} title="BNH" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/* Define the route for About page */}
          <Route exact path="/about" element={<About />} />
          {/* Define the route for the home page */}
          <Route exact path="/" element={<TextArea />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;