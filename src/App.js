// import './App.css';
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12	">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>

      </Routes>

    </div>
  );
}

export default App;
