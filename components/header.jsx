import React, {useState} from "react";

export default function Header() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  
  return (
    <>
      <div className={`layer${isMobileNavOpen ? " active" : ""}`}></div>
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <nav className={`mobile-nav${isMobileNavOpen ? " active" : ""}`}>
        <ul>
          <li>
            <a href="Home">Pricing</a>
          </li>
          <li>
            <a href="Home">Product</a>
          </li>
          <li>
            <a href="Home">About Us</a>
          </li>
          <li>
            <a href="Home">Careers</a>
          </li>
          <li>
            <a href="Home">Community</a>
          </li>
        </ul>
      </nav>
      <nav className="desktop-nav">
        <ul>
          <li>
            <a href="Home">Pricing</a>
          </li>
          <li>
            <a href="Home">Product</a>
          </li>
          <li>
            <a href="Home">About Us</a>
          </li>
          <li>
            <a href="Home">Careers</a>
          </li>
          <li>
            <a href="Home">Community</a>
          </li>
        </ul>
        <button className="desktop-nav-button">Get Started</button>
      </nav>
      <div className={`hamburger${isMobileNavOpen ? " active" : ""}`}
          onClick={() => {
            return setIsMobileNavOpen(!isMobileNavOpen);
          }}>
        <img src="/assets/icon-hamburger.svg" alt="hamburger icon" className="ham"/>
        <img src="/assets/icon-close.svg" alt="close button" className="close"/>
      </div>
    </>
  );
}
