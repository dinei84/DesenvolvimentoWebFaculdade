// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json){
    let contagem = 0
    const table = document.createElement('table');
    for (const pessoas of json) {

        const tr = document.createElement('tr');
        
        let td0 = document.createElement('td');
        td0.innerHTML = `${contagem += 1} - `;
        tr.appendChild(td0);

        let td = document.createElement('td');
        td.innerHTML = pessoas.nome;
        tr.appendChild(td);

        let td1 = document.createElement('td');
        td1.innerHTML = pessoas.email;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoas.salario;
        tr.appendChild(td2);

        table.appendChild(tr);
}       
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
