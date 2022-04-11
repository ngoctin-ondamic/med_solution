import httpCommon from "./http.common";
import {IEmail} from "../models/email.model";
import request from "axios";
class ApplicationAPI{

    async getInUseEmail() {
        try {
            return await httpCommon.get<IEmail>('api/application/getInUseEmail');
        } catch (error) {
            if(request.isAxiosError(error) && error.response){
                return error.response;
            }
        }
    }

}

export default new ApplicationAPI();