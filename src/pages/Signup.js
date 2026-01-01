import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; 

export default function Signup() {
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

  return (
    <div className="login-page">
      
      {/* BACKGROUND BALLOONS */}
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

        {fields.map((field) => (
          <div className="form-group" key={field.key}>
            <label className="form-label">{field.label}</label>
            <input
              className="login-input"
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key]}
              onChange={(e) =>
                setForm({ ...form, [field.key]: e.target.value })
              }
            />
          </div>
        ))}

        <button className="login-button">Sign Up</button>

        <p className="login-footer">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}