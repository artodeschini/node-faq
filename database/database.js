const sequelize = require("sequelize");

const connection = new sequelize("guiaperguntas", "root", "root", {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = connection; 