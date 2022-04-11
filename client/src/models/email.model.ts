export interface IEmail {
    serviceId : string, 
    templateId : string, 
    userId : string,
    email : string
}
export const initialEmail : IEmail =  {
    serviceId : '', 
    templateId : '', 
    userId : '',
    email : ''
}