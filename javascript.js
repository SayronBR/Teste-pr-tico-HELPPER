
    var nome = ''
    var email = ''
    var cpf = ''
    var telefone = ''
    var cep = ''
    var Logradouro =''
    var numero = ''
    var bairro = ''
    var Cidade = ''
    var Estado = ''
    
  

 function imprimirForm(){
    
        nome = document.getElementById("formnome").value,
        email = document.getElementById('formemail').value,
        cpf  = document.getElementById('formcpf').value,
        telefone =document.getElementById('formtelefone').value,
        cep = document.getElementById('formcep').value,
        Logradouro =  document.getElementById('formLogradouro').value,
        numero = document.getElementById('formnum').value,
        bairro = document.getElementById('formbairro').value,
        Cidade = document.getElementById('formCidade').value,
        Estado = document.getElementById('formestado').value,
     
  


    document.getElementById("valor").innerHTML = '<h1>FORMUALRIO</h1> '+'<br>'  +'Nome:'+nome +'<br>' +'Email:'
    + email +'<br>' + 'CPF:' + cpf +'<br>'+'Telefone:'+telefone +'<br>' + 
    'CEP:' + cep  +'<br>' + 'Logradouro:' +Logradouro +'<br>' + 'Num:' +numero+'<br>'
     +'Bairro:' +bairro +'<br>' +'Cidade:'  + Cidade +'<br>' +'Estado:' + Estado;
}

/* SEGUNDA OPÇÂO!!

 const formulario = {
    nome:'',
    idade:'',
    cidade:'',
    bairro:'',
    
}
formulario.nome = 'Eduardo'
console.log(formulario)
*/
/*Terceira Opçao 
function formulario (nome,email,bairro,cpf){
    return console.log(nome +' ' + ''+ email+' '+' ' + ' ' +bairro+''+''+cpf)
}


    
formulario('eduardo','eduardohotma','eldorado',12314)


*/