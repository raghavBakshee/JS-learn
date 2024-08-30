import express from 'express'
import { checkUser } from '../middleware/routelabel.js';

const router = express.Router();
router.get("/", checkUser, (req, res)=>{
    res.send('Admin Home page ' )
})

router.get("/dashboard", (req, res)=>{
    res.send('Admin Dashboard page')
})
export default router;