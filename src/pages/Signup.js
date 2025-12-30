import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>

      {["firstName", "lastName", "email", "password"].map((field) => (
        <input
          key={field}
          style={styles.input}
          type={field === "password" ? "password" : "text"}
          placeholder={field}
          value={form[field]}
          onChange={(e) =>
            setForm({ ...form, [field]: e.target.value })
          }
        />
      ))}

      <button style={styles.button}>Create Account</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
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
  },
  button: {
    padding: "10px",
    backgroundColor: "#6a5acd",
    border: "none",
    color: "white",
  },
};
