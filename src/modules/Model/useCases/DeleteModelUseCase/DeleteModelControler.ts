import { Request, Response } from "express"
import { DeleteModelServices } from "../../services/Model/DeleteModelServices" 

class DeleteModelController{

    async delete(req: Request, res: Response){

        // Recebendo dados da requisição
        const {id} = req.params 

        // instanciando serviços de exclusão de modelos
        const deleteModelServices = new DeleteModelServices()

        const menssage = await deleteModelServices.delete(id)

        return res.status(200).json(menssage)

    }

}

export { DeleteModelController }