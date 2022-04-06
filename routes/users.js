const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hy its user route");
});

module.exports = router;
