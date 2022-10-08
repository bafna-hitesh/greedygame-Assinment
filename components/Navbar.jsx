import React from "react";
import NavbarLogo from "../public/NavbarLogo.svg";

const Navbar = () => {
  return (
    <div className="navbar fixed">
      <div className="nav-img">
        <div className="burger nav-section-items">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <img
          src={NavbarLogo.src}
          className="nav-logo"
          alt="greedygame logo image"
        />
      </div>
    </div>
  );
};

export default Navbar;
