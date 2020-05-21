const Sequelize = require("sequelize");
const sequelize = require("../config/databasepg");

const debt = sequelize.define(
  "debts",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    namedebt: {
      type: Sequelize.STRING,
    },
    debtor: {
      type: Sequelize.STRING,
    },
    valuedebt: {
      type: Sequelize.NUMBER,
    },
    datepay: {
      type: Sequelize.DATE,
    },
    valuereceive: {
      type: Sequelize.NUMBER,
    },
    state: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    //cantidad de solicitudes deberia ser un campo?
    requests: {
      type: Sequelize.NUMBER,
    },

    userid: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = debt;
