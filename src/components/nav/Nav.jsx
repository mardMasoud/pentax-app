import React, { useState } from "react";
import "./Nav.css";
import Collapse from "react-bootstrap/Collapse";
import Hamburger from "hamburger-react";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const listMenu = [" HOME", "ABOUT", "SERVICES", "PROJECT", "BLOG", "CONTACT"];

  const [isOpen, setOpen] = useState(false);
  const [Open,setopen]=useState(false)
 window.addEventListener('resize',handlshow)
 function handlshow(){
    
    if(window.innerWidth>=992)
     setopen(true)
     if(window.innerWidth<=991){
      setopen(false)
      setOpen(false)
     }
    
  }
  return (
    
      
    <div className="nav1 fixed-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-6 col-lg-3 mt-4">
            <img src="images/logo1.webp" alt="" className="logo__img" />
          </div>
          <div className="col-6 d-lg-none d-flex justify-content-end mt-4" >
            <div className="ber" onClick={()=>setopen(!Open)} > <Hamburger 
              toggled={isOpen}
              toggle={setOpen}
              
              color="#f81c1c"
              size="25"
              aria-controls="menu"
              aria-expanded={isOpen}
            /></div>
           
          </div>

          <Collapse in={Open} timeout={100}>
            <div className=" col-12 col-lg-9 pt-3  " id="menu">
              <ul className="d-lg-flex">
                {listMenu.map((item) => (
                  <a href="#" key={item} className="text-dark">
                    <li className="py-3 px-lg-4">{item}</li>
                  </a>
                ))}
                <a href="#" className="text-dark ">
                  <li className=" py-4 py-lg-3 ">
                    <FaSearch />
                  </li>
                </a>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
   
   
  );
}

export default Nav;
