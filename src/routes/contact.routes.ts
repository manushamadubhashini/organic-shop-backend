import {Router} from "express";
import {getAllContact, saveContact} from "../controllers/contact.controller";
import {deleteContact} from "../controllers/contact.controller";

const contactRouter : Router = Router()

contactRouter.post("/save",saveContact)
contactRouter.get("/all",getAllContact)
contactRouter.delete("/delete",deleteContact)

export default contactRouter