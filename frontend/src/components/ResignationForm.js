import React, { useState } from "react";
import API from "../services/api";

const ResignationForm = () => {
  const [lwd, setLwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/resignation/resign", { lwd });
      alert("Resignation submitted successfully");
    } catch (err) {
      alert("Failed to submit resignation");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Resignation</h2>
      <input
        type="date"
        value={lwd}
        onChange={(e) => setLwd(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResignationForm;
