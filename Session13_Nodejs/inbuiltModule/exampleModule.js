import fs from 'fs';

import http from 'http';

const PORT=8899;

const server=http.createServer((req,res)=>{

   if(req.url==="/"){

      res.end("File handling implementation")

   }

   else if(req.url === "/createfile"){

      const file=fs.existsSync("xyz.txt");

      if(file){

          res.end("File already exists")

      }

      else{

         fs.writeFile("xyz.txt","file handling example",(err)=>{

            if(err) throw err 

            else res.end("File created")

         })

      }

   }

   else if(req.url === "/readfile"){

    const file=fs.existsSync("xyz.txt");

    if(file){

         fs.readFile("xyz.txt",(err,data)=>{

            if(err) throw err;

            else res.end(data.toString())

         })

    }

    else{

        res.end("Please create a file")

    }

   }

   else{

    res.end("Invalid Url")

   }

})

server.listen(PORT,(err)=>{

    if(err) throw err;

    else{

        console.log(`Server work on ${PORT}`)

    }

})