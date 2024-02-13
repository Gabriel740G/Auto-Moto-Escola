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

    let currentDate = new Date(); // Obtém a data atual
    let monthIndex = currentDate.getMonth(); // Obtém o índice do mês atual (0-11)
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const year = currentDate.getFullYear(); // Obtém o ano atual
    const dias = document.getElementById("dias");

    function updateCalendar() {
        const totalDays = new Date(year, monthIndex + 1, 0).getDate(); // Total de dias no mês
        const firstDayIndex = new Date(year, monthIndex, 1).getDay(); // Índice do primeiro dia da semana no mês

        dias.innerHTML = ""; // Limpa o conteúdo da tabela

        let day = 1;

        // Loop para criar as linhas do calendário
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            // Loop para criar as células de cada linha
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDayIndex) {
                    // Células vazias antes do primeiro dia do mês
                    row.appendChild(cell);
                } else if (day > totalDays) {
                    // Células vazias após o último dia do mês
                    row.appendChild(cell);
                } else {
                    cell.textContent = day;
                    row.appendChild(cell);
                    day++;
                }
            }
            dias.appendChild(row);
        }

        // Atualiza o mês e ano exibidos
        document.getElementById("mes").textContent = months[monthIndex];
        document.getElementById("ano").textContent = year;
    }

    // Função para avançar o mês
    btnNext.addEventListener("click", function() {
        monthIndex++;
        if (monthIndex > 11) {
            monthIndex = 0;
            year++;
        }
        updateCalendar();
    });

    // Função para retroceder o mês
    btnPrev.addEventListener("click", function() {
        monthIndex--;
        if (monthIndex < 0) {
            monthIndex = 11;
            year--;
        }
        updateCalendar();
    });

    // Inicializa o calendário
    updateCalendar();
});

