var express = require("express");
var router = express.Router();
const debtController = require("../controllers/debt");

router.post("/debt", debtController.registerDebt);
<<<<<<< HEAD
router.get("/debt", debtController.getDebts);
=======

router.get("/:id", debtController.getDebtsByUser);

router.get('/debt', debtController.getDebts);

>>>>>>> b594887bce07a07051a70e8e41928692fa61ad31

module.exports = router;
