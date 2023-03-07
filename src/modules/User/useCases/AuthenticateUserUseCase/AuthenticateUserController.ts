import {Request, Response} from "express"
import { container } from "tsyringe"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

class AuthenticateUserController {

    async handle(req:Request, res:Response){
        // Request de dados para api
        const {email, password} = req.body

        const authenticateUserUseCase  =  container.resolve(AuthenticateUserUseCase)

        // Execução da autenticação
        const {token, user} = await authenticateUserUseCase.execute({ email, password })

        res.status(200).json({ token, user })

    }

}

export { AuthenticateUserController }