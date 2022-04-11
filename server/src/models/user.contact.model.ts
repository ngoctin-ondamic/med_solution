export default class UserContact {
    public id : string;
    public fullname : string;
    public email : string;
    public phoneNumber : string;
    public subject : string;
    public description : string;
    public typeContact : number;
    public insertDate : string;

	constructor(id: string, fullname: string, email: string, phoneNumber: string, subject: string, description: string, typeContact: number, insertDate: string) {
		this.id = id;
		this.fullname = fullname;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.subject = subject;
		this.description = description;
		this.typeContact = typeContact;
		this.insertDate = insertDate;
	}
	
    
}