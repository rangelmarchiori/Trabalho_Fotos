const btn = document.querySelector('#verSenha');
const btnConfirm = document.querySelector('#verConfirmSenha');

const fields = [
    { input: document.querySelector('#nome'), label: document.querySelector('#labelNome'), minLength: 3 },
    { input: document.querySelector('#usuario'), label: document.querySelector('#labelUsuario'), minLength: 3 },
    { input: document.querySelector('#senha'), label: document.querySelector('#labelSenha'), minLength: 6 },
    { input: document.querySelector('#confirmSenha'), label: document.querySelector('#labelConfirmSenha'), minLength: 6 },
    { input: document.querySelector('#cpf'), label: document.querySelector('#labelCpf'), minLength: 11 },
    { input: document.querySelector('#email'), label: document.querySelector('#labelEmail') },
    { input: document.querySelector('#celular'), label: document.querySelector('#labelcelular') }
];

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

function validateField(field) {
    if (field.input.value.length < field.minLength) {
        field.label.setAttribute('style', 'color: red');
        field.label.innerHTML = field.label.innerHTML.replace('*', '') + '*Insira no mínimo ' + field.minLength + ' caracteres';
        field.input.setAttribute('style', 'border-color: red');
        return false;
    } else {
        field.label.setAttribute('style', 'color: green');
        field.label.innerHTML = field.label.innerHTML.replace('*', '');
        field.input.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateCelular() {
    if (celular.value.length <= 14) {
        labelcelular.setAttribute('style', 'color: red');
        labelcelular.innerHTML = 'Celular: *Insira no mínimo 11 caracteres';
        celular.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelcelular.setAttribute('style', 'color: green');
        labelcelular.innerHTML = 'Celular:';
        celular.setAttribute('style', 'border-color: green');
        return true;
    }
    
}

function formatarCelular(celular) {
    celular = celular.replace(/\D/g, ''); // Remove caracteres não numéricos
    celular = celular.replace(/(\d{2})(\d)/, '($1) $2'); // Insere parênteses e espaço após o segundo dígito
    celular = celular.replace(/(\d{4,5})(\d)/, '$1-$2'); // Insere hífen após o quarto ou quinto dígito
    celular = celular.replace(/(\d{4})(\d)$/, '$1-$2'); // Insere hífen no final para números de 11 dígitos
     return celular;
}
document.getElementById('celular').addEventListener('input', function (e) {
    var target = e.target;
    var celular = target.value;
    target.value = formatarCelular(celular);
});

function validateDataNasc() {
    if (dataNasc.value.length <= 9) {
        labeldataNasc.setAttribute('style', 'color: red');
        labeldataNasc.innerHTML = 'Data Nascimento: *Insira sua data de Nascimento';
        dataNasc.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labeldataNasc.setAttribute('style', 'color: green');
        labeldataNasc.innerHTML = 'Data Nascimento:';
        dataNasc.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateEmail() {
    if (email.value.length <= 7) {
        labelemail.setAttribute('style', 'color: red');
        labelemail.innerHTML = 'E-mail: *Insira no mínimo 8 caracteres';
        email.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelemail.setAttribute('style', 'color: green');
        labelemail.innerHTML = 'E-mail:';
        email.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateCpf() {
    if (cpf.value.length <= 10) {
        labelcpf.setAttribute('style', 'color: red');
        labelcpf.innerHTML = 'CPF: *Insira no mínimo 11 caracteres';
        cpf.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelcpf.setAttribute('style', 'color: green');
        labelcpf.innerHTML = 'CPF:';
        cpf.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateNome() {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome: *Insira no mínimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome:';
        nome.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateUsuario() {
    if (usuario.value.length <= 2) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário: *Insira no mínimo 3 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuário:';
        usuario.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateSenha() {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha: *Insira no mínimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha:';
        senha.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validateConfirmSenha() {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = 'Confirmar Senha: *As senhas não conferem';
        confirmSenha.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green');
        labelConfirmSenha.innerHTML = 'Confirmar Senha:';
        confirmSenha.setAttribute('style', 'border-color: green');
        return true;
    }
}

function cadastrar() {
    const validations = [
        validateNome(),
        validateUsuario(),
        validateSenha(),
        validateConfirmSenha(),
        validateCelular(),
        validateDataNasc(),
        validateCpf(),
        validateEmail()
    ];

    const isValid = validations.every(validation => validation);

    if (isValid) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value,
            celularCad: celular.value,
            emailCad: email.value,
            cpfCad: cpf.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5502/index.html';
        }, 3000);
    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha');

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text');
    } else {
        inputConfirmSenha.setAttribute('type', 'password');
    }
});

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
}

cpf.addEventListener('input', (event) => {
    let input = event.target;
    let cpf = input.value;
    cpf = cpf.replace(/\D/g, '');
    cpf = formatarCPF(cpf);
    input.value = cpf;
});

function validarCpf(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    if (!validarPrimeiroDigito(cpf)) {
        return false;
    }

    if (!validarSegundoDigito(cpf)) {
        return false;
    }

    return true;
}

function validarPrimeiroDigito(cpf) {
    // Calcular o primeiro dígito verificador
    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    return true;
}

function validarSegundoDigito(cpf) {
  
    let soma = 0;
    let peso = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    // Verificar se o segundo dígito verificador é igual ao fornecido no CPF
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

cpf.addEventListener('input', (event) => {
    let input = event.target;
    let cpf = input.value;
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length === 11) {
        if (validarCpf(cpf)) {
            input.setAttribute('style', 'border-color: green');
            labelcpf.setAttribute('style', 'color: green');
            labelcpf.innerHTML = 'CPF:';
        } else {
            input.setAttribute('style', 'border-color: red');
            labelcpf.setAttribute('style', 'color: red');
            labelcpf.innerHTML = 'CPF: *CPF inválido';
        }
    } else {
        input.setAttribute('style', 'border-color: red');
        labelcpf.setAttribute('style', 'color: red');
        labelcpf.innerHTML = 'CPF: *Insira no mínimo 11 caracteres';
    }
});

function validarEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

email.addEventListener('input', (event) => {
    let input = event.target;
    let email = input.value;

    if (validarEmail(email)) {
        input.setAttribute('style', 'border-color: green');
        labelemail.setAttribute('style', 'color: green');
        labelemail.innerHTML = 'E-mail:';
    } else {
        input.setAttribute('style', 'border-color: red');
        labelemail.setAttribute('style', 'color: red');
        labelemail.innerHTML = 'E-mail: *Insira um e-mail válido';
    }
});

nome.addEventListener('input', (event) => {
    validateNome();
});

usuario.addEventListener('input', (event) => {
    validateUsuario();
});

senha.addEventListener('input', (event) => {
    validateSenha();
});

confirmSenha.addEventListener('input', (event) => {
    validateConfirmSenha();
});

celular.addEventListener('input', (event) => {
    validateCelular();
});

dataNasc.addEventListener('input', (event) => {
    validateDataNasc();
});
