const { authertization } = require("../middleware/auth");
const router = require("express").Router();

router.put("/:id", authertization, (req, res) => {
   
});

module.exports = router;