import { Request, Response } from "express"
import { DeleteCustomerServices } from "../../backup/services/Customer/DeleteCustomerServices"

class DeleteCustomerController {

    async delete(req: Request, res: Response){

        const {id} = req.params

        // Instanciando serviço de exclusão de clientes
        const deleteCustomerServices = new DeleteCustomerServices()

        // deletando cliente do banco
        const menssage = await deleteCustomerServices.delete(id)

        return res.status(200).json(menssage)

    }   

}

export { DeleteCustomerController }