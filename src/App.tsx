import React, { useState } from "react";
import "./LandingPageCrispBlue.css";
import heroImage from './media/5.png'
import { PiTreeStructure, PiTreeStructureFill } from "react-icons/pi";
import { MdRocketLaunch, MdAutoAwesome, MdCloudUpload, MdSpaceDashboard } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { FIRESTORE } from '../firebaseConfig'
import { collection, doc, runTransaction } from "firebase/firestore";

const LandingPage: React.FC = () => {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // Here you would typically send the email to your backend or email service
      console.log("Email submitted:", email);
      // Reset the email input after submission

      runTransaction(FIRESTORE, async (transaction) => {
        const colRef = collection(FIRESTORE, 'emails');
        const docRef = doc(colRef, email);
        transaction.set(docRef, {'email': email})
      })

      setEmail("");
      alert("Thank you for your interest! We'll be in touch soon.");
    } else {
      alert("Oops! Is the email address correct?");
    }
  };

  if ( isDesktopOrLaptop || isBigScreen ) {

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
                <div className="hero-content" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <div className="text" style={{ textAlign: 'left' }} >
                        <h2>AI-Driven Project Management</h2>
                        <p style={{ textAlign: 'left' }}>Convert work statements into project plans - instantly and effortlessly.</p>
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
            <p>Pria uses <b className="feature-subtitle-bold">Document-based AI</b> to automate the creation of project workflows</p>
            <div className="features">
              <div className="feature-card">
                <MdCloudUpload size={100} color="#EE4266" />
                <h4>Upload & Initiate</h4>
                <p>Once the client engagement proposal is finalized, upload the signed work statement to Pria - <b>kicking off the automated project planning process.</b></p>
              </div>
              <div className="feature-card">
                <MdAutoAwesome size={100} color="#EE4266" />
                <h4>Smart Extraction</h4>
                <p>Pria’s <b>Machine Learning model scans and processes the work statement</b>, extracting key details like phases, deliverables and timelines — eliminating manual effort.</p>
              </div>
              <div className="feature-card">
                <MdRocketLaunch size={100} color="#EE4266" />
                <h4>Workflow Automation</h4>
                <p>Based on the extracted information, <b>Pria auto-generates a structured project workflow</b>, giving you a clear, end-to-end view of your project’s execution plan.</p>
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
                <p>Pria’s tailored model <b>instantly transforms Statements of Work into structured project workflows</b> — eliminating manual setup so your team can focus on high-value tasks.</p>
              </div>
              <div className="feature-card">
                <PiTreeStructureFill size={100} color="#EE4266" />
                <h4>Progress Tracking</h4>
                <p><b>Visualize your projects as Project Trees</b> - a chronological, easy-to-read structure that simplifies tracking, making it effortless to manage and interpret project status at a glance.</p>
              </div>
              <div className="feature-card">
                <MdSpaceDashboard size={100} color="#EE4266" />
                <h4>Client Insight Dashboard</h4>
                <p><b>Centralised client management dashboard.</b> Projects, client news and key metrics all in one place, ensuring better client management and stronger relationships.</p>
              </div>
            </div>
          </section>
          <section id="contact" className="contact-section">
            <h3>Get in Touch</h3>
            <p>Want to learn more? Contact us at <a href="mailto:hello@getpria.com">hello@getpria.com</a></p>
          </section>
          <footer className="footer">
            <p>&copy; 2025 Pria Software. All Rights Reserved.</p>
          </footer>
        </div>
      );
    } else {
        return (
            <div className="landing-container-sml">
                <div className="navbar-sml">
                    {/* <h1 className="logo">Pria</h1> */}
                    <div className="logo-container-sml">
                        <PiTreeStructure size={32} color="white"/>
                        <h2>Pria</h2>
                    </div>
                </div>
                <div className="hero-section-sml">
                    <div className="hero-content-container-sml">
                        <div className="hero-content-sml">
                            <div className="text" >
                                <h2>AI-Driven Project Management</h2>
                                <p>Convert work statements into project plans - instantly and effortlessly.</p>
                            </div><br></br>
                            <div>
                                <p><b style={{ color: 'green' }}>Interested? Sign up for demo!</b></p>
                            </div>
                            <div className="email-capture" style={{ width: '100%'}}>
                                <input
                                    style={{backgroundColor: 'white'}}
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="cta-button" onClick={handleEmailSubmit}>Submit</button>
                            </div>
                            <div className="status-label-sml">
                                <p>Coming soon!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="howitworks" className="features-section-sml">
                    <h2>How it works</h2>
                    <p>Pria uses <b className="feature-subtitle-bold">Document-based AI</b> to automate the creation of project workflows</p>
                    <div className="features-sml">
                    <div className="feature-card-sml">
                        <div className="feature-title-container-sml">
                            <MdCloudUpload size={40} color="#EE4266" />
                            <h3>Upload & Initiate</h3>
                        </div>
                        <p>Once the client engagement proposal is finalized, upload the signed work statement to Pria - <b>kicking off the automated project planning process.</b></p>
                    </div>
                    <div className="feature-card-sml">
                        <div className="feature-title-container-sml">
                            <MdAutoAwesome size={40} color="#EE4266" />
                            <h3>Smart Extraction</h3>
                        </div>
                        <p>Pria’s <b>Machine Learning model scans and processes the work statement</b>, extracting key details like phases, deliverables and timelines — eliminating manual effort.</p>
                    </div>
                    <div className="feature-card-sml">
                        <div className="feature-title-container-sml">
                            <MdRocketLaunch size={40} color="#EE4266" />
                            <h3>Workflow Automation</h3>
                        </div>
                        <p>Based on the extracted information, <b>Pria auto-generates a structured project workflow</b>, giving you a clear, end-to-end view of your project’s execution plan.</p>
                    </div>
                    </div>
                </section>

                <section id="howitworks" className="features-section-sml">
                <h2>Key Features</h2>
                <p><b className="feature-subtitle-bold">Automated</b> project setup - <b className="feature-subtitle-bold">Simple</b> progress tracking - <b className="feature-subtitle-bold">Centralised</b> client management.</p>
                    <div className="features-sml">
                    <div className="feature-card-sml">
                        <div className="feature-title-container-sml">
                            <FaRobot size={40} color="#EE4266" />
                            <h3>AI-Powered</h3>
                        </div>
                        <p>Pria’s tailored model <b>instantly transforms Statements of Work into structured project workflows</b> — eliminating manual setup so your team can focus on high-value tasks.</p>
                    </div>
                    <div className="feature-card-sml">
                        <div className="feature-title-container-sml">
                            <PiTreeStructureFill size={40} color="#EE4266" />
                            <h3>Progress Tracking</h3>
                        </div>
                        <p><b>Visualize your projects as Project Trees</b> - a chronological, easy-to-read structure that simplifies tracking, making it effortless to manage and interpret project status at a glance.</p>
                    </div>
                    <div className="feature-card-sml">
                        <div className="feature-title-container-sml">
                            <MdSpaceDashboard size={40} color="#EE4266" />
                            <h3>Client Insight Dashboard</h3>
                        </div>
                        <p><b>Centralised client management dashboard.</b> Projects, client news and key metrics all in one place, ensuring better client management and stronger relationships.</p>
                    </div>
                    </div>
                </section>
                <section id="contact" className="contact-section" style={{ backgroundColor: 'white' }}>
                    <h3>Get in Touch</h3>
                    <p>Want to learn more? Contact us at <a href="mailto:hello@getpria.com">hello@getpria.com</a></p>
                </section>
                <footer className="footer">
                    <p>&copy; 2025 Pria Software. All Rights Reserved.</p>
                </footer>
            </div>
        )
    }

  }

export default LandingPage;
