import idadeMaior from "./vlidade";

const inputs = document.querySelectorAll("[required]")
inputs.forEach((elemento) => {
    elemento.addEventListener("blur", (evento) => {
        validaCampo(evento.target)
    })
    elemento.addEventListener("invalid", evento => evento.preventDefault())
})

const erros =
    [
        'valuMissing',
        'typeMismatch',
        'patternMismatch',
        'tooShort',
        'customError'
    ]

const mensagensErro =
{
    nome:
    {
        valueMissing: "O campo nome é obrigatorio",
        patternMismatch: "Preencha o campo de nome valido",
        tooShort: "preencha um nome completo"
    },
    email:
    {
        valueMissing: "O campo email é obrigatorio",
        patternMismatch: "Preencha o campo de email",
        tooShort: "preencha um email valido"
    },
    nascimento:
    {
        valueMissing: "O campo nascimento é obrigatorio",
        patternMismatch: "Preencha o campo de nascimento valido",
        tooShort: "preencha um nascimento completo"
    },
    celular:
    {
        valueMissing: "O campo celular é obrigatorio",
        patternMismatch: "Preencha o campo de celular valido",
        tooShort: "preencha um celular completo"
    }

}


function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelectorAll("[data-erro]")
    let mensagem = ""

    if (campo.name === 'nascimento' && campo.value != "") {
        idadeMaior(campo)
    }
    erros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagensErro[campo.name][erro]
        }
    })
    const inputValida = campo.checkValidity()
    if(!inputValida)
    {
        msnErro.textContent = mensagem
    }
    else
    {
        msnErro.textContent = "Campo Ok."
    }

}