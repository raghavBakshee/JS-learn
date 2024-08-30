export const checkUser = (req, res, next)=>{
    const header = req.headers['name'];
    if(header != undefined){
        if(header =='geek'){
            next();
        }
        else{
            res.send('Not Authorized')
        }
    }
    else{
        res.send('Please send header')
    }

}  