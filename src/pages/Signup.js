import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // We can reuse the same styles!

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Configuration for the form fields
  const fields = [
    { key: "firstName", label: "First Name", type: "text", placeholder: "Jane" },
    { key: "lastName", label: "Last Name", type: "text", placeholder: "Doe" },
    { key: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
    { key: "password", label: "Password", type: "password", placeholder: "••••••••" },
  ];

  return (
    <div className="login-page">
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
          <Link to="/" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}