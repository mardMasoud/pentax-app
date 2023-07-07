import React, { useState } from "react";
import "./Navbar.css";
import Collapse from "react-bootstrap/Collapse";
import Hamburger from 'hamburger-react'

function Navbar() {
  const listMenu = [" HOME", "ABOUT", "SERVICES", "PROJECT", "BLOG", "CONTACT"];
 
   
  const [open, setOpen1] = useState(false);
  const [isOpen, setOpen] = useState(false)
  function togglemenu() {
    setOpen1(!open);

   
  }
  return (
    <div className="nav">
      <div className="container">
        <div className="row align-items-center py-4 position-relative">
          <div className="logo col-6 ">
            <img src="images/logo1.webp" alt="" className="logo__img" />
          </div>
          <div className="hamber1 col-6 d-lg-none justify-content-center" onClick={togglemenu}> 
          <Hamburger toggled={isOpen} toggle={setOpen}    aria-controls="menu"
            aria-expanded={open}/>
          </div>
       
          <Collapse in={open} timeout={500}>
            <div className=" col-12 pt-3" id="menu">
              <ul>
                {listMenu.map((item) => (
                  <a href="#" key={item} className="text-dark">
                    <li className="border p-4">{item}</li>
                  </a>
                ))}
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
