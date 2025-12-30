import { useState } from "react";

export default function AddBirthday() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Birthday</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button>Save</button>
    </div>
  );
}
