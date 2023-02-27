import { Request, Response } from "express"
import { CreateCustomerServices } from "../../backup/services/Customer/CreateCustomerServices"

class CreateCustomerController {

    async create(req: Request, res: Response){

        // Pegando da dados da requisição
        const {cnpj, razao_social, ativo} = req.body
 
        // Validando imagens
        let img_path = req.pathImg

        if(!img_path){img_path = ""}

        const createCustomerServices = new CreateCustomerServices()

        // criando cliente
        const customer = await createCustomerServices.create({cnpj, razao_social, ativo, img_path})

        return res.status(200).json(customer)

    }

}

export { CreateCustomerController }