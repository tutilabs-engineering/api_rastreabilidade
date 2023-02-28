class AppError{
    statusCode: number;
    message: string;

    constructor(statusCode = 404, message: string){
        this.statusCode = statusCode;
        this.message = message
    }
}

export { AppError }