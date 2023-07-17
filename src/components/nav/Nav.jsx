import React, { useState } from "react";
import "./Nav.css";
import Collapse from "react-bootstrap/Collapse";
import { Sling as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const listMenu = [" HOME", "ABOUT", "SERVICES", "PROJECT", "BLOG", "CONTACT"];

  const [isOpen, setOpen] = useState(false);
  const [isActive, setopen] = useState(false);
  window.addEventListener("resize", handlshow);
  function handlshow() {
    if (window.innerWidth >= 992) setopen(true);
    if (window.innerWidth <= 991) {
      setopen(false);
      setOpen(false);
    }
  }
  return (
    <div className="nav1">
      <div className="container">
        <div className="row  align-items-center ">
          <div className="logo col-11  col-lg-4  ">
            <img src="images/logo1.webp" alt="" className="logo__img" />
          </div>
          <div className="col-1 d-lg-none py-3   ">
            <div className="ber ">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                onToggle={(toggled) => {
                  setopen(!isActive);
                }}
                color="#f81c1c"
                size="25"
                aria-controls="menu"
                aria-expanded={isActive}
              />
            </div>
          </div>
          <div className=" col-12 col-lg-8 ">
          <Collapse in={isActive}>
            <ul className="d-lg-flex  " id="menu">
              {listMenu.map((item, index) => (
                // <a href="#" key={item} className="text-dark">
                //   <li className="py-3 px-lg-4">{item}</li>
                // </a>
                <li className="pb-4 px-lg-4  py-lg-3" key={index}>
                  <a href="#" className="text-dark">
                    {item}
                  </a>
                </li>
              ))}
              <li className="pb-4 py-lg-3 ">
                <a href="#" className="text-dark">
                  <FaSearch />
                </a>
              </li>
            </ul>
          </Collapse>
        </div>
        </div>

       
      </div>
    </div>
  );
}

export default Nav;
