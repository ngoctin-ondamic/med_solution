import { IUserContact } from "../models/user.model";

export class ValidateUtil {

    static validateUserContactForm(userContact : IUserContact): boolean {
        var regexFullname = /^[ a-zA-Z\-']+$/i;
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var regexPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

        if(userContact.fullname.length === 0 || 
            userContact.fullname.length > 100 ||
            !regexFullname.test(userContact.fullname)){
                var fullname = document.getElementById("fullname");
                if(fullname){
                    fullname.focus();
                }
                return false;
        }
        if(userContact.email.length === 0 || 
            userContact.email.length > 200 ||
            !regexEmail.test(userContact.email)){
                var email = document.getElementById("email");
                if(email){
                    email.focus();
                }
                return false;
        }
        if(userContact.phoneNumber.length < 10 || 
            userContact.phoneNumber.length >12 ||
            !regexPhoneNumber.test(userContact.phoneNumber)){
                var phoneNumber = document.getElementById("phoneNumber");
                if(phoneNumber){
                    phoneNumber.focus();
                }
                return false;
        }
        
        if(userContact.subject.length === 0 || 
            userContact.subject.length > 100){
                var subject = document.getElementById("fullname");
                if(subject){
                    subject.focus();
                }
                return false;
        }
        
        if(userContact.description.length === 0 || 
            userContact.description.length > 4000){
                var description = document.getElementById("fullname");
                if(description){
                    description.focus();
                }
                return false;
        }
        
        return true;
    }

    static validatePhoneNumber(phoneNumber : string): boolean{
        var regexPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        if(phoneNumber.length < 10 || 
            phoneNumber.length >12 ||
            !regexPhoneNumber.test(phoneNumber)){
                return false;
        }
        return true;
    }

}