// controller function to handel getAll product
import express from "express";
import {Request,Response} from "express";
import * as productService from '../services/product.service' // product service eken ena full result eka productService namin include karagnn

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

}

export const updateProduct = (req : Request, res : Response) => {

}
export const deleteProduct = (req : Request, res : Response) => {

}
