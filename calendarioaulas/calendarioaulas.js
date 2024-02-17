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

// Configurações do calendario

document.addEventListener("DOMContentLoaded", function() {
    const btnPrev = document.getElementById("btn_prev");
    const btnNext = document.getElementById("btn_next");
    const mesDisplay = document.getElementById("mes");
    const anoDisplay = document.getElementById("ano");
    const diasContainer = document.querySelector(".dias");

    let monthIndex = new Date().getMonth();
    let year = new Date().getFullYear();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function updateCalendar() {
        mesDisplay.textContent = months[monthIndex];
        anoDisplay.textContent = year;

        diasContainer.innerHTML = "";

        const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();

        for (let i = 1; i <= lastDayOfMonth; i++) {
            const dia = document.createElement("div");
            dia.classList.add("background-dia");
            dia.innerHTML = `<p class="dia">${i}</p>`;
            diasContainer.appendChild(dia);
        }
    }

    btnNext.addEventListener("click", function() {
        monthIndex++;
        if (monthIndex > 11) {
            monthIndex = 0;
            year++;
        }
        updateCalendar();
    });

    btnPrev.addEventListener("click", function() {
        monthIndex--;
        if (monthIndex < 0) {
            monthIndex = 11;
            year--;
        }
        updateCalendar();
    });

    updateCalendar();
});


