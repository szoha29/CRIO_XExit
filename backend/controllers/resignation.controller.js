const { Resignation } = require("../models/index");

const submitResignation = async (req, res) => {
  try {
    const { lwd } = req.body;
    const resignation = new Resignation({
      lwd,
      employeeId: req.user.id, // Extracted from token middleware
      status: "Pending",
    });
    await resignation.save();
    res.status(200).json({ data: { resignation } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const viewResignations = async (req, res) => {
  try {
    const resignations = await Resignation.find().populate(
      "employeeId",
      "username"
    );
    res.status(200).json({ data: resignations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const concludeResignation = async (req, res) => {
  try {
    const { resignationId, approved, lwd } = req.body;
    const status = approved ? "Approved" : "Rejected";
    const resignation = await Resignation.findByIdAndUpdate(
      resignationId,
      { status, lwd },
      { new: true }
    );
    res.status(200).json({ resignation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitResignation, viewResignations, concludeResignation };
