import { Request, Response } from "express"
import { ListUserInactiveServices } from "../../backup/services/User/ListUserInactiveServices"

class ListUserInactiveController{

    async list(req: Request, res: Response){

        // Instanciando usuário
        const listUserInativeServices = new ListUserInactiveServices()

        // Buscando usuários inativos
        const users = await listUserInativeServices.list()
        
        return res.status(200).json(users)

    }

}

export { ListUserInactiveController }
