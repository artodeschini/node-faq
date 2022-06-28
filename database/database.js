const { Sequelize } = require('sequelize');

//npm install --save sequelize

// # One of the following:
// $ npm install --save pg pg-hstore # Postgres
// $ npm install --save mysql2
// $ npm install --save mariadb
// $ npm install --save sqlite3
// $ npm install --save tedious # Microsoft SQL Server

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/guiaperguntas'); // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const connection = new Sequelize('guiaperguntas', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});




// const sequelize = require("sequelize");

// const connection = new sequelize("guiaperguntas", "root", "root", {
//     host: 'localhost',
//     dialect: 'mysql'
// });

module.exports = connection; 