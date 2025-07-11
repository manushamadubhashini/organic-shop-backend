import {Contact} from "../model/contact.model";
import {contactList} from "../db/db";

export const saveContact = (contact : Contact) : Contact =>{
    contactList.push(contact)
    return contact
}

export const getAllContact =() : Contact[] =>{
    return contactList
}
export const deleteContact =(id:number) =>{
    const index = contactList.findIndex(contact => contact.id == id)
    if (index === -1){
        return false
    }
    contactList.splice(index,1)
    return true
}

export const validateProduct =(contact : Contact) =>{
    if(!contact.id || !contact.email || !contact.subject || !contact.message){
        return "All field are required!"
    }
    return null;
}