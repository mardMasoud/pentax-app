import React, { useState } from "react";
import "./Nav.css";
import Collapse from "react-bootstrap/Collapse";
import Hamburger from "hamburger-react";
import { FaSearch} from "react-icons/fa";
function Nav() {
  const listMenu = [" HOME", "ABOUT", "SERVICES", "PROJECT", "BLOG", "CONTACT"];

  const [open, setOpen1] = useState(false);
  const [isOpen, setOpen] = useState(false);
  function togglemenu() {
    setOpen1(!open);
  }
  return (
    <div className="nav1">
      
        <div className="row align-items-center py-4 position-relative">
          <div className="logo col-6 ">
            <img src="images/logo1.webp" alt="" className="logo__img" />
          </div>
          <div
            className="col-6 d-lg-none "
            onClick={togglemenu}
            aria-controls="menu"
            aria-expanded={open}
          >
            <div className="toggle-button d-flex justify-content-end">
              <Hamburger toggled={isOpen} toggle={setOpen} color='#f81c1c' />
            </div>
          </div>

          <Collapse in={open} timeout={500}>
            <div className=" col-12 pt-3 " id="menu">
              <ul>
                {listMenu.map((item) => (
                  <a href="#" key={item} className="text-dark">
                    <li className=" p-2">{item}</li>
                  </a>
                ))}
              <a href="#" className="text-dark " ><li  className=" p-3 "><FaSearch/></li></a> 
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
   
  );
}

export default Nav;
