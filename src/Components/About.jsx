import React from 'react'
import './About.css'
import OurTeam from './OurTeam'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <div className="About-Container">
        {/* section-I */}
        <section className="full-width-section">
          <div className="left-content">
            <h1>About Us</h1>
            <h2>Welcome to NorthShop!</h2>
            <p>At NorthShop, we are passionate about creating innovative and practical solutions that make life easier and more enjoyable. Founded in [Year of Establishment], our mission has always been to deliver high-quality products and services that exceed our customers' expectations.</p>
          </div>
          <div className="right-image">
            <img src="https://optima.college/assets/images/specialties/graphic-design-info-2.png" alt="Right Side Image" />
          </div>
        </section>

        {/* section-II */}

        <section className="about-us-section">
      <div className="about-us-image">
        <img src="https://appoks.com/wp-content/uploads/2022/03/request-hero.png" alt="Team at work" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>At NorthShop, we specialize in delivering customized solutions that help businesses improve their digital presence. Our team of experts is dedicated to providing innovative and effective solutions for businesses of all sizes.</p>
        <p>Our commitment to excellence drives everything we do. We work closely with clients to understand their needs and deliver results that exceed expectations. From concept to execution, we ensure that every project is completed with precision and care.</p>
        <button>Get in touch</button>
      </div>
    </section>

        {/* section-III */}
        
        <section className="cards-container">
          <h1>Why Choose Us!</h1>
          <div className="Card-parent">
            <div className="card">
              <h3>Expertise</h3>
              <p>We have extensive experience in delivering top-notch solutions for clients across various industries and Organisation
              </p>
            </div>
            <div className="card">
              <h3>Attention to Detail</h3>
              <p>We take pride in our work, and give close attention to every detail, ensuring that the end product is of the highest quality.</p>
            </div>
            <div className="card">
              <h3>Customer-Centric Approach: </h3>
              <p>We focus on understanding and addressing your needs.Our passion for excellence drives everything we do.
              </p>
            </div>
            <div className="card">
              <h3>Innovative Solutions:</h3>
              <p>We embrace the latest technologies to offer cutting-edge solutions.</p>
            </div>
          </div>
        </section>
        <OurTeam/>
        <Footer/>
      </div>

    </>
  )
}

export default About
