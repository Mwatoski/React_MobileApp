// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true, // If you're connecting to Azure SQL Database, set this to true
    },
  },
});

module.exports = sequelize;
