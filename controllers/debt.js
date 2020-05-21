var Debt = require("../models/debt");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");


exports.index = function (req, res, next) {
  console.log(req.body);
  res.send("recibido");
};


exports.registerDebt = async function (req, res, next) {
    const debt = req.body;
    console.log(debt);
    try {
      let newDebt = await Debt.create(
        {
        
          namedebt: debt.namedebt,
          debtor: debt.debtor,
          valuedebt: debt.valuedebt,
          datepay: debt.datepay,
          valuereceive:debt.valuereceive,
          state:debt.state,
          category:debt.category,
          requests:debt.requests,

          userid:debt.userid
        },
        {
          fields: ["namedebt", "debtor", "valuedebt", "datepay","valuereceive","state","category","requests","userid"],
        }
      );
      console.log(newDebt);
      if (newDebt) {
        res.json({
          message: "La deuda se ha creado correctamente",
          data: newDebt,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error internodel servidor",
        data: {},
      });
    }
  };

  //todas las deudas pulblicadas
  exports.getDebts = async function (req, res, next) {
    const debts = await Debt.findAll();
    res.json({
      data: debts,
    });
  };
//las deudas dependiendo del user(terminar)

exports.getDebtsByUser = async function (req, res, next) {
    try {
      const email = req.params.id;
      const debts = await Debt.findAll({
        where: {
          userid: email,
        },
      });
      res.json({
        debts
      });
    } catch (error) {
      console.log(error);
    }
  };
