const Sequelize = require('sequelize');
const sequelize = new Sequelize('u764526086_hospitalar','u764526086_gphospitalar','uefsdireta',{
    host:"sql261.main-hosting.eu",
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