let header = document.getElementById('header');
let navigationHeader = document.querySelector('.navigation_header');
let content = document.getElementById('content');
let showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigationHeader.style.marginLeft = '-11.5vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if(showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
})

// Configurações do botão de ver a senha

let btnVerSenha = document.getElementById('btn-visivel');
let btnOcultarSenha = document.getElementById('btn-ocultar');
let campo = document.getElementById('senha');

function VerSenha() {
    btnVerSenha.style.display = 'none'
    btnOcultarSenha.style.display = 'block'

    if(campo.type === 'password') {
        campo.type = "text"
    }
}

function OcultarSenha() {
    btnOcultarSenha.style.display = 'none'
    btnVerSenha.style.display = 'block'

    if(campo.type === 'text') {
        campo.type = "password"
    }
}




