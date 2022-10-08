import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        ©2022 GreedyGame, Inc. All rights reserved.
      </div>
      <div className="footer-fix">
        Get a Call back from us{" "}
        <Link href="#main-form" scroll>
          <button className="footer-fix-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
