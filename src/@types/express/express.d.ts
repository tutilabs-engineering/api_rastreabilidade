// Criando um campo dentro do request

declare namespace Express {
    export interface Request {
        userId: string,
        pathImg: string
    }
}