import { Request, Response} from "express"
import { CreateCpcServices } from "../../../../backup/services/Cpc/CreateCpcServices"

class CreateCpcController{

    async create(req: Request, res: Response){

        // pegando da requisição
        const {FK_customer, FK_model} = req.body

        // instanciando criação de CPC
        const createCpcServices = new CreateCpcServices()

        // salvando no banco
        const cpc = await createCpcServices.create({FK_customer, FK_model})

        return res.status(200).json(cpc)

    }
    
}

export { CreateCpcController }