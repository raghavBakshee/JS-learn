import { ProductModel } from "../models/ProductModel"

export const getProducts = async (req, res) => {
    // Need to correct
    try {
        let newProduct = new ProductModel(req.body);
        await newProduct.save();
        res.json({ "err": 0, "msg": "Something went wrong" })
    }
    catch (err) {
        res.json({ "err": 1, "msg": "Something went wrong" })

    }
}

export const getProductById = (req, res) => {
    res.json({ "err": 0, "msg": "Product Fetched by Id" })
}

export const addProduct = async (req, res) => {
    try {
        let newProduct = new ProductModel(req.body);
        await newProduct.save();
        res.json({ "err": 0, "msg": "Something went wrong" })
    }
    catch (err) {
        res.json({ "err": 1, "msg": "Something went wrong" })

    }
}

export const deleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        const product = await ProductModel.findByIdAndDelete(id);
        if (!product) {
            res.json({ "err": 1, "msg": "Something went wrong to delete" })

        }
        else {
            res.json({ "err": 0, "msg": "Product deleted" })

        }
    }
    catch (err) {
        res.json({ "err": 1, "msg": "Something went wrong to delete" })
    }
}

export const updateProduct = (req, res) => {
    res.json({ "err": 0, "msg": "Product Updated" })
}