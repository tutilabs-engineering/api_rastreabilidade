import { Request, Response } from "express"
import { ListCustomerInactiveServices } from "../../backup/services/Customer/ListCustomerInactiveServices"

class ListCustomerInactiveController {

    async list(req: Request, res: Response){

        const listCostumerInactiveServices = new ListCustomerInactiveServices()

        // Buscando clientes
        const customer = await listCostumerInactiveServices.list()

        return res.status(200).json(customer)

    }

}   

export { ListCustomerInactiveController }