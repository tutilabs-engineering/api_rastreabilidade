import { Request, Response } from "express"
import { DeleteCpcServices } from "../../../services/Cpc/DeleteCpcServices"

class DeleteCpcController{

    async delete(req: Request, res: Response){

        // recebendo dados da requisição
        const {id} = req.params 

        // instanciando serviço de exclusão de CPC
        const deleteCpcServices = new DeleteCpcServices()

        // deletando
        const menssage = await deleteCpcServices.delete(id)

        return res.status(200).json(menssage)

    }

}

export { DeleteCpcController }