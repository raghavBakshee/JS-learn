import express from 'express'
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/ProductController.js"

const router = express.Router();
router.get("/getproducts", getProducts);
router.get("/getproductbyid/:id", getProductById);

router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.put("/editproduct/:id", updateProduct);

export default router;