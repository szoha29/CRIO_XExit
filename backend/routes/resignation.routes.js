const express = require("express");
const { resignationController } = require("../controllers/index");
const { verifyEmployeeToken, verifyAdminToken } = require("../middleware/auth");
const router = express.Router();

router.post(
  "/resign",
  verifyEmployeeToken,
  resignationController.submitResignation
);
router.get(
  "/admin/resignations",
  verifyAdminToken,
  resignationController.viewResignations
);
router.put(
  "/admin/conclude_resignation",
  verifyAdminToken,
  resignationController.concludeResignation
);

module.exports = router;
