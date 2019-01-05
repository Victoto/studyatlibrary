const express = require("express");
const router = express.Router();

/* @route   GET api/library
** @desc    Tests library routes
** @access  Public
*/
router.get("/", (req, res) => res.json({ msg: "Welcome to the library." }));

module.exports = router;
