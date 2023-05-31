const inputs = document.querySelectorAll('[data-getInput]');

const form = document.getElementById('form');

const campos = document.querySelectorAll('.required');

const spans = document.querySelectorAll('.mensagem-erro');

function setError(usuario)
{
    campos(usuario).style.border = '2px solid #e63636';
    spans(usuario).style.display = 'none';
}

function nameValidate()
{
    if(campos[0].value.length <3)
    {
        setError(0);
    }
    else
    {
        removeError(0)
    }
}


inputs.forEach((elemento)=>{
    elemento.addEventListener('blur',(evento)=>{
        validaCampo(evento.target);
    });
});




