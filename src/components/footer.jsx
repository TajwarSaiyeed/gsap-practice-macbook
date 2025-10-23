import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More way to shop: Find an Apple store or other retailer near you. Or{" "}
          <a href="#">call 1-800-MY-APPLE.</a>
        </p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>

      <hr />

      <div className="links">
        <p>
          Copyright © {new Date().getFullYear()} GSAP Learn Apple Inc. All
          rights reserved.
        </p>
        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
