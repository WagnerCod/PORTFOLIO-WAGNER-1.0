window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtnContainer").style.display = "block";
    } else {
        document.getElementById("myBtnContainer").style.display = "none";
    }
}

// Levar o usuário de volta ao topo da tela quando o botão for clicado
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}