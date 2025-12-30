import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button}>Login</button>

      <p>
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff69b4",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};
