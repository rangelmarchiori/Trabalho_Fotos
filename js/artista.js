
const fields = [
    { input: document.querySelector('#nome'), label: document.querySelector('#labelNome'), minLength: 3 },
    { input: document.querySelector('#sobrenome'), label: document.querySelector('#labelsobrenome'), minLength: 1 },
    { input: document.querySelector('#nomeArtistico'), label: document.querySelector('#labelNomeArtistico'), minLength: 3 },
    { input: document.querySelector('#cidadeNatal'), label: document.querySelector('#labelcidadeNatal'), minLength: 6 },
    { input: document.querySelector('#movimentoArtistico'), label: document.querySelector('#labelmovimentoArtistico') },
    { input: document.querySelector('#dataNasc'), label: document.querySelector('#labeldataNasc'), minLength: 7 },
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

function validateSobrenome() {
    if (sobrenome.value.length <= 2) {
        labelsobrenome.setAttribute('style', 'color: red');
        labelsobrenome.innerHTML = 'Sobrenome: *Insira no mínimo 3 caracteres';
        sobrenome.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelsobrenome.setAttribute('style', 'color: green');
        labelsobrenome.innerHTML = 'Sobrenome:';
        sobrenome.setAttribute('style', 'border-color: green');
        return true;
    }

}

function validatenomeArtistico() {
    if (nomeArtistico.value.length <= 0) {
        labelNomeArtistico.setAttribute('style', 'color: red');
        labelNomeArtistico.innerHTML = 'Nome Artistico: *Insira no mínimo 1 caracteres';
        nomeArtistico.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelNomeArtistico.setAttribute('style', 'color: green');
        labelNomeArtistico.innerHTML = 'Nome Artistico:';
        nomeArtistico.setAttribute('style', 'border-color: green');
        return true;
    }
}


function validatecidadeNatal() {
    if (cidadeNatal.value.length <= 2) {
        labelcidadeNatal.setAttribute('style', 'color: red');
        labelcidadeNatal.innerHTML = 'Cidade Natal: *Insira no mínimo 3 caracteres';
        cidadeNatal.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labelcidadeNatal.setAttribute('style', 'color: green');
        labelcidadeNatal.innerHTML = 'Cidade Natal:';
        cidadeNatal.setAttribute('style', 'border-color: green');
        return true;
    }
}

function validatedataNasc() {
    if (dataNasc.value.length <= 9) {
        labeldataNasc.setAttribute('style', 'color: red');
        labeldataNasc.innerHTML = 'Data Nascimento:';
        dataNasc.setAttribute('style', 'border-color: red');
        return false;
    } else {
        labeldataNasc.setAttribute('style', 'color: green');
        labeldataNasc.innerHTML = 'Data Nascimento:';
        dataNasc.setAttribute('style', 'border-color: green');
        return true;
    }
}
function cadastrar() {
    const validations = [
        validateNome(),
        validateSobrenome(),
        validatenomeArtistico(),
        validatecidadeNatal(),
        validatedataNasc()
    ];

    const isValid = validations.every(validation => validation);

    if (isValid) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nomeCad: nome.value,
            sobrenomeCad: sobrenome.value,
            nomeArtisticoCad: nomeArtistico.value,
            cidadeNatalCad: cidadeNatal.value,
            dataNascCad: dataNasc.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.style.display = 'block';
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgError.style.display = 'none';
        msgError.innerHTML = '';

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5502/index.html';
        }, 3000);
    } else {
        msgError.style.display = 'block';
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
        msgSuccess.innerHTML = '';
        msgSuccess.style.display = 'none';
    }
}

nome.addEventListener('input', (event) => {
    validateNome();
});

sobrenome.addEventListener('input', (event) => {
    validateSobrenome();
});

nomeArtistico.addEventListener('input', (event) => {
    validatenomeArtistico();
});

dataNasc.addEventListener('input', (event) => {
    validatedataNasc();
});

cidadeNatal.addEventListener('input', (event) => {
    validatecidadeNatal();
});