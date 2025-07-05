// controller function to handel getAll product
import express from "express";
import {Request,Response} from "express";
import * as productService from '../services/product.service'
import productRouter from "../routes/product.routes"; // product service eken ena full result eka productService namin include karagnn

export const getAllProducts = (req : Request, res : Response) => {

    try {
        const products = productService.getAllProducts();
        res.status(200).json(products) // products tika json format ekakin send karann
    }catch (error){
        console.error(error)
        res.status(500).json({
            error: "something went wrong!" //  unexpected behaviour
        })
    }
}


export const saveProduct = (req : Request,res : Response) =>{
    try{
        const  newProduct = req.body;
        const validationError = productService.validateProduct(newProduct) // verify valid product
        if (validationError){
            res.status(400).json({
                error : validationError
            })
            return;
        }

        const saveProduct = productService.saveProduct(newProduct);
        res.status(201).json(saveProduct);

    }catch (error){
        console.error(error)
        res.status(500).json({
            error: "something went wrong!" //  unexpected behaviour
        })
    }

}

export const  getProduct = (req : Request , res :Response) =>{
    const productId = parseInt(req.params.id);
    if (isNaN(productId)){
        res.status(400).json({
            error : "Invalid Product Id"
        });
        return;
    }

    const product = productService.getProductById(productId)
    if(!product){
        res.status(404).json({
            error : "Product Not Found"
        });
        return;
    }
    res.status(200).json(product)

}

export const updateProduct = (req : Request, res : Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)){
        res.status(400).json({
            error : "Invalid Product Id"
        });
        return;
    }
    const updatedData = req.body;
    const updatedProduct = productService.updateProduct(productId,updatedData);
    if (!updatedProduct){
        res.status(404).json({
            error : "Product Not Found"
        });
        return;
    }
    res.status(200).json(updatedProduct);

}
export const deleteProduct = (req : Request, res : Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)){
        res.status(400).json({
            error : "Invalid Product Id"
        });
        return;
    }
    const deleteProducts = productService.deleteProduct(productId)

    if(!deleteProducts){
        res.status(404).json({
            error : "Product Not Found"
        })
        return;
    }
    res.status(200).json({
        message : "Product Deleted Successfully"
    })

}
