import { Request, Response} from "express"
import { container } from "tsyringe"
import { ListByCustomerUseCase } from "./ListByCustomerUseCase"

class ListByCustomerController {

    async handle(req: Request, res: Response){

        const { skip = 0, take = 10 } = req.query

        const listByCustomerUseCase = container.resolve(ListByCustomerUseCase)
        const embalagens = await listByCustomerUseCase.execute({skip: Number(skip), take:  Number(take)})

        return res.status(200).json(embalagens)

    }

}

export { ListByCustomerController }