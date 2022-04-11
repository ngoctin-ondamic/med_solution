export default class EmailBusiness{
    public id : string;
    public email :string;
    public serviceId : string;
    public userId : string;
    public accessToken : string;
    public isInUse : boolean;

	constructor(id: string, email: string, serviceId: string, userId: string, accessToken: string, isInUse: boolean) {
		this.id = id;
		this.email = email;
		this.serviceId = serviceId;
		this.userId = userId;
		this.accessToken = accessToken;
		this.isInUse = isInUse;
	}

}