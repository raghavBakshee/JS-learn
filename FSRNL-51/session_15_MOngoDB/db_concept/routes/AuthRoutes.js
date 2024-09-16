import express from 'express'
import { userLogin, userRegister } from "../controllers/AuthController.js"

const router = express.Router();
router.post("/signin", userLogin);
router.post("/signup", userRegister);

export default router;