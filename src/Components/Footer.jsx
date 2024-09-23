import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';
// Additional imports for other icons would be necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="about-section">
          <h5>ABOUT</h5>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">MyEcom Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div className="shop-companies-section">
          <h5>SHOP COMPANIES</h5>
          <ul>
            <li><a href="#">MyEcom</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>
        <div className="customer-policy-section">
          <h5>CUSTOMER POLICY</h5>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>
        <div className="mail-us-section">
          <h5>Mail Us:</h5>
          <p>MyEcom Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>
        <div className="registered-office-address-section">
        <h5>Registered Office Address:</h5>
        <p>MyEcom Internet Private Limited,</p>
        <p>Buildings Alyssa, Begonia &</p>
        <p>Clove Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103,</p>
        <p>Karnataka, India</p>
        <p>Telephone: 044-45614700 / 044-67415800</p>
        <p>CIN : U51109KA2012PTC066107</p>
      </div>
      </div>
      <hr className="footer-divider" />
    
      <div className="bottom">
      {/* Seller link */}
      <div className="bottom-item">
        <a href="/seller" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" className="bottom-link">Become a Seller</a>
      </div>
      <div className="bottom-item">
        <a href="/advertise" className="bottom-link">Advertise</a>
      </div>
      <div className="bottom-item">
        <a href="/gift-cards" className="bottom-link">Gift Cards</a>
      </div>
      <div className="bottom-item">
        <a href="/help-center" className="bottom-link">Help Center</a>
      </div>
      <div className="bottom-item">
        <span>© 2007-2024 Flipkart.com</span>
      </div>

      {/* Social media links */}
      <div className="social-media-links">
        <a href="https://www.youtube.com/watch?v=eILUmCJhl64&list=PPSV" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        {/* Add additional social media links here */}
      </div>
    </div>
    </footer>
  );
};

export default Footer;
