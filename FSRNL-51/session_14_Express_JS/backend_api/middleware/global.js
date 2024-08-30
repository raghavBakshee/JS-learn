export const xyz = (req, res, next)=>{
    req.title = "Geek for Geek";
    next();
}