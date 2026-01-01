import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState("Friend");
  const [birthdays, setBirthdays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName"); 

    if (!token) {
      navigate("/login");
      return;
    }

    setUser(storedName || "Friend");
    fetchBirthdays(token);
  }, [navigate]);

  const fetchBirthdays = async (token) => {
    try {
      const response = await fetch("http://localhost:8006/api/birthdays", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        const sortedData = data.sort((a, b) => {
           const d1 = new Date(a.date);
           const d2 = new Date(b.date);
           if (d1.getMonth() !== d2.getMonth()) return d1.getMonth() - d2.getMonth();
           return d1.getDate() - d2.getDate();
        });
        setBirthdays(sortedData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete this birthday?")) return;
    
    const token = localStorage.getItem("token");
    try {
        await fetch(`http://localhost:8006/api/birthdays/${id}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        });
        setBirthdays(birthdays.filter(b => b.id !== id));
    } catch(e) { console.error(e); }
  };

  return (
    <div className="home-page">
      <div className="balloon b1"></div>
      <div className="balloon b2"></div>
      <div className="balloon b3"></div>
      <div className="balloon b4"></div>
      <div className="balloon b5"></div>

      <div className="dashboard-container">
        
        <header className="dashboard-header">
          <div className="header-text">
            <h1>Hello, {user}! 👋</h1>
            <p>Let's celebrate your people.</p>
          </div>
          
          <div className="profile-actions">
            <div className="profile-icon">
              {user.charAt(0).toUpperCase()}
            </div>
            <button className="logout-btn" onClick={() => {
                localStorage.clear();
                navigate("/login");
            }}>Logout</button>
          </div>
        </header>

        <div className="glass-panel">
          <div className="panel-header">
            <h2>🎉 Upcoming Birthdays</h2>
            <span className="count-badge">{birthdays.length}</span>
          </div>

          {loading ? (
             <div className="loading-state">Loading...</div>
          ) : birthdays.length === 0 ? (
             <div className="empty-state">
                <div className="empty-icon">📅</div>
                <h3>No birthdays yet</h3>
                <p>Add your first friend to get started!</p>
                <Link to="/add" className="add-btn-large">+ Add Birthday</Link>
             </div>
          ) : (
            <div className="birthday-list">
              {birthdays.map((b) => (
                <div key={b.id} className="birthday-item">
                  <div className="b-left">
                    <div className="b-name">{b.name}</div>
                    <div className="b-details">
                      <span className="b-date">
                        {new Date(b.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="dot-separator">•</span>
                      <span className={`category-tag ${b.category.toLowerCase()}`}>{b.category}</span>
                    </div>
                  </div>

                  <button className="delete-btn" onClick={() => handleDelete(b.id)}>×</button>
                </div>
              ))}
              
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                 <Link to="/add" className="add-btn-small">+ Add Another</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}