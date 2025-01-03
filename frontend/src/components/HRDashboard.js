import React, { useState, useEffect } from "react";
import API from "../services/api";

const HRDashboard = () => {
  const [resignations, setResignations] = useState([]);

  useEffect(() => {
    const fetchResignations = async () => {
      try {
        const response = await API.get("/resignation/admin/resignations");
        setResignations(response.data.data);
      } catch (err) {
        alert("Failed to fetch resignations");
      }
    };

    fetchResignations();
  }, []);

  const handleApproval = async (id, approved) => {
    try {
      await API.put("/resignation/admin/conclude_resignation", {
        resignationId: id,
        approved,
        lwd: new Date().toISOString().split("T")[0],
      });
      alert(`Resignation ${approved ? "approved" : "rejected"}`);
    } catch (err) {
      alert("Failed to update resignation status");
    }
  };

  return (
    <div>
      <h2>HR Dashboard</h2>
      <ul>
        {resignations.map((resignation) => (
          <li key={resignation._id}>
            <span>
              {resignation.employeeId.username}: {resignation.lwd}
            </span>
            <button onClick={() => handleApproval(resignation._id, true)}>
              Approve
            </button>
            <button onClick={() => handleApproval(resignation._id, false)}>
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HRDashboard;
