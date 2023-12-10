import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="w-100" id="header-nav">
      <div className="container py-2 px-8">
        <div className="row">
          <div className="col">
            <a href="/"><img
            className="float-md-start "
              src="https://metasaviors-clone.netlify.app/static/media/site-logo.e50e74728eab0bffbedd23f5f86ee3cf.svg"
              alt="logo of website"
            /></a>
            
          </div>
          <div className="col-md-8">
            <ul id="menu" className="float-md-end">
              <li className="nav-item fs-6 fw-bold my-2">
                <a
                  href="/"
                  className="nav-link"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item fs-6 fw-bold">
                <a href="/" className="nav-link">
                  TEAM
                </a>
              </li >
              <li className="nav-item fs-6 fw-bold">
                <a href="/" className="nav-link">
                  ROADMAP
                </a>
              </li>
              <li className="nav-item fs-6 fw-bold">
                <a href="/" className="nav-link">
                  FAQ
                </a>
              </li>
              <li className="nav-item fs-6 fw-bold">
                <button  className="btn nav-last-link">
                  Install Metamask
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
