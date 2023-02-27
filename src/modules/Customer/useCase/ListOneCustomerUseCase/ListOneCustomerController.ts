import { Request, Response } from "express"
import { ListOneCustomerServices } from "../../backup/services/Customer/ListOneCustomerServices"

class ListOneCustomerController {

    async list(req: Request, res: Response){

        const listOneCustomerServices = new ListOneCustomerServices()

        const {id} = req.params

        if(!id){res.status(400).end()}

        // Buscando cliente
        const customer = await listOneCustomerServices.list(id)


        return res.status(200).json(customer)

    }

}

export { ListOneCustomerController }