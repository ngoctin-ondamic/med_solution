import httpApplication from "../apis/http.application";
import { IEmail } from "../models/email.model";
class ApplicationService {
    async getInUseEmail() {
        var response = await httpApplication.getInUseEmail();
        if(response && response.status === 200 && response.data != null){
            return response.data;
        }
        return null; 
    }
}

export default new ApplicationService();