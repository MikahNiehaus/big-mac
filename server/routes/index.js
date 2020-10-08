var express = require("express");
var router = express.Router();

router.get("/message", function (req, res, next) {
  res.json("Hey Mikah This is Awesome");
});

module.exports = router;