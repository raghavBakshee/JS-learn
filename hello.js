"use strict"; // treat all JS code as newer version
console.log("Hello World!")
let accountPassword = "Hello"
let notAssigned
// console.log(accountPassword, '123'+accountPassword);
//console.table([accountPassword])
// console.log(typeof "Hello");
// console.log(typeof notAssigned);

let userOne = { //Objects
    email: "abc@gmail.com",
    password: "Hello"
}

// console.log(userOne);

const myCoding = [
    {
        languageName: "Java",
        languageFileType: "java"
    },
    {
        languageName: "Python",
        languageFileType: "py" 
    },
    {
        languageName: "JavaScript",
        languageFileType: "js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName, ' ', item.languageFileType);
})