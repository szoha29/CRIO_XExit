import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import EmployeeDashboard from "./components/EmployeeDashboard";
import HRDashboard from "./components/HRDashboard";
import RegisterForm from "./components/RegisterForm";
import QuestionnaireForm from "./components/QuestionnaireForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/employee/questionnaire" element={<QuestionnaireForm />} />
      </Routes>
    </Router>
  );
};

export default App;
