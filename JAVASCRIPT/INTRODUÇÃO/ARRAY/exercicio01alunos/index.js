let colecao1 = ["dinei", 7.0, 8.5];
let colecao2 = ["fernanda", 9.2, 6.5];

// Função para calcular média
function calcularMedia(colecao) {
    let soma = 0;
    for (let i = 1; i < colecao.length; i++) {
        soma += colecao[i];
    }
    return soma / (colecao.length - 1); 
}

// Calcular médias
let media1 = calcularMedia(colecao1);
let media2 = calcularMedia(colecao2);

// Condições de aprovação
if (media1 >= 7) {
    console.log(`${colecao1[0]} Aprovado`);
} else {
    console.log(`${colecao1[0]} Reprovado`);
}

if (media2 >= 7) {
    console.log(`${colecao2[0]} Aprovado`);
} else {
    console.log(`${coleço2[0]} Reprovado`);
}
