const mysql = require('mysql'); 

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'analise_gp_hopitalar'
});

connection.connect(function(err){
    if(err) 
      return console.log(err);
    console.log('conectou!');
}) 

function carregarTarefa(res){

    const connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'analise_gp_hopitalar'
    });

    // connection.connect(function(err){
    //     if(err) 
    //     return console.log(err);
    //     console.log('conectou!');
    // })

    connection.query('SELECT * FROM hospital', function(error, results, fields){   
    if(error) 
        res.json(error);
    else
        res.json(results);
    connection.end(); 
    console.log(results);
    console.log('executou2!');
    }); 
} 

module.exports = {
    CarregarTarefa: carregarTarefa
  };