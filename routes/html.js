const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index"));
});
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats"));
});
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise"));
});
module.exports = router;
