const express = require('express');
const app = express(); 
const handlebars = require('express-handlebars');
var expressLayouts = require('express-ejs-layouts')

//Configuração npm 
    //template engine
    app.set('view engine', 'ejs');// Setamos que nossa engine será o ejs
    app.use(expressLayouts);

//rota inicial(teste)
app.get('/', (req, res) => {
    res.render('pages/cadastro');
})


app.use(express.static(__dirname + '/public'))
//Setando a porta em que a pagina irá se encontrar
app.listen(8081,function(){
    console.log("Servidor rodando");
});

