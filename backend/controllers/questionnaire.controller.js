const { Questionnaire } = require("../models/index");

const submitQuestionnaire = async (req, res) => {
  try {
    const { responses } = req.body;
    const questionnaire = new Questionnaire({
      employeeId: req.user.id,
      responses,
    });
    await questionnaire.save();
    res.status(200).json({ message: "Questionnaire submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const viewQuestionnaires = async (req, res) => {
  try {
    const questionnaires = await Questionnaire.find().populate(
      "employeeId",
      "username"
    );
    res.status(200).json({ data: questionnaires });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitQuestionnaire, viewQuestionnaires };
