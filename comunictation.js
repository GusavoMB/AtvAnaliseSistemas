
//Classe responsável pela comunicação com o banco.
const mysql = require('mysql'); 


const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'tarefas'
});

connection.connect(function(err){
    if(err) 
      return console.log(err);
    console.log('conectou!');
}) 

//Lista todos os clientes
function carregarClientes(res){

    // const connection = mysql.createConnection({
    //     host:'localhost',
    //     port:3306,
    //     user:'root',
    //     password:'',
    //     database:'tarefas'
    // });

    connection.query('SELECT * FROM hospital;', function(error, results, fields){   
    // if(error) 
    //     return null;
    // else{
    //     console.log('executou2!');
    //     connection.end(); 
    //     return JSON.parse(results);
    //}
    connection.end(); 
    console.log('executou2!');
    }); 
} 

//atualizar dados de um cliente 
function atualizarCliente(res,cpf,nome,idade,telefone,descricao,cpfAntigo){
    connection.query(`UPDATE hospital SET nome = '${nome}',descricao = '${descricao}',cpf = '${cpf}',telefone = ${telefone},idade = ${idade} WHERE cpf = '${cpfAntigo}';`,res); 
}

//cadastrar cliente 
async function cadastrarCliente(res,cpf,name,idade,telefone,descricao){
    await connection.query(`INSERT into hospital (cpf,nome,idade,telefone,descricao) VALUES( '${cpf}','${name}',${idade},${telefone},'${descricao}')`, function(error, results, fields){   
        if(error){ 
            connection.end();
            return null;
        }
        else{
            console.log("foi");
            connection.end();
        }
        });  
} 

//deletar um usuario
function deletarCliente(res,cpf){

    const connection = mysql.createConnection({
      host:'localhost',
      port:3306,
      user:'root',
      password:'',
      database:'tarefas'
    });
  
    connection.query(`DELETE from hospital where cpf = '${cpf}' `,res);
      connection.end();
} 


module.exports = {
    CarregarClientes: carregarClientes,
    AtualizarCliente: atualizarCliente,
    DeletarCliente: deletarCliente,
    CadastrarCliente: cadastrarCliente
  };