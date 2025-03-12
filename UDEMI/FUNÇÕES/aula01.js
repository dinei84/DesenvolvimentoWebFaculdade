function funcao(){
    console.log('Função tradicional');
}

const souUmDado = function(){
    console.log('Sou um dado');
    
}

function executafuncao (funcao){
    console.log('Vou  executar a função tradicional:');
    funcao();
}

executafuncao(souUmDado)