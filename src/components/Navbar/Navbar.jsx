import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import underline from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();
  const [menu, setMenu] = useState("home");     
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    
    const w = window.innerWidth;
    if (w <= 450) {
      menuRef.current.style.right = "0"; 
      
      menuRef.current.style.right = "0";
    }
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    
    const w = window.innerWidth;
    if (w <= 450) {
      menuRef.current.style.right = "-300px";
    } else if (w <= 768) {
      menuRef.current.style.right = "-350px";
    } else {
      
      menuRef.current.style.right = "-350px";
    }
    setIsMenuOpen(false);
  };

 
  const handleNavClick = (target) => {
    setMenu(target);
    
    if (window.innerWidth <= 768) closeMenu();
  };

  return (
    <div className="navbar">
      <img id="vol" src={logo} alt="logo" />

     
      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="open menu"
          className="nav-mob-open"
        />
      )}

      <ul ref={menuRef} className="nav-menu">
        
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="nav-mob-close"
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleNavClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && (
            <img src={underline} alt="underline" style={{ height: "20px", width: "auto" }} />
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleNavClick("about")}>About</p>
          </AnchorLink>
          {menu === "about" && (
            <img src={underline} alt="underline" style={{ height: "20px", width: "auto" }} />
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p onClick={() => handleNavClick("project")}>Project</p>
          </AnchorLink>
          {menu === "project" && (
            <img src={underline} alt="underline" style={{ height: "20px", width: "auto" }} />
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleNavClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img src={underline} alt="underline" style={{ height: "20px", width: "auto" }} />
          )}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;