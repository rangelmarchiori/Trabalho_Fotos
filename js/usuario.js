let userlogado = JSON.parse(localStorage.getItem("userlogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${userlogado.nome}';

function sair()
{
    localStorage
}