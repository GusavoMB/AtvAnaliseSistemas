const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');  
var expressLayouts = require('express-ejs-layouts')
const BD = require('./comunictation'); 
const mysql = require('mysql'); 
//Configuração npm 
    //template engine
    app.set('view engine', 'ejs');// Setamos que nossa engine será o ejs
    app.use(expressLayouts);
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
//rota inicial(teste)
app.get('/', (req, res) => {
    res.render('pages/cadastro');
})

app.get('/gerenciar', (req, res) => {
    res.render('pages/delete');
})

app.post('/sucess',(req,res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const idade = req.body.idade;
    const telefone = req.body.telefone;
    const sintomas = req.body.sintomas;
    BD.CadastrarCliente(res,cpf,nome,idade,telefone,sintomas);
    res.send("Cadastro realizado com sucesso");
})

app.get('/clientes', (req, res) =>{
    res.send("trabalhando");
})


app.use(express.static(__dirname + '/public'))
//Setando a porta em que a pagina irá se encontrar
app.listen(8081,function(){
    console.log("Servidor rodando");
});

