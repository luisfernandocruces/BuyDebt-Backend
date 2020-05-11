const Sequelize = require("sequelize");
const sequelize = require("../config/databasepg");

const user = sequelize.define(
  "users",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    rol: {
      type: Sequelize.STRING,
    },
    nit: {
      type: Sequelize.NUMBER,
    },
    phone: {
      type: Sequelize.NUMBER,
    },
    type_document: {
      type: Sequelize.STRING,
    },
    number_document: {
      type: Sequelize.STRING,
    },
    full_name: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = user;
