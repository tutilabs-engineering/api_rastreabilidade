import { Request, Response} from "express"
// import { ListModelServices } from "../../../../backup/services/Model/ListModelServices"
import { container } from "tsyringe"
import { ListCustomerWithModelUseCase } from "./ListCustomerWithModelUseCase"



class ListCustomerWithModelController {

    async handle(req: Request, res: Response){
        const { skip = 0,take = 10 } = req.query
        const { cnpj } = req.params
         
        const listCustomerWithModelUseCase = container.resolve(ListCustomerWithModelUseCase)

        return res.status(200).json({  data: await listCustomerWithModelUseCase.execute(
            {skip: Number(skip), take: Number(take)}, cnpj)
        })


    }

}

export { ListCustomerWithModelController }