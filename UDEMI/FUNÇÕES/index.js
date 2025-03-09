// function f1(){
//     console.log('Ola')
// }

// function f2(){
//     console.log('Mundo')
// }

// function f3(){
//     console.log('!')
// }

// f1()
// f2()
// f3()

function fazerBolo(callback) {
    console.log("Fazendo o bolo...");
    setTimeout(function() {
        console.log("Bolo pronto!");
        callback(); // Chama a função quando o bolo estiver pronto
    }, 3000); // 3 segundos para o "bolo assar"
}

function comerBolo() {
    console.log("Hmmm, que bolo gostoso!");
}

// Chama a função fazerBolo e passa comerBolo como callback
fazerBolo(comerBolo);
