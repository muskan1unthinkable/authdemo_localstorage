import React from "react";
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import "../App.css";

const Navbar = (props) => {
    const onLogout =()=>
    {
        localStorage.removeItem("username");
        props.isLoggedOut();
        
    }
  return (
    <>
      <BrowserRouter>
        <nav className="Nav">
          <li>
            <Link to="/"> Home</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact </Link>
          </li>
         
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
         
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        
      </BrowserRouter>
      <button onClick={onLogout}> Logout</button>
    </>
  );
};

export default Navbar;
