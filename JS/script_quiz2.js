let currentQuestion = 0; // índice da pergunta atual
const totalQuestions = 7; // total de perguntas

function mostrarProxima() {
    const respostaSelecionada = document.querySelector(`input[name="questao${currentQuestion}"]:checked`);

    // Verifica se uma resposta foi selecionada
    if (!respostaSelecionada) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    // Esconde a pergunta atual
    document.getElementById(`questao${currentQuestion}`).style.display = "none";
    currentQuestion++; // Avança para a próxima pergunta

    // Verifica se a pergunta atual é a última
    if (currentQuestion > totalQuestions) {
        exibirResultado(); // Se todas as perguntas foram respondidas, calcula o resultado
    } else {
        document.getElementById(`questao${currentQuestion + 1}`).style.display = "block"; // Mostra a próxima pergunta
    }
}

function exibirResultado() {
    const respostas = [];

    // Contar as respostas
    for (let i = 1; i <= totalQuestions; i++) {
        const respostaSelecionada = document.querySelector(`input[name="questao${i}"]:checked`);
        respostaSelecionada.push(respostaSelecionada ? respostaSelecionada.value : null)
    }

    const profissaoMap = {
        "a": "Lider",
        "b": "Analista",
        "c": "Inovador",
        "d": "Colaborativo"
    };

    const sugestaoProfissao = {};
    respostas.forEach((respostaSelecionada)=>{
        if(respostaSelecionada){
            const profissao = profissaoMap[respostaSelecionada];
            if (profissao){
                sugestaoProfissao[profissao] = (sugestaoProfissao[profissao] || 0) + 1;
            }
        }
    });

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h4>Resultado:</h4>";
    const profissaoMaisFrequente = Object.keys(sugestaoProfissao).reduce((a, b) => sugestaoProfissao[a] > sugestaoProfissao[b] ? a : b);
    resultadosDiv.innerHTML += `<p>Profissão sugerida: <strong>${profissaoMaisFrequente}</strong><br></p>`;
    resultadosDiv.style.display = "block";

    document.getElementById("btnProximo").style.display = "none";

    // Exibe o modal apropriado com base na profissão sugerida
    if (profissaoMaisFrequente === "Líder") {
        showModalResolucao();
    } else if (profissaoMaisFrequente === "Analista") {
        showModalOrganiza();
    } else if (profissaoMaisFrequente === "Inovador") {
        showModalColaboracao();
    } else if (profissaoMaisFrequente === "Colaborativo") {
        showModalColaboracao();
    }
}
function mostrarResultado() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "<h4>Resultado:</h4><p>Mostre aqui o resultado do quiz com base nas respostas selecionadas.</p>";
    resultadosDiv.style.display = 'block'; // Aqui a div é exibida
}

function showModalOrganiza() {
    document.getElementById("myModalResolucao").style.display = "block";
}

function hideModalOrganiza() {
    document.getElementById("myModalResolucao").style.display = "none";
}

function showModalInovador() {
    document.getElementById("myModalOrganiza").style.display = "block";
}

function hideModalInovador() {
    document.getElementById("myModalOrganiza").style.display = "none";
}

function showModalColaboracao() {
    document.getElementById("myModalColaboracao").style.display = "block";
}

function hideModalColaboracao() {
    document.getElementById("myModalColaboracao").style.display = "none";
}



// Fecha os modais ao clicar fora deles
window.onclick = function(event) {
    if (event.target.className.includes("modal")) {
        hideModalResolucao();
        hideModalOrganiza();
        hideModalColaboracao();
    }
};