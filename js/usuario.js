if(localStorage.getItem("token")== null)
{
    alert("Você precisa estar logado para acessar essa página");
    window.location.href ="";
}

let userlogado = JSON.parse(localStorage.getItem("userlogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${userlogado.nome}';

function sair()
{
    localStorage.removeItem("token");
    localStorage.removeItem("userlogado");
    window.location.href = "";
}