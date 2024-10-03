let perguntaAtual = 1; // Começa na primeira pergunta
const totalPerguntas = 7; // Total de perguntas

function mostrarProxima() {
    const respostaSelecionada = document.querySelector(`input[name="questao${perguntaAtual}"]:checked`);

    if (!respostaSelecionada) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    document.getElementById(`questao${perguntaAtual}`).style.display = "none";
    perguntaAtual++;

    if (perguntaAtual > totalPerguntas) {
        exibirResultado();
    } else {
        document.getElementById(`questao${perguntaAtual}`).style.display = "block";
    }
}

function exibirResultado() {
    const respostas = [];

    for (let i = 1; i <= totalPerguntas; i++) {
        const resposta = document.querySelector(`input[name="questao${i}"]:checked`);
        respostas.push(resposta ? resposta.value : null);
    }

    const profissaoMap = {
        "a": "Líder de Projetos",
        "b": "Analista de Dados",
        "c": "Criativo",
        "d": "Facilitador de Equipes"
    };

    const sugestaoProfissao = {};
    respostas.forEach((resposta) => {
        if (resposta) {
            const profissao = profissaoMap[resposta];
            if (profissao) {
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
    if (profissaoMaisFrequente === "Líder de Projetos") {
        showModalResolucao();
    } else if (profissaoMaisFrequente === "Analista de Dados") {
        showModalOrganiza();
    } else if (profissaoMaisFrequente === "Criativo" || profissaoMaisFrequente === "Facilitador de Equipes") {
        showModalColaboracao();
    }
}
function mostrarResultado() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "<h4>Resultado:</h4><p>Mostre aqui o resultado do quiz com base nas respostas selecionadas.</p>";
    resultadosDiv.style.display = 'block'; // Aqui a div é exibida
}

function showModalResolucao() {
    document.getElementById("myModalResolucao").style.display = "block";
}

function hideModalResolucao() {
    document.getElementById("myModalResolucao").style.display = "none";
}

function showModalOrganiza() {
    document.getElementById("myModalOrganiza").style.display = "block";
}

function hideModalOrganiza() {
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
