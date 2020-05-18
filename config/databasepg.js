const Sequelize = require("sequelize");

const username = "zggynaebywjubk";
const password =
  "e2ae0e1d260684c7a55a06c276ed1fe1352968db6ebd65a59550caf070a217a9";
const database = "d2dbuu1citbkki";
const server = "ec2-34-230-149-169.compute-1.amazonaws.com";

//database, username, passord
const sequelize = new Sequelize(database, username, password, {
  host: server,
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
  },
  pool: {
    max: 5,
    min: 0,
    require: 3000,
    idle: 10000,
  },
  loggin: false,
});

module.exports = sequelize;
