import {Request, Response} from "express"
import { CreateUserServices } from "../../backup/services/User/CreateUserServices"

class CreateUserController {

    async create(req: Request, res: Response){

            // Request de dados para api
            const { nome, matricula, email, password, admin, mnt, ativo } = req.body

            const createUserServices = new CreateUserServices()

            // Execução da criação de usuário
            const {user} = await createUserServices.create({ nome, matricula, email, password, admin, mnt, ativo })

            return res.status(200).json({ user })
    }

}

export {CreateUserController}