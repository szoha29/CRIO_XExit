const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema({
  lwd: { type: String, required: true },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
});

const Resignation = mongoose.model("Resignation", resignationSchema);

module.exports.Resignation = Resignation;
