const pnumeroSlider = document.getElementById('pnumero');
const snumeroSlider = document.getElementById('snumero');
const pnumeroDisplay = document.getElementById('pnumeroDisplay');
const snumeroDisplay = document.getElementById('snumeroDisplay');
const calcularsom = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');
 
//Atualiza o display do numero 1
pnumeroSlider.addEventListener('input', () => {
    pnumeroDisplay.textContent = `${pnumeroSlider.value}`;
});
 
//Atualiza o display de numero 2
snumeroSlider.addEventListener('input', () => {
    snumeroDisplay.textContent = `${snumeroSlider.value}`;
});
 
//Calcular Adição
calcularsom.addEventListener('click',() => {
    const numeroum = parseFloat(pnumeroSlider.value);
    const numerodois = parseFloat(snumeroSlider.value);
 
    if(numerodois < 0||numeroum <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const soma = numeroum + numerodois;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${soma}`;
});
 
//Calcular Subtração
calcularsub.addEventListener('click',() => {
    const numeroum = parseFloat(pnumeroSlider.value);
    const numerodois = parseFloat(snumeroSlider.value);
 
    if(numerodois < 0||numeroum <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const sub = numeroum - numerodois;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${sub}`;
});
 
//Calcular Multiplicação
calcularmult.addEventListener('click',() => {
    const numeroum = parseFloat(pnumeroSlider.value);
    const numerodois = parseFloat(snumeroSlider.value);
 
    if(numerodois < 0||numeroum <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const mult = numeroum * numerodois;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${mult}`;
});
 
//Calcular Divisão
calculardivisao.addEventListener('click',() => {
    const numeroum = parseFloat(pnumeroSlider.value);
    const numerodois = parseFloat(snumeroSlider.value);
 
    if(numerodois < 0||numeroum <=0){
        alert("Por favor, insira valores válidos para os dois números.");
        return;
    }
 
    const divi = numeroum / numerodois;
 
 
    resultadoDiv.innerHTML = `Seu Resultado é: ${divi}`;
});