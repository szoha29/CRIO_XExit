const mongoose = require("mongoose");

const questionnaireSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  responses: [
    {
      questionText: { type: String, required: true },
      response: { type: String, required: true },
    },
  ],
});

const Questionnaire = mongoose.model("Questionnaire", questionnaireSchema);

module.exports.Questionnaire = Questionnaire;
