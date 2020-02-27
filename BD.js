const Sequelize = require('sequelize');
const sequelize = new Sequelize('tarefas','root','',{
    host:"localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("falhou");
}) 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}