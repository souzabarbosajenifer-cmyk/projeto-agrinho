function calcularResultado() {
    // Pega o formulário
    const form = document.getElementById('quizForm');
    
    // Validação simples: verifica se todas as perguntas foram respondidas
    if (!form.checkValidity()) {
        alert("Por favor, responda a todas as perguntas antes de continuar.");
        return;
    }

    // Pega as respostas selecionadas
    const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);

    // Soma a pontuação total (máximo de 30 pontos neste exemplo)
    const pontuacaoTotal = q1 + q2 + q3;

    // Elementos da tela que vamos modificar
    const resultadoDiv = document.getElementById('resultado');
    const notaTexto = document.getElementById('notaTexto');
    const dicaTexto = document.getElementById('dicaTexto');

    // Lógica do Diagnóstico baseada nos pontos
    if (pontuacaoTotal >= 25) {
        notaTexto.innerHTML = `<strong>Selo Verde - Produtor Sustentável 🎉</strong> (Pontuação: ${pontuacaoTotal}/30)`;
        dicaTexto.innerText = "Excelente! Sua propriedade equilibra muito bem a produção com a preservação ambiental. Continue inovando!";
    } else if (pontuacaoTotal >= 15 && pontuacaoTotal < 25) {
        notaTexto.innerHTML = `<strong>Selo Amarelo - Em Desenvolvimento ⚖️</strong> (Pontuação: ${pontuacaoTotal}/30)`;
        dicaTexto.innerText = "Bom caminho! Você já adota práticas sustentáveis, mas ainda pode melhorar a eficiência energética ou o manejo de recursos para alcançar a pontuação máxima.";
    } else {
        notaTexto.innerHTML = `<strong>Selo Laranja - Alerta de Eficiência ⚠️</strong> (Pontuação: ${pontuacaoTotal}/30)`;
        dicaTexto.innerText = "Atenção: Sua produção pode estar desperdiçando recursos valiosos. Tente implementar a logística reversa de embalagens e planejar melhor o uso da água para reduzir custos e proteger a natureza.";
    }

    // Mostra a caixinha de resultado na tela
    resultadoDiv.classList.remove('hidden');
    
    // Rola a tela suavemente até o resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}
