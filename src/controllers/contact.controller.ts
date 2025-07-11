import {Request,Response} from "express";
import * as contactService from "../services/contact.service"
export const saveContact = (req : Request, res : Response) =>{
    try{
        const newContact = req.body;
        const validationError = contactService.validateProduct(newContact)
        if (validationError){
            res.status(400).json({
                error : validationError
            })
            return
        }
        const saveContact = contactService.saveContact(newContact)
        res.status(201).json(saveContact)

    }catch (error){
        console.log(error)
        res.status(500).json({
            error : "Something Went Wrong"
        })
    }

}
export const getAllContact = (req: Request , res : Response) => {
    try {
        const contacts = contactService.getAllContact();
        res.status(200).json(contacts)
    }catch (error){
        console.log(error)
        res.status(500).json({
            error : "Something Went Wrong"
        })
    }
}

export const deleteContact = (req : Request, res : Response) =>{
    try{
        const contactId = parseInt(req.params.id)
        if (isNaN(contactId)){
            res.status(400).json({
                error : "Invalid Contact Id"
            })
        }
        const  deleteContact = contactService.deleteContact(contactId)

        if (!deleteContact){
            res.status(404).json({
                error : "Contact Id Not Found"
            })
        }

        res.status(200).json({
            message : "Deleted Successfully!"
        })
    }catch (error){
        res.status(500).json({
            error : "Something Went Wrong!"
        })
    }

}