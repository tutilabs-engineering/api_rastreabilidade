import { Request, Response} from "express"
import { container } from "tsyringe"
import { ListByModelPackageUseCase } from "./ListByModelPackageUseCase"

class ListByModelPackageController {

    async handle(req: Request, res: Response){

        const { id } = req.params
        const { limit = 0, take = 10 } = req.query

        const listByModelPackageUseCase = container.resolve(ListByModelPackageUseCase)
        const embalagens = await listByModelPackageUseCase.execute({model: id}, {limit: Number(limit), take:  Number(take)})

        return res.status(200).json(embalagens)

    }

}

export { ListByModelPackageController }