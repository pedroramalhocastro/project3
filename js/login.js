$(document).ready(function () {
 
    
    
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');        


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

})




function cadastrar(){  
var emailCerto = validaEmailCadastro();
if(emailCerto == false){
   return window.alert("Email Inválido!");
}
var nomecad = document.getElementById("nomecad").value;
var senhacad = document.getElementById("senhacad").value;
var emailCad = document.getElementById("emailCad").value;
var confisenhacad = document.getElementById("confisenhacad").value;

if (nomecad == "")
{
    return window.alert("Digite um nome");
}

if (senhacad == confisenhacad)
{   
localStorage.setItem("biblioteca.emailPrincipal", emailCad);
localStorage.setItem("biblioteca.senhaPrincipal", senhacad);


     window.alert ("Cadastro Realizado");
     return  window.location.href="login.html";
}
else
{
   return window.alert("Senhas Diferentes");
}  

}

function validaEmailCadastro() {
var email = document.getElementById("emailCad").value;

var teste = /\S+@\S+\.\S+/;
return teste.test(email);
}

function validaLogin (){
var emailLogin = document.getElementById("email").value;
var senhaLogin = document.getElementById("senha").value;

if(emailLogin == "" || senhaLogin == ""){
 return alert("Preencha todos os campos!");
}

if(emailLogin == localStorage.getItem("biblioteca.emailPrincipal") && senhaLogin == localStorage.getItem("biblioteca.senhaPrincipal")){
    window.location.href="dashboard.html";
}
else{
    return alert("Dados invalidos !")
}

}
