import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindByIdCustomerUseCase } from "./FindByIdCustomerUseCase"

class FindByIdCustomerController {

    async handle(req: Request, res: Response){

        const findByIdCustomerUseCase = container.resolve(FindByIdCustomerUseCase)

        const {id} = req.params

        if(!id){res.status(400).end()}

        // Buscando cliente
        const customer = await findByIdCustomerUseCase.execute(id)


        return res.status(200).json(customer)

    }

}

export { FindByIdCustomerController }