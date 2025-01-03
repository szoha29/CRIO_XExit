import React, { useState } from "react";
import API from "../services/api";

const QuestionnaireForm = () => {
  const [responses, setResponses] = useState([
    { questionText: "Why are you leaving?", response: "" },
    { questionText: "Would you recommend us?", response: "" },
  ]);

  const handleChange = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index].response = value;
    setResponses(updatedResponses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/questionnaire/responses", { responses });
      alert("Questionnaire submitted successfully");
    } catch (err) {
      alert("Failed to submit questionnaire");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Exit Questionnaire</h2>
      {responses.map((item, index) => (
        <div key={index}>
          <label>{item.questionText}</label>
          <input
            type="text"
            value={item.response}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionnaireForm;
