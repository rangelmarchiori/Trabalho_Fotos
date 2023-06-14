const fields = [
    { input: document.querySelector('#nome'), label: document.querySelector('#labelNome'), minLength: 3 },
    { input: document.querySelector('#sobrenome'), label: document.querySelector('#labelsobrenome'), minLength: 3 },
    { input: document.querySelector('#nomeArtistico'), label: document.querySelector('#labelNomeArtistico'), minLength: 6 },
    { input: document.querySelector('#cidadeNatal'), label: document.querySelector('#labelcidadeNatal'), minLength: 6 },
    { input: document.querySelector('#dataNasc'), label: document.querySelector('#labeldataNasc'), minLength: 11 },
    { input: document.querySelector('#dataFale'), label: document.querySelector('#labeldataFale') },
    { input: document.querySelector('#descricao'), label: document.querySelector('#labeldescricao') }
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

function validatesobrenome() {
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
        validatesobrenome(),
        validatenomeArtistico(),
        validatecidadeNatal(),
        validatedataNasc(),
        validateDataFale(),
        validatedescricao()
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

