const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "sajal sarker",
    },
    {
      name: "sabuj sarker",
    },
    {
      name: "akash sarker",
    },
  ]);
});

module.exports = router;
