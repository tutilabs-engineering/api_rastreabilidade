import { Request, Response} from "express"
import { container } from "tsyringe"
import { ListPackageByCustomerUseCase } from "./ListPackageByCustomerUseCase"

class ListPackageByCustomerController {

    async handle(req: Request, res: Response){

        const { skip = 0, take = 10 } = req.query
        const { FK_destino }= req.params

        const listByCustomerUseCase = container.resolve(ListPackageByCustomerUseCase)
        const embalagens = await listByCustomerUseCase.execute({skip: Number(skip), take:  Number(take)},FK_destino)

        return res.status(200).json(embalagens)

    }

}

export { ListPackageByCustomerController }