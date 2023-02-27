import { Request, Response } from "express"
import { DeleteUserServices } from "../../backup/services/User/DeleteUserServices"

class DeleteUserController {

    async delete(req: Request, res: Response){

        const {id} = req.params

        const deleteUserServices = new DeleteUserServices()

        const menssage = deleteUserServices.delete(id)

        return res.status(200).json(menssage)

    }

}

export { DeleteUserController }