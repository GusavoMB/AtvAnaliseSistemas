const express = require('express');
const app = express(); 
//const handlebars = require('express-handlebars');
var expressLayouts = require('express-ejs-layouts')
//const BD = require('./comunictation'); 
const mysql = require('mysql'); 
//Configuração npm 
    //template engine
    //app.set('view engine', 'ejs');// Setamos que nossa engine será o ejs
    //app.use(expressLayouts);

//rota inicial(teste)
/*app.get('/', (req, res) => {
    res.render('pages/cadastro');
})

app.get('/gerenciar', (req, res) => {
    res.render('pages/delete');
}) */

app.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM hospital', res);
})


app.use(express.static(__dirname + '/public'))
//Setando a porta em que a pagina irá se encontrar
app.listen(8081,function(){
    console.log("Servidor rodando");
});

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'analise_gp_hopitalar'
    });

  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}
