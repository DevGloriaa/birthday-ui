import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; 

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const fields = [
    { key: "firstName", label: "First Name", type: "text", placeholder: "Jane" },
    { key: "lastName", label: "Last Name", type: "text", placeholder: "Doe" },
    { key: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
    { key: "password", label: "Password", type: "password", placeholder: "••••••••" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8006/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.text(); 
        throw new Error(errorData || "Registration failed");
      }

      setSuccess("🎉 Registration successful! Redirecting...");
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="balloon b1"></div>
      <div className="balloon b2"></div>
      <div className="balloon b3"></div>
      <div className="balloon b4"></div>
      <div className="balloon b5"></div>

      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Create Account</h2>
          <p className="login-subtitle">Join us to start tracking birthdays.</p>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className="form-group" key={field.key}>
              <label className="form-label">{field.label}</label>
              <input
                className="login-input"
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key]}
                required
                onChange={(e) =>
                  setForm({ ...form, [field.key]: e.target.value })
                }
              />
            </div>
          ))}

          <button className="login-button" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="login-footer">
          Already have an account?{" "}
          <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
}