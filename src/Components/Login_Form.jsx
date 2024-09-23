import React from "react";
import './Login_form.css'; // Assume this file will contain the CSS for styling
import Footer from './Footer'

const LoginPage = () => {
  return (
    <>
    <div className="login-page-container">
      <div className="login-box">
        {/* Left section with image and text */}
        <div className="left-section">
          <div className="left-card">
            <div className="text-content">
              <h1>Simplify management with our dashboard.</h1>
              <p>Simplify your e-commerce management with our user-friendly admin dashboard.</p>
            </div>
            <div className="image-container">
              {/* Add your characters image here */}
              <img src="./anime2.png" alt="characters" />
            </div>
          </div>
        </div>

        {/* Right section with form */}
        <div className="right-section">
          <div className="form-container">
            <div className="logo-container">
              <div className="logo-icon">
                {/* You can add a logo image here */}
                <img src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png" alt="E Spurt Logo" />
              </div>
              <h2>E Sport</h2>
            </div>
            <h3>Welcome Back</h3>
            <p>Please login to your account</p>

            <form className="login-form">
              <input type="email" placeholder="Email address" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>

            <div className="social-login">
              <p>Or Login with</p>
              <div className="social-buttons">
                <button className="social-btn google-btn">
                  <img src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png" alt="Google" className="social-icon" />
                  Google
                </button>
                <button className="social-btn facebook-btn">
                  <img src="https://seeklogo.com/images/F/facebook-new-2019-logo-5A4671100B-seeklogo.com.png" alt="Facebook" className="social-icon" />
                  Facebook
                </button>
              </div>

            </div>

            <div className="signup">
              <p>Don't have an account? <a href="/signup">Signup</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
