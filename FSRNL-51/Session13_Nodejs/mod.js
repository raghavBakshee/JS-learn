const obj= {
    success : (msg)=>{
        console.log("Success message is "+msg)
    },
    error : (msg)=>{
        console.log("Error message is "+msg)
    },
    warning : (msg)=>{
        console.log("Warning message is "+msg)
    }
}
const API= "https://xyz.com/api/products";


export {obj, API};