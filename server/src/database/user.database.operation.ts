import UserContact from "../models/user.contact.model";
import DateTimeConstant from "../utils/DateTimeConstant";
import DateTimeUtil from "../utils/DateTimeUtil";

var config = require('./dbconfig')
const DBConnection  = require('mssql');

export default class UserDatabasesOperation{
    async createNewUsercontact(userContact:UserContact) {
        try {
            var connection = await DBConnection.connect(config);
            var sql = 'INSERT INTO user_contact VALUES(@id,@fullname,@email,@phone_number,@description,@subject,@type_contact,@insert_date)';
            console.log("fullname : " + userContact.fullname)
            let result = await connection.request()
            .input('id',DBConnection.NVarChar ,DateTimeUtil.getCurrentMillisecond())
            .input('fullname',DBConnection.NVarChar ,userContact.fullname)
            .input('email', DBConnection.NVarChar ,userContact.email)
            .input('phone_number', DBConnection.NVarChar ,userContact.phoneNumber)
            .input('description', DBConnection.NVarChar ,userContact.description)
            .input('subject', DBConnection.NVarChar ,userContact.subject)
            .input('type_contact', DBConnection.Int ,userContact.typeContact)
            .input('insert_date', DBConnection.NVarChar ,DateTimeUtil.getCurrentDateTime(DateTimeConstant.yyyy_mm_dd_hh_MM_ss))
            .query(sql);
            return result.recordsets;
        } catch (error) {
            console.log(error)
        }
    }
}