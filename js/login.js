const btn = document.querySelector('#verSenha');

function LockManager() 
{
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
}


/*E-MAIL */
function validarEmail() 
{
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();

    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;


    if (regex.test(email)) {
        emailInput.setCustomValidity("");
    } else {
        emailInput.setCustomValidity("O email é inválido.");
    }
}