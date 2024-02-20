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

function formatarCPF(cpf) {
    // Remove qualquer caractere que não seja número
    cpf = cpf.replace(/\D/g, '');
    
    // Adiciona a formatação
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    return cpf;
}

function formatarRG(rg) {

    rg = rg.replace(/\D/g, '');

    rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return rg;
}



