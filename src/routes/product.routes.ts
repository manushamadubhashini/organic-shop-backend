import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRouter :Router = Router() // define routes
// Handle request
productRouter.get("/all",getAllProducts) // getAll // @GetMapping("/all)
productRouter.post("/save",saveProduct) // save // @PostMapping("/save
productRouter.get("/:id",getProduct) //getProduct
productRouter.delete("/delete/:id",deleteProduct) // delete
productRouter.put("/update/:id",updateProduct) // update

export default productRouter // and export to outside