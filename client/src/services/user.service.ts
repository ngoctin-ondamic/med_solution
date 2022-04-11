import httpUser from "../apis/http.user";
import { IUserContact } from "../models/user.model";
import emailjs from '@emailjs/browser';
import { IEmail, initialEmail } from "../models/email.model";
import EMAIL_TEMPLATE_ENUM from "../enum/emailTemplateID.enum";

class UserService {

    async createNewUserContact(userContact: IUserContact) {
        var response = await httpUser.createNewUserContact(userContact);
        if (response?.data) {
            return true;
        }
        return false;
    }

    async sendEmail(userContact: IUserContact, email: IEmail) {
        //service_ngoctin0001
        //template_custcontact>
        emailjs.init(email.userId)
        var response;

        if (userContact.typeContact === 1) {
            email = { ...email, templateId: EMAIL_TEMPLATE_ENUM.TEMPLATE_CUST_CONTACT }
            response = await emailjs.send(
                email.serviceId,
                email.templateId,
                {
                
                    fullname: userContact.fullname,
                    phoneNumber: userContact.phoneNumber,
                    email: userContact.email,
                    subject: userContact.subject,
                    description: userContact.description,
                    toEmail: email.email,

                }
            );
            if (response.status === 200) {
                return true;
            }
            return false;
        } else if (userContact.typeContact === 0) {
            email = { ...email, templateId: EMAIL_TEMPLATE_ENUM.TEMPLATE_CUST_CONSULTING }
            response = emailjs.send(email.serviceId, email.templateId,
                {
                    phoneNumber: userContact.phoneNumber,
                    toEmail: email.email,
                });
            if((await response).status == 200){
                return true;
            }
            return false;
        }
    }

}

export default new UserService();