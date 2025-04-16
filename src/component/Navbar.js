import React, { useState } from "react";
import "./style.css";
// import logo from "./logo.png"; // Use your logo or icon here

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img src={logo} alt="Primecare logo" className="logo" /> */}
        <span className="brand-name">
          <strong>Prime</strong>care
        </span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>

      <div className="navbar-right">
        {/* nav links start */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li
            onMouseEnter={() => toggleDropdown("home")}
            onMouseLeave={() => toggleDropdown(null)}
            onClick={() => toggleDropdown("home")}
          >
            <a href="#" className="link">
              Home <span className="arrow">▼</span>
            </a>
            {openDropdown === "home" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Home - Image
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Home - Video
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Home - Slider
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Services
            </a>
          </li>
          <li
            onMouseEnter={() => toggleDropdown("pages")}
            onMouseLeave={() => toggleDropdown(null)}
            onClick={() => toggleDropdown("pages")}
          >
            <a href="#" className="link">
              Pages <span className="arrow">▼</span>
            </a>
            {openDropdown === "pages" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="link">
                    pages
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    pages - Image
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    pages - Video
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    pages - Slider
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="link">
              Contact Us
            </a>
          </li>
        </ul>
        {/* nav links end  */}

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#" className="book-button link">
            Book Appointment <span className="arrow-right">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
