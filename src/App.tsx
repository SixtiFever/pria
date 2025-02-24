import React, { useState } from "react";
import "./LandingPageCrispBlue.css";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend or email service
      console.log("Email submitted:", email);
      // Reset the email input after submission
      setEmail("");
      alert("Thank you for your interest! We'll be in touch soon.");
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">Pria</h1>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="hero-section" style={{ height: window.innerHeight * 0.6 }}>
        <div className="hero-image">
          {/* White overlay for the background */}
          <div className="overlay"></div>
          
          <div className="hero-content">
            <h2>AI-Driven Project Management</h2>
            {/* <h2>Project Management. Reimagined.</h2> */}
            {/* <p>We transform work statements into end-to-end project plans using Machine Learning.</p> */}
            <p>Convert work statements into project workflows, in one click.</p>
            <div className="email-capture" style={{ width: '100%' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="cta-button" onClick={handleEmailSubmit}>I'm Interested</button>
            </div>
            <div className="status-label">
                <p>Currently in development</p>
            </div>
          </div>
        </div>
      </header>
      <section id="features" className="features-section">
        <h3>Key Features</h3>
        <div className="features">
          <div className="feature-card">
            <h4>AI-Powered</h4>
            <p>Harness the power of artificial intelligence to streamline your workflow.</p>
          </div>
          <div className="feature-card">
            <h4>Secure & Reliable</h4>
            <p>Advanced security features to keep your data safe and protected.</p>
          </div>
          <div className="feature-card">
            <h4>Seamless Integration</h4>
            <p>Effortlessly integrates with your existing tools and software.</p>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <h3>About TechNova</h3>
        <p>TechNova is an innovative software solution designed to empower businesses with next-gen technology.</p>
      </section>
      <section id="contact" className="contact-section">
        <h3>Get in Touch</h3>
        <p>Want to learn more? Contact us at <a href="mailto:info@technova.com">info@technova.com</a></p>
      </section>
      <footer className="footer">
        <p>&copy; 2025 TechNova. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
