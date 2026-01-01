import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* --- BACKGROUND BALLOONS (Theme Continuity) --- */}
      <div className="balloon b1"></div>
      <div className="balloon b2"></div>
      <div className="balloon b3"></div>
      <div className="balloon b4"></div>
      <div className="balloon b5"></div>

      {/* --- DASHBOARD CONTENT --- */}
      <div className="dashboard-container">
        
        {/* Header Section */}
        <header className="dashboard-header">
          <div className="header-text">
            <h1>Hello, Friend! 👋</h1>
            <p>Let's celebrate your people.</p>
          </div>
          {/* Placeholder for a Profile Icon or Logout */}
          <div className="profile-icon">👤</div>
        </header>

        {/* Main Content Card */}
        <div className="glass-panel">
          <div className="panel-header">
            <h2>🎉 Upcoming Birthdays</h2>
            <span className="count-badge">0</span>
          </div>

          {/* EMPTY STATE (Styled) */}
          <div className="empty-state">
            <div className="empty-icon">📅</div>
            <h3>No birthdays tracked yet</h3>
            <p>Your calendar is looking a little quiet. Add your first friend to get started!</p>
            
            <Link to="/add" className="add-btn-large">
              <span className="plus-icon">+</span> Add Birthday
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}