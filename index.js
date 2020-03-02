const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');  
var expressLayouts = require('express-ejs-layouts')
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
    res.render('pages/cadastro3');
})

//rota para listar clientes
app.get('/gerenciar/:id', (req, res) => {
    var id = parseInt(req.params.id);
    if(id < 0){
        id = 0;
    }
    var page = parseInt(req.params.id) * 5;
    cliente.findAll().then(function(aux){ 
        cliente.findAll({
            limit: 5,
            offset: page
        }).then(function(clientes){
            res.render('pages/delete',{Cliente:clientes,Page:id,Maximo:aux})
        })
    })
})

//mensagem de usuário cadastrado
app.post('/sucess',(req,res) => {
    const Nome = req.body.nome;
    const Cpf = req.body.cpf;
    const Idade = req.body.idade;
    const Telefone = req.body.telefone;
    const Sintomas = req.body.sintomas;
    const Responsavel =req.body.responsavel;
    const Sexo = req.body.sexo;
    const Endereco = req.body.endereco;
    const Medico = req.body.medico;
    const ResTelefone = req.body.resTelefone;
    const Email = req.body.email;
    var cliente1 = req.body;
    var erros = [];
    console.log(parseInt(Idade) < 18);
    if(parseInt(Idade) < 18){ 
        if (Responsavel== null || Responsavel == ''){
            erros.push({texto:'Quando o paciente é menor de idade, é necessário a identificação do responsável. Se por ventura, a criança não possuir um responsável, preencha o campo com "indefinido"'})
        }
    }
    if(parseInt(Idade) < 18) {
        if (ResTelefone==null || ResTelefone == ''){
            erros.push({texto:'Quando o paciente é menor de idade, é necessário a identificação do telefone do Responsável. Se por ventura, a criança não possuir um responsável, preencha o campo com "00000000"'})
        }
    }
    if(!(Sexo == 'Masculino' || Sexo == 'masculino' || Sexo == 'Feminino' || Sexo == 'feminino')){
        erros.push({texto:'coloque masculino ou feminino'})
    }

    if(erros.length > 0){
        res.render('pages/cadastro1',{
            clientes:cliente1,
            erro:erros
        });
    }
    else{
        cliente.create({
            cpf:Cpf,
            nome:Nome,
            idade: Idade,
            telefone: Telefone,
            descricao:Sintomas,
            endereço: Endereco,
            responsavel: Responsavel,
            email: Email,
            medico: Medico,
            sexo: Sexo,
            telefoneResponsavel: ResTelefone
        }).then(function(){
            res.render('pages/sucess'); 
        }).catch(function(erro){
            res.render('pages/errorCadastrar');
        })
     }
})

//rota para devolver os dados de unico cliente
app.get('/cliente/:cpf', async (req, res) =>{
    cliente.findByPk(req.params.cpf).then(function(Cliente){
        res.render('pages/editarPaciente',{clientes:Cliente});
    }).catch(function(error){
        res.render('pages/errorEditar');
    })
})

app.get("/test", function(req, res){
    res.render("pages/ajudaCadastro");
})

//rota responsável por deletar um usuário. o parametro cpf será o cpf do paciente.
app.get('/delete/:cpf',function(req,res){
    cliente.destroy({where:{'cpf':req.params.cpf}}).then(function(){
        res.redirect('/gerenciar/0');
    }).catch(function(error){
        res.render('pages/errorDelete');
    })
})

app.post('/atualizar',function(req,res){

    const Nome = req.body.nome;
    const Cpf = req.body.cpf;
    const Idade = req.body.idade;
    const Telefone = req.body.telefone;
    const Sintomas = req.body.sintomas;
    const Responsavel =req.body.responsavel;
    const Sexo = req.body.sexo;
    const Endereco = req.body.endereco;
    const Medico = req.body.medico;
    const ResTelefone = req.body.resTelefone;
    const Email = req.body.email;

    cliente.update({
            cpf:Cpf,
            nome:Nome,
            idade: Idade,
            telefone: Telefone,
            descricao:Sintomas,
            endereço: Endereco,
            responsavel: Responsavel,
            email: Email,
            medico: Medico,
            sexo: Sexo,
            telefoneResponsavel: ResTelefone
    },{where:{'cpf':Cpf}}).then(function(){
        res.redirect('/gerenciar/0');
    }).catch(function(error){
        res.render('pages/errorAtualizar');
    })
})

app.use(express.static(__dirname + '/public'))
//Setando a porta em que a pagina irá se encontrar
app.listen(process.env.PORT || 5000){}
    console.log("Servidor rodando");
});

