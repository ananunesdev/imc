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

//Atualiza o display de altura
alturaSlider.addEventListener('input', () => {
    const alturaCm = alturaSlider.value;
    const metros = Math.floor(alturaCm/100);
    const centimetros = alturaCm % 100;
    alturaDisplay.textContent = `${metros}, ${centimetros.toString().padStart(2,'0')} m`;
});

//calcular o imc
calcularBtn.addEventListener('click', () => {
    const peso = parseFloat(pesoSlider.value);
    const alturaCm = parseFloat(alturaSlider.value);
    const alturaMetros = alturaCm / 100;

    if(isNaN(peso) || isNaN(alturaMetros) || alturaMetros <= 0){
        alert('Por favor, insira valores válidos para peso e altura.')
        return;
    }

    const imc = peso / (alturaMetros * alturaMetros);

    if(imc < 18.5){
        classificacao = 'Abaixo do peso'
    }else if(imc >= 18.5 && imc < 24.9){
        classificacao = 'Peso normal'
    }else if(imc >= 25 && imc < 29.9){
        classificacao = 'Sobrepeso'
    }else if(imc >= 30 && imc < 34.9){
        classificacao = 'Obesidade Grau I'
    }else if(imc >= 35 && imc < 39.9){
        classificacao = 'Obesidade Grau II'
    } else {
        classificacao = 'Obesidade Grau III'
    }

    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;

});
