function calcularPenetracao(distancia) { return 100 - (distancia * 0.1); }
function verificarDano(acerto) { return acerto === 'paiol' ? 'Hit Kill' : 'Critico'; }
function relacaoPesoPotencia(peso, motor) { return motor / peso; }
function tempoRecarga(nivelTripulacao) { return 10 - (nivelTripulacao * 0.5); }
function blindagemEfetiva(espessura, angulo) { return espessura * (1 + angulo/90); }

module.exports = { calcularPenetracao, verificarDano, relacaoPesoPotencia, tempoRecarga, blindagemEfetiva };