const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shop", "root", "jabuka231", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;