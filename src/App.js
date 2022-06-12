//import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
    </>
  );
}

export default App;
