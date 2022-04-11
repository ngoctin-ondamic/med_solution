import request from "axios";
import { IUserContact } from "../models/user.model";
import httpCommon from "./http.common";

class UserAPI{
   async createNewUserContact(userContact:IUserContact) {
       try {
           return await httpCommon.post('api/user/contact/createNewUserContact',userContact);
       } catch (error) {
           if(request.isAxiosError(error) && error.response){
               return error.response
           }
       }
   }
}

export default new UserAPI();