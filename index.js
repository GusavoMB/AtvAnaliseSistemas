const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');  
var expressLayouts = require('express-ejs-layouts')
const BD = require('./comunictation'); 
const mysql = require('mysql'); 
const cliente = require('./model');
//Configuração npm 
    //template engine
    app.set('view engine', 'ejs');// Setamos que nossa engine será o ejs
    app.use(expressLayouts);
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.render('pages/home');
})


//rota de cadastro.
app.get('/cadastro', (req, res) => {
    res.render('pages/cadastro');
})

app.get('/gerenciar', (req, res) => {
    res.render('pages/delete');
})

//mensagem de usuário cadastrado
app.post('/sucess',(req,res) => {
    const Nome = req.body.nome;
    const Cpf = req.body.cpf;
    const Idade = req.body.idade;
    const Telefone = req.body.telefone;
    const Sintomas = req.body.sintomas;
    cliente.create({
        cpf:Cpf,
        nome:Nome,
        idade: Idade,
        telefone: Telefone,
        descricao:Sintomas

    }).then(function(){
        res.render('pages/sucess'); 
    }).catch(function(erro){
        res.send("falhou");
    })
 
})

app.get('/clientes', async (req, res) =>{
})


app.use(express.static(__dirname + '/public'))
//Setando a porta em que a pagina irá se encontrar
app.listen(8081,function(){
    console.log("Servidor rodando");
});

