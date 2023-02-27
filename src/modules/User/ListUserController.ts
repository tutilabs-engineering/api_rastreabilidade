import {Request, Response} from "express"
import { ListUserServices } from "../../backup/services/User/ListUserServices"

class ListUserController {
    
    async list(req: Request, res: Response){

        const listUserServices = new ListUserServices()

        // Buscando lista de usuários
        const users = await listUserServices.list()

        return res.status(200).json(users)

    }

}

export { ListUserController }