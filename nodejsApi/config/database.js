const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users", "Kratos", "1234", { // Added comma here
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      // Use Windows Authentication
      trustedConnection: true,
    },
  },
});

module.exports = sequelize;
