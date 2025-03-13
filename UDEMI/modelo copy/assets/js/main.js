const form = document.getElementById('form');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');


form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const pesoValue = parseFloat(peso.value);
    const alturaValue =  parseFloat(altura.value);
    const imc = pesoValue / (alturaValue * alturaValue);
    

    if(imc < 18.5){
        alert('Abaixo do peso');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, Abaixo do peso'`;        
    }else if(imc >= 18.5 && imc <= 24.9){
        alert('Peso normal');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, Peso normal`;
    }
    else if(imc >= 25 && imc <= 29.9){
        alert('Sobrepeso');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, Sobrepeso`;
    }
    else if(imc >= 30 && imc <= 34.9){
        alert('Obesidade grau 1');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, Obesidade grau 1`;
    }
    else if(imc >= 35 && imc <= 39.9){
        alert('Obesidade grau 2');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, Obesidade grau 2`;
    }
    else if(imc >= 40){
        alert('Obesidade grau 3');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}, Obesidade grau 3`;
    }
})

const limpar = document.getElementById('clean').addEventListener('reset', function(e){
    e.preventDefault()
    peso.value = '';
    altura.value = '';
})