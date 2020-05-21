var express = require("express");
var router = express.Router();
const debtController = require("../controllers/debt");


router.post("/debt", debtController.registerDebt);


module.exports = router;
