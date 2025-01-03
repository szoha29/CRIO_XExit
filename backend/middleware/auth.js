const jwt = require("jsonwebtoken");

// Verify token for employees and HR
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
};

// Specific middleware for employee access
const verifyEmployeeToken = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.role !== "Employee") {
      return res.status(403).json({ error: "Access denied. Not an employee." });
    }
    next();
  });
};

// Specific middleware for HR (admin) access
const verifyAdminToken = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.role !== "HR") {
      return res.status(403).json({ error: "Access denied. Not an admin." });
    }
    next();
  });
};

module.exports = {
  verifyToken,
  verifyEmployeeToken,
  verifyAdminToken,
};
