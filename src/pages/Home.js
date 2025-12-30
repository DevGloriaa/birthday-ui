import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🎉 Your Birthdays</h2>

      <p>No birthdays yet.</p>

      <Link to="/add">
        <button>Add Birthday 🎂</button>
      </Link>
    </div>
  );
}
