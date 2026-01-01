import { Link } from "react-router-dom";
import "./Landing.css"; 

export default function Landing() {
  return (
    <div className="landing-page">
      
      {/* BACKGROUND BALLOONS */}
      {/* Several balloons with different delay classes */}
      <div className="balloon b1"></div>
      <div className="balloon b2"></div>
      <div className="balloon b3"></div>
      <div className="balloon b4"></div>
      <div className="balloon b5"></div>

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