import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setShowAboutPage, setShowLoginForm, setSelectedCategory,setShowContactPage }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true); // Show the login form
    setShowContactPage(false)
    setShowAboutPage(false)
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactPage(true)
    setShowAboutPage(false)

   }

   const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAboutPage(true)
    setShowLoginForm(false); // Show the login form
    setShowContactPage(false)

   }

  const handleHomeClick = () => {
    setSelectedCategory('Home'); // Set Home category
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" onClick={handleHomeClick}>
        <span className="logo-design">NorthShop</span></a>
      </div>
      <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
        <li><a href="/" onClick={handleHomeClick}>Home</a></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Shop</a>
          <div className="dropdown-content">
            <div className="img">
              <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19393_Fallback_Moda_770x270.png" alt="#" />
              <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/augnew/D153742962_IN_WLD_BAU_Redmi13_5G_1400x800._CB565589919_.jpg" alt="#" />
            </div>
            <div className="dropdown-section">
              <h3>Most popular categories</h3>
              <a href="#">Electronics or Furniture</a>
              <a href="#">Men's branded Clothes</a>
              <a href="#">Woman Western Culture</a>
              <a href="#">Branded Shoes</a>
              <a href="#">Men's accessories</a>
              <a href="#">Sports Hub</a>
              <a href="#">Makeup accessories</a>
            </div>
            <div className="dropdown-section">
              <h3>More categories</h3>
              <a href="#">Smartphones and accessories</a>
              <a href="#">Apple</a>
              <a href="#">Samsung</a>
              <a href="#">Portable audio and headphones</a>
              <a href="#">Smart watches</a>
              <a href="#">Sell on MyEcom</a>
            </div>
          </div>
        </li>
        <li><a href="/about" onClick={handleAboutClick}>About</a></li>
        <li><a href="/contact" onClick={handleContactClick}>Contact</a></li>
        <li><a href="/Reviews">Reviews</a></li>
      </ul>
      <ul className="navbar-login-cart">
        <li><a href="/login" onClick={handleLoginClick}>Login</a></li>
        <li><a href="/signup">Sign up</a></li>
        <a href="/cart" className="cart-icon">🛒</a>
      </ul>
      <button className="mobile-menu-icon" onClick={handleToggle}>
        {isMobile ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
