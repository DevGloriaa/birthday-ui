import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddBirthday.css";

export default function AddBirthday() {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("FRIEND");
  const [note, setNote] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to add a birthday.");
      setLoading(false);
      return;
    }

    const birthdayData = {
      name,
      date,
      category,
      note,
    };

    try {
      const response = await fetch("http://localhost:8006/api/birthdays/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(birthdayData),
      });

      if (!response.ok) {
        throw new Error("Failed to save birthday");
      }

      navigate("/home");

    } catch (err) {
      console.error(err);
      setError("Could not save birthday. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-birthday-page">
      <div className="balloon b1"></div>
      <div className="balloon b2"></div>
      <div className="balloon b3"></div>
      <div className="balloon b4"></div>
      <div className="balloon b5"></div>

      <div className="add-card">
        
        {/* NEW: Back Navigation Link */}
        <Link to="/home" className="back-link">
          ← Back to Dashboard
        </Link>

        <div className="add-header">
          <h2 className="add-title">Mark the Date 📅</h2>
          <p className="add-subtitle">Who are we celebrating next?</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="form-label">Friend's Name</label>
            <input
              className="add-input"
              type="text"
              placeholder="e.g. Michael Scott"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Birthday</label>
            <input
              className="add-input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select 
              className="add-input add-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="FAMILY">Family</option>
              <option value="FRIEND">Friend</option>
              <option value="WORK">Work</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Note (Optional)</label>
            <textarea
              className="add-input add-textarea"
              placeholder="Gift ideas, age, etc..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="2"
            />
          </div>

          <div className="button-row">
            {/* The cancel button is still here as a secondary option */}
            <Link to="/home" className="btn-cancel">
              Cancel
            </Link>
            <button className="btn-save" disabled={loading}>
              {loading ? "Saving..." : "Save Birthday"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}