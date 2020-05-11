const Sequelize = require("sequelize");

const sequelize = new Sequelize("buydebt", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 3000,
    idle: 10000,
  },
  loggin: false,
});

module.exports = sequelize;
