import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Headers from "./Components/Headers";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";

function App() {
  return(    <>
  <Headers/>
              <Routes>
              <Route path="/" element={<Signup/>}>Signup</Route>
                <Route path="/home" element={<Home/>}>Home</Route>
              
                <Route path="/login" element={<Login/>}>Login</Route>
                <Route path="/profile" element={<Profile/>}>Profile</Route>
              </Routes>
  <Footer/>            
              </>
          )
          }

export default App;
