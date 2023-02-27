import { Request, Response } from "express"
import { UpdateAticveCustomerServices } from "../../backup/services/Customer/UpdateActiveCustomerServices"

class UpdateAticveCustomerController {

    async active(req: Request,res: Response){

        // Buscando parametro na requisição
        const {id} = req.params

        // Iniciando serviço para deletar cliente
        const updateAticveCustomerServices = new UpdateAticveCustomerServices()

        // Mudando chave do cliente
        const mensagem = await updateAticveCustomerServices.active(id)

        return res.status(200).json(mensagem)

    }

}

export { UpdateAticveCustomerController }