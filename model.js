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
        allowNull: true,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
    endereço:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
     responsavel:{
        allowNull: true,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
     email:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
     medico:{
        allowNull: true,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
     sexo:{
        allowNull: false,
        primaryKey: false,
        type: BD.Sequelize.TEXT
    },
      telefoneResponsavel:{
           allowNull: true,
           primaryKey: false,
           type: BD.Sequelize.INTEGER
    }
})
module.exports = cliente;
//cliente.sync({force: true});
  