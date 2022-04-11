import EmailBusiness from "../models/email.business.model";

var config = require('./dbconfig')
const DBConnection = require('mssql')

export default class ApplicationDatabseOperation {
    async getInUseEmail() {
        try {
            var connection = await DBConnection.connect(config);
            var sql = "SELECT * FROM business_email WHERE is_in_use = 'true'";
            let result = await connection.request().query(sql);
            return result.recordset[0];
        } catch (error) {
            console.log(error)
        }
    }

}