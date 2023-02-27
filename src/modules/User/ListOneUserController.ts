import { Request, Response } from "express"
import { ListOneUserServices } from "../../backup/services/User/ListOneUserServices"

class ListOneUserController{

    async list(req: Request, res: Response){
 
        // Buscando o id do parametro da rota
        const {id} = req.params
        
        const listOneUserServices = new ListOneUserServices()

        // Buscando usuário
        const user = await listOneUserServices.list(id)

        return res.status(200).json(user)

    }

}

export { ListOneUserController }