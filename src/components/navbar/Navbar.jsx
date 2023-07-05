import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const listMenu = [" HOME", "ABOUT", "SERVICES", "PROJECT", "BLOG", "CONTACT"];
  const [show, setshow] = useState("none");
  function show1() {
    if (show == "none") setshow("block");
    else setshow("none");
  }
  return (
    <div className="nav">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="logo col-6 ">
            <img src="images/logo1.webp" alt="" className="logo__img" />
          </div>

          <div className="hamber col-6 d-lg-none align-items-end " onClick={show1}>
            <div className="child child1"></div>
            <div className="child child2"></div>
            <div className="child child3"></div>
          </div>
          <div className="menu col-12 pt-3 " style={{ display: show }}>
            <ul>
              {listMenu.map((item) => (
      
                <a href="#" className="text-dark"><li className="border p-4">{item}</li></a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
