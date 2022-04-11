import { Request, Response } from "express";
import ApplicationDatabseOperation from "../database/application.database.operation";
import EmailBusiness from "../models/email.business.model";

const applicationExpress = require("express");
const applicationRouter = applicationExpress.Router();
const applicationDatabseOperation = new ApplicationDatabseOperation();

applicationRouter.route('/getInUseEmail').get((request : Request, response : Response) => {
    console.log('getInUseEmail')
    applicationDatabseOperation.getInUseEmail()
    .then((data) => {
        var email : EmailBusiness = {
            id : '',
            email : data.email,
            accessToken : data.access_token,
            userId : data.user_id,
            serviceId : data.service_id,
            isInUse : true
        }
        return response.status(200).json(email);
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = applicationRouter;