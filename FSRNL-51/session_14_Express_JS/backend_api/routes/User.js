import express from 'express'

const router = express.Router();
router.get("/", (req, res)=>{
    res.send('User Home page')
})

router.get("/dashboard", (req, res)=>{
    res.send('User Dashboard page')
})

router.post("/adduser", (req, res)=>{
    let body = req.body;
    res.send('user data : ' + JSON.stringify(body));
})
export default router;