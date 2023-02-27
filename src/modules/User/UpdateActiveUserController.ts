import { Request, Response } from "express"
import { UpdateActiveUserServices } from "../../backup/services/User/UpdateActiveUserServices"

class UpdateActiveUserController {

    async active(req: Request, res: Response){

        // Buscando dados do parametro
        const {id} = req.params

        const deleteUserServices = new UpdateActiveUserServices()

        // Recebendo mensagem do usuário deletado
        const menssage = await deleteUserServices.active(id)

        return res.status(200).json(menssage)

    }

}

export { UpdateActiveUserController }