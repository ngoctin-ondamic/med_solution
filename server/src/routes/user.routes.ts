import { Request, Response } from "express";
import UserDatabasesOperation from "../database/user.database.operation";
import UserContact from "../models/user.contact.model";
const userExpress = require("express");
const userRouter = userExpress.Router();
const userDatabasesOperation = new UserDatabasesOperation();

userRouter.route('/contact/createNewUserContact').post((request : Request, response : Response) => {
    
    const userContact : UserContact = {...request.body}
    userDatabasesOperation.createNewUsercontact(userContact)
    .then(data => {
        response.status(200).json(true);
    })
    .catch(err => {
        response.status(304).json(false);
        console.log(err);
    })
})

module.exports =  userRouter;