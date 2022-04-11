import { DateTimeUtil } from "../utils/DateTimeUtil"

export interface IUser {
    id : number,
    avatar : string,
    name : string,
    job : string,
    description : string,
    rating : number
}

export interface IUserContact{
    id : string,
    fullname : string,
    email : string,
    phoneNumber : string,
    subject : string,
    description : string,
    typeContact : number | null;
}

export const initialUserContact : IUserContact = {
    id : DateTimeUtil.getMilliseconds(),
    fullname : '',
    email : '',
    phoneNumber : '',
    subject : '',
    description : '',
    typeContact : null
}

