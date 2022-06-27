const sequelize  = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('pergunta', { // nome da tabela
    'titulo': {
        type: sequelize.STRING,
        allowNull: false
    },
    'descrição': {
        type: sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}) //faz criar a tabela, mas nao força recriar a tabela
    .then(() =>{
        console.log("tabela criada");
    })