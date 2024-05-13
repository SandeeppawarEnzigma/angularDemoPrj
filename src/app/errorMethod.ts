// export class DocError {
//     public static error(message: any, status: any, errorCode: number, statusCode: number) {
//         return 
//     }
// }

export class DocError {
    public static error(message: any, status: any, errorCode: number, statusCode?: number) {
        console.log("message")
        const errorObject = {
            message: message,
            status: status,
            errorCode: errorCode,
            statusCode: statusCode
        };

        console.error(errorObject);
        return errorObject;
    }
}
