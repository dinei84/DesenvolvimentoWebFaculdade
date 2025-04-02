const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req,res)=>{
    res = fs.writeFile('mensagem.txt','Ola!, Node.js', (err)=>{
        if (err) {
            console.log("Ocorreu um erro")
        }else{
            console.log("Arquivo criado com sucesso")
        }
    })

    res.end()
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})