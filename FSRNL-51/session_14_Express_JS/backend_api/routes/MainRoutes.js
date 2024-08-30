import express from 'express'

const router = express.Router();

//define routes
router.get("/",(req, res)=>{
    res.send("Default Routesss - Changed");
})

router.get("/about",(req, res)=>{
    res.send("About Route");
})
// Route Params
router.get("/products/:cname", (req, res)=>{
    let cat = req.params.cname;
    res.send(`${cat} products`)
})
//Optional Params
router.get("/product1/:cname/:scat?", (req, res)=>{
    let cat = req.params.cname;
    let scat = req.params.scat;
    if(scat === undefined){
        res.send(`${cat} products`)
    }
    else{
        res.send(`${cat} and ${scat} products`)
    }
    
})



export default router;