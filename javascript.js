const pesoSlider = document.getElementById('peso')
const alturaSlider = document.getElementById('altura')
const pesoDisplay = document.getElementById('pesoDisplay')
const alturaDisplay = document.getElementById('alturaDisplay')
const calcularBtn = document.getElementById('calcularBtn')
const resultadoDiv = document.getElementById('resultado')

//Atualiza o display do peso
pesoSlider.addEventListener('input', () => {
    pesoDisplay.textContent = `${pesoSlider.value} Kg`;
});