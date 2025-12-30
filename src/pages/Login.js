import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // <--- Import your new CSS file here

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-card">
        
        <div className="login-header">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Please enter your details to sign in.</p>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="login-input"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="login-input"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button">Sign In</button>

        <p className="login-footer">
          Don't have an account?{" "}
          <Link to="/signup" className="login-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}