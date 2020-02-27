const BD = require("./BD");

const cliente = BD.sequelize.define('hospital',{
    cpf: {
        allowNull: false,
        primaryKey: true,
        type: BD.Sequelize.STRING
    },
    nome:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
    idade:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.INTEGER
    },
    telefone:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.INTEGER
    },
    descricao:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    }

})
module.exports = cliente;
//cliente.sync({force: true});