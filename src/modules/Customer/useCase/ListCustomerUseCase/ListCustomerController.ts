import { Request, Response } from "express"
import { ListCustomerUseCase } from "./ListCustomerUseCase"
import{ container } from "tsyringe"


class ListCustomerController {

    async handle(req: Request, res:Response){
        const { take = 10, skip = 0 , status = 1} = req.query

        const listCustomerUseCase = container.resolve(ListCustomerUseCase)
        
        return res.status(200).json({data: await listCustomerUseCase.execute(
            {skip:Number(skip), status: Number(status) ,take: Number(take)})})

    }

}

export { ListCustomerController }