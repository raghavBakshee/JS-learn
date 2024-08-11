import fs from 'fs';
// fs.mkdir('./Raghav',(err)=>{
//     if(err) console.log(err);
//     else console.log("Folder Created Successfull!!!");
// })

// let folder = fs.mkdirSync("./Raghav");
// if(folder) console.log("Created");
// else console.log("Not Created");

// File Create
let file = fs.existsSync('./Raghav/my.txt');
if(file){
fs.readFile('./Raghav/my.txt',(err,data)=>{
    if(err) throw err;
    else console.log("Data is " + data.toString());
})
}
else{
    fs.writeFile('./Raghav/my.txt','Hello How are you',(err)=>{
        if(err) throw err;
        
    });
}
