import { Link } from "react-router-dom";
import "./Landing.css"; 

export default function Landing() {
  return (
    <div className="landing-page">
      
      {/* BACKGROUND ORBS */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="nav-logo">🎂 BirthYay</div>
        <Link to="/login" className="nav-login-btn">Login</Link>
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-container">
        <div className="glass-card">
          <div className="content-left">
            <div className="badge">✨ New: Never miss a date</div>
            <h1 className="landing-title">
              Bring your <br />
              <span className="highlight">Friends</span> together.
            </h1>
            <p className="landing-subtitle">
              The automated birthday reminder that keeps your relationships warm. 
              Add a birthday once, and we handle the rest forever.
            </p>

            <div className="button-group">
              <Link to="/signup" className="btn btn-primary">
                Start Tracking Free
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Calendar Graphic */}
          <div className="content-right">
            <div className="calendar-graphic">
              {/* UPDATED: Added DEC here */}
              <div className="calendar-top">DEC</div> 
              <div className="calendar-body">
                <span className="calendar-date">11</span>
                <span className="calendar-check">🎉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}