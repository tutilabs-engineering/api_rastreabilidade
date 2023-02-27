import { Request, Response } from "express"
import {container} from "tsyringe"

import {ListCpcByCustomerUseCase} from "./ListCpcByCustomerUseCase"
class ListCpcByCustomerController{

    async handle(req: Request, res: Response){

        // recebendo dados da requisição
        const { FK_customer } = req.params 
   
        const listCpcByCustomerUseCase = container.resolve(ListCpcByCustomerUseCase)

        return res.status(200).json({ data: await listCpcByCustomerUseCase.execute({id: FK_customer})})
        
    }


}

export { ListCpcByCustomerController }