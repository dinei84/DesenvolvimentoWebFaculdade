const http = require('http')
const port = 3000

const server = http((req,res)=>{
    const urlInfo = require('url').parse(req.url, true);
    const name = 
})

