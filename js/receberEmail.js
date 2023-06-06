const nome = document.getElementById('nome');
const email = document.getElementById('email');
const message = document.getElementById('message');
//add evetno listado onde esta o form
const submit = document.getElementsByClassName('form');

submit.addEventListenner('submit',(e)=>{
    e.preventDefault();
    console.log("clicado");

    //email do code aq
    Email.send({
        SecureToken : "f22b7db7-b530-481f-b8ca-dda49226dccf",
        To : 'wvinicius.torres@gmail.com',
        From : "wvinicius.torres@gmail.com",
        Subject : "Deu CERTO??",
        Body : "DE CERTOO AAA"
    }).then(
      message => alert(message)
    );
});

