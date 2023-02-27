import {Request, Response} from "express"
import { AuthenticateUserServices } from "../../backup/services/User/AuthenticateUserServices" 

class AuthenticateUserController {

    async execute(req:Request, res:Response){
        // Request de dados para api
        const {email, password} = req.body

        const authenticateUserServices = new AuthenticateUserServices()

        // Execução da autenticação
        const {token, user} = await authenticateUserServices.execute({ email, password })

        res.status(200).json({ token, user })

    }

}

export { AuthenticateUserController }