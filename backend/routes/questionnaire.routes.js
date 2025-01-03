const express = require("express");
const { questionnaireController } = require("../controllers/index");
const { verifyEmployeeToken, verifyAdminToken } = require("../middleware/auth");
const router = express.Router();

router.post(
  "/responses",
  verifyEmployeeToken,
  questionnaireController.submitQuestionnaire
);
router.get(
  "/admin/exit_responses",
  verifyAdminToken,
  questionnaireController.viewQuestionnaires
);

module.exports = router;
