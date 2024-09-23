import React from 'react'
import './Contact.css'
import Footer from './Footer'
import OurTeam from './OurTeam'
const Contact = () => {
  return (
    <>

        <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us for Need any help</h1>
        <p>Get all of the features in a Moosend Pro plan as well as a Dedicated Account Manager, Priority Support, SSO & SAML, and a Dedicated IP.</p>

        <p>Join the world-famous companies that use Moosend</p>

        <div className="company-logos">
          <img src="https://seeklogo.com/images/H/hewlett-packard-enterprise-logo-ECED91B8DF-seeklogo.com.png" alt="Company 1" />
          <img src="https://iconape.com/wp-content/png_logo_vector/sephora-logo.png" alt="Company 2" />
          <img src="https://seeklogo.com/images/N/Nova-logo-C72C77B5D1-seeklogo.com.gif" alt="Company 3" />
          <img src="https://seeklogo.com/images/D/Dixons-logo-084D7A8994-seeklogo.com.png" alt="Company 4" />
          <img src="https://seeklogo.com/images/R/rephlex-logo-CBB696F950-seeklogo.com.png" alt="Company 5" />
          <img src="https://seeklogo.com/images/D/domino-s-pizza-logo-E30AA0CE80-seeklogo.com.png" alt="Company 6" />
        </div>
      </div>


      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>You can reach us anytime</p>
        <form action="#" className='form-contact'>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First name" required />
            <input type="text" name="lastName" placeholder="Last name" required />
          </div>
          <input type="email" name="email" placeholder="Your email" required />
          <input type="tel" name="phone" placeholder="Phone number" required />
          <textarea name="message" placeholder="How can we help?" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>

      <div className="support-options">
        <div className="support-option">
          <h3>Chat Support</h3>
          <p>Our support team is just a click away.</p>
          <a href="#">Chat Now →</a>
        </div>
        <div className="support-option">
          <h3>Email Support</h3>
          <p>Prefer to email? Send us an email, and we’ll get back to you soon.</p>
          <a href="#">Send Email →</a>
        </div>
        <div className="support-option">
          <h3>Help Center</h3>
          <p>Our self-serve help center is open 24/7 with 150+ articles to help.</p>
          <a href="#">Visit Help Center →</a>
        </div>
      </div>

      {/* Image section below */}
     <OurTeam></OurTeam>
<Footer />

    </>
  )
}

export default Contact

{/* <div className="contact-container">
  <div className="contact-info">
    <h1>Contact Us</h1>
    <p>Email, call, or drop by anytime. We’ll respond as  <br/>  soon as possible to help you with your inquiry</p>
    <p>Email: info@yourcompany.com</p>
    <p>Phone: +1 123-456-7890</p>
    <a href="#">Customer Support</a>

    <div className="contact-categories">
      <div>
        <h3>Customer Support</h3>
        <p>Our team is available to assist you with any queries.We value your feedback to help improve our services.</p>
      </div>
      <div>
        <h3>Feedback & Suggestions</h3>
        <p>We value your feedback to help improve our services.Our team is available to assist you with any queries.
          For media-related questions, please get in touch.
        </p>
      </div>
      <div>
        <h3>Media Inquiries</h3>
        <p>For media-related questions, please get in touch.We value your feedback to help improve our services.Our team is available to assist you with any queries</p>
      </div>
    </div>
  </div> */}