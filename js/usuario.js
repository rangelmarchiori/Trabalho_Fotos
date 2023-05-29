let nome = document.querySelector('#Nome');
let labelNome = document.querySelector('#labelNome');

let usuario = document.querySelector('#Usuario');
let labelUsuario = document.querySelector('#labelUsuario');

let sexo = document.querySelector('#sexo');
let labelSexo = document.querySelector('#labelSexo');

let CPF = document.querySelector('#CPF');
let labelCPF = document.querySelector('#labelCPF');

let DataNascimento = document.querySelector('#DataNascimento');
let labelData = document.querySelector('#labelData');

let Email = document.querySelector('#E-mail');
let labelEmail = document.querySelector('#labelEmail');

let Senha = document.querySelector('#Senha');
let labelSenha = document.querySelector('#labelSenha');

let ConfirmSenha = document.querySelector('#ConfirmSenha');
let labelConfirme = document.querySelector('#labelUsuarConfirme');

nome.addEventListener('keyup',()=>
{
    if(nome.value.length <=2)
    {
        labelNome.setAttribute('style','color:red')
    }else{
        labelNome.setAttribute('style','color:green')
    }
})