const http = require('http')
const port = 3000;

const server = http.createServer((req, res) =>{
    res.write("Estudando servidores")
    res.end();
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})