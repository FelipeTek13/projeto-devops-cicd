const { calcularPenetracao, verificarDano, relacaoPesoPotencia, tempoRecarga, blindagemEfetiva } = require('./calculos');

test('Teste 1: Reduz penetracao com a distancia', () => {
  expect(calcularPenetracao(100)).toBe(90);
});

test('Teste 2: Verifica destruicao pelo paiol de municao', () => {
  expect(verificarDano('paiol')).toBe('Hit Kill');
});

test('Teste 3: Calcula peso/potencia do veiculo', () => {
  expect(relacaoPesoPotencia(40, 800)).toBe(20);
});

test('Teste 4: Reduz tempo de recarga com tripulacao experiente', () => {
  expect(tempoRecarga(5)).toBe(7.5);
});

test('Teste 5: Aumenta blindagem com angulacao da chapa', () => {
  expect(blindagemEfetiva(100, 45)).toBe(150);
});