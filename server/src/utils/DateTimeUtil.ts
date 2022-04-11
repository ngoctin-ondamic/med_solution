export default class DateTimeUtil {
    static getCurrentMillisecond() : string {
        var date = new Date();
        var returnValue = date.getTime() + "";
        return returnValue;
    }

    static getCurrentDateTime(format : string) : string{
        var dateString : string = '';
        var date = new Date();
        switch (format) {
            case 'yyyy/mm/dd hh:MM:ss' : 
            dateString =
            date.getUTCFullYear() + "/" +
            ("0" + (date.getUTCMonth()+1)).slice(-2) + "/" +
            ("0" + date.getUTCDate()).slice(-2) + " " +
            ("0" + date.getHours()).slice(-2) + ":" +
            ("0" + date.getUTCMinutes()).slice(-2) + ":" +
            ("0" + date.getUTCSeconds()).slice(-2);
            return dateString;
            default:
                break;
        }
        return dateString;
    }
}