const pesoSlider = document.getElementById('peso');
const alturaSlider = document.getElementById('altura');
const pesoDisplay = document.getElementById('pesoDisplay');
const alturaDisplay = document.getElementById('alturaDisplay');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');
 
//Atualiza o display do numero 1
pesoSlider.addEventListener('input', () => {
    pesoDisplay.textContent = `${pesoSlider.value}`;
});
 
//Atualiza o display de numero 2
alturaSlider.addEventListener('input', () => {
    alturaDisplay.textContent = `${alturaSlider.value}`;
});
 
//Calcular Adição
calcularBtn.addEventListener('click',() => {
    const peso = parseFloat(pesoSlider.value);
    const alturaCm = parseFloat(alturaSlider.value);
 
    if(alturaCm < 0||peso <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const imc = peso + alturaCm;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${imc}`;
});
 
calcularsub.addEventListener('click',() => {
    const peso = parseFloat(pesoSlider.value);
    const alturaCm = parseFloat(alturaSlider.value);
 
    if(alturaCm < 0||peso <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const imc = peso - alturaCm;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${imc}`;
});
 
calcularmult.addEventListener('click',() => {
    const peso = parseFloat(pesoSlider.value);
    const alturaCm = parseFloat(alturaSlider.value);
 
    if(alturaCm < 0||peso <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const imc = peso * alturaCm;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${imc}`;
});
 
calculardivisao.addEventListener('click',() => {
    const peso = parseFloat(pesoSlider.value);
    const alturaCm = parseFloat(alturaSlider.value);
 
    if(alturaCm < 0||peso <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const imc = peso / alturaCm;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${imc}`;
});