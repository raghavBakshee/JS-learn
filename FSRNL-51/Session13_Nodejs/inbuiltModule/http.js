import http from 'http';
const PORT = 7788;
const server = http.createServer((req,res)=>{
    res.write("First Node Server");
    res.end();
})
server.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`)
})