const form = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans = document.querySelectorAll('.span-required');
const nome = document.getElementById("nome_contato");
const email = document.getElementById("email_contato");
const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(index) { //adiciona cor na borda vermelho caso não tenha no minimo 3 caracteres
    campos[index].style.border = "2px solid #e63636";
    spans[index].style.display = "block";
}

function removeError(index) { //remove as condições do setError
    campos[index].style.border = "";
    spans[index].style.display = "none";

}

function nameValidate() { //valida nome e os simbolos que n pode entrar no campo
    if (campos[0].value.length < 3 || !nameRegex.test(campos[0].value)) {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValid() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}
function messageValid() { //validação das menssagens
    if (campos[2].value.length < 10) {
        setError(2);
    } else {
        removeError(2);
    }
}