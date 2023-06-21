import React from "react";
import "../../assets/bootstrap.min.css";

import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="nav">
          <div className="nav__left">
            <a href="#">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="nav__right">
            <ul className="menu">
              <li className="menu___item">
                <a href="#" className="menu__link">HOME</a>
              </li>
              <li className="menu___item">
                <a href="#" className="menu__link">ABOUT</a>
              </li>
              <li className="menu___item">
                <a href="#" className="menu__link">SERVICES</a>
              </li>
              <li className="menu___item">
                <a href="#" className="menu__link">PROJECT</a>
              </li>
              <li className="menu___item">
                <a href="#" className="menu__link">BLOG</a>
              </li>
              <li className="menu___itemu">
                <a href="#" className="menu__link">CONTACT</a>
              </li>
            </ul>
            <div className="btn-search">
              <ul>
                <li><a href="#" className="link--search"><i class="fas fa-search"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
