const Sequelize = require('sequelize');
const sequelize = new Sequelize('analise','root','123456789', {
    port: '3307',
    host:"localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log(erro);
}) 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}