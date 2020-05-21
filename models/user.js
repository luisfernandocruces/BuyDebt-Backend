//import debt from './debt';

const debt= require("./debt");
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

//user.hasMany(debt,{foreingKey:'userid',sourceKey:'email'})
//debt.belongsTo(user,{foreingKey:'userid',sourceKey:'email'} )
module.exports = user;
