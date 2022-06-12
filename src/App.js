//import logo from './logo.svg';
import "./App.css";
//import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert="Hey there" />
      <TextForm />
    </>
  );
}

export default App;
