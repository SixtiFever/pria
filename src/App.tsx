import React, { useState } from "react";
import "./LandingPageCrispBlue.css";
import heroImage from './media/5.png'
import { PiTreeStructure, PiTreeStructureFill } from "react-icons/pi";
import { MdRocketLaunch, MdAutoAwesome, MdCloudUpload, MdSpaceDashboard } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";

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
        {/* <h1 className="logo">Pria</h1> */}
        <div className="logo-container">
            <PiTreeStructure size={32} color="white"/>
            <h2>Pria</h2>
        </div>
        <ul className="nav-links">
        <li><a href="#howitworks">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="hero-section" style={{ height: window.innerHeight * 0.7 }}>
        <div className="hero-content-container">
            <div className="hero-content">
                <div className="text" >
                    <h2>AI-Driven Project Management</h2>
                {/* <h2>Project Management. Reimagined.</h2> */}
                {/* <p>We transform work statements into end-to-end project plans using Machine Learning.</p> */}
                {/* <p>Convert work statements into project workflows, in one click.</p> */}
                    <p>Convert work statements into project plans - instantly and effortlessly.</p>
                </div>
                <div className="email-capture" style={{ width: '100%'}}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="cta-button" onClick={handleEmailSubmit}>Submit</button>
                </div>
                <div className="status-label">
                    <p>Coming soon!</p>
                </div>
            </div>
            <div className="hero-image-2-container">
                <img src={heroImage} className="image-tag"/>
                {/* <div className="hero-image-2">

                </div> */}
            </div>
        </div>
      </header>
      <section id="howitworks" className="features-section">
        <h2>How it works</h2>
        <p>Pria uses <b className="feature-subtitle-bold">Document Extraction AI</b> to automate the creation of project workflows</p>
        <div className="features">
          <div className="feature-card">
            <MdCloudUpload size={100} color="#EE4266" />
            <h4>Upload & Initiate</h4>
            <p>Once the client engagement proposal is finalized, upload the signed work statement to Pria - kicking off the <b>automated project planning</b> process</p>
          </div>
          <div className="feature-card">
            <MdAutoAwesome size={100} color="#EE4266" />
            <h4>Smart Extraction</h4>
            <p>Pria’s <b>AI-powered document extraction model</b> scans and processes the work statement, extracting key details like phases, deliverables and timelines — eliminating manual effort.</p>
          </div>
          <div className="feature-card">
            <MdRocketLaunch size={100} color="#EE4266" />
            <h4>Workflow Automation</h4>
            <p>Based on the extracted information, Pria <b>auto-generates</b> a structured project workflow, giving you a clear, end-to-end view of your project’s execution plan.</p>
          </div>
        </div>
      </section>
      <section id="features" className="features-section" style={{ backgroundColor: 'white' }}>
        <h2>Key Features</h2>
        <p><b className="feature-subtitle-bold">Automated</b> project setup - <b className="feature-subtitle-bold">Simple</b> progress tracking - <b className="feature-subtitle-bold">Centralised</b> client management.</p>
        <div className="features">
          <div className="feature-card">
            <FaRobot size={100} color="#EE4266" />
            <h4>AI-Powered</h4>
            <p>Pria’s Document Extraction AI instantly transforms Statements of Work into structured project workflows—eliminating manual setup so your team can focus on high-value tasks.</p>
          </div>
          <div className="feature-card">
            <PiTreeStructureFill size={100} color="#EE4266" />
            <h4>Progress Tracking</h4>
            <p>Visualize your projects as Project Trees - a chronological, easy-to-read structure that simplifies tracking, making it effortless to manage and interpret project status at a glance.</p>
          </div>
          <div className="feature-card">
            <MdSpaceDashboard size={100} color="#EE4266" />
            <h4>Client Insight Dashboard</h4>
            <p>Access everything about your clients—past projects, current work, and real-time updates—all in one place, ensuring better client management and stronger relationships.</p>
          </div>
        </div>
      </section>
      {/* <section id="about" className="about-section">
        <h3>About TechNova</h3>
        <p>TechNova is an innovative software solution designed to empower businesses with next-gen technology.</p>
      </section> */}
      <section id="contact" className="contact-section">
        <h3>Get in Touch</h3>
        <p>Want to learn more? Contact us at <a href="mailto:info@technova.com">placeholder@email.com</a></p>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Pria. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
