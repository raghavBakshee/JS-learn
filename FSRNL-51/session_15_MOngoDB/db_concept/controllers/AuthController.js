import { AuthModel } from "../models/AuthModel.js"
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
export const userLogin = async (req, res) =>{
     try{
        let user = await AuthModel.findOne({email: req.body.email});
        if(!user){
            res.json({"err": 1, "msg": "Enter correct email and pwd"})
        }
        else{
            const isValidPassword = bcrypt.compareSync(req.body.password, user.password)
            if(isValidPassword){
                res.json({"err": 0, "msg": "Login Success"})
            }
            else{
                res.json({"err": 1, "msg": "Enter correct email and pwd"})
            }
        }
     }
     catch(err){
        res.json({"err": 1, "msg": "Enter correct email and pwd"})
     }
}

export const userRegister = async (req, res) =>{
    //res.json({"err": 0, "msg": "Register Success"})
    let user = await AuthModel.findOne({email:req.body.email});
    if(user){
        return res.json({"err": 1, "msg": "User already exists, Please try with other credentials"})
    }
    try{
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const user = new AuthModel(req.body);
        await user.save();
        res.json({"err": 0, "msg": "User Registration"})
    }
    catch(err){
        return res.json({"err": 1, "msg": "User already exists, Please try with other credentials"})
    }
}